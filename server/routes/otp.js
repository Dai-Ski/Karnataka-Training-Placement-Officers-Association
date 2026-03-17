const express = require('express');
const router = express.Router();
const { Resend } = require('resend');

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
if (!resend) {
  console.warn('⚠️ RESEND_API_KEY not found. Email features will be disabled.');
}

const Industry = require('../models/Industry');
const TPO = require('../models/TPO');
const Student = require('../models/Student');

// In-memory OTP store: email -> { otp, expiresAt }
const otpStore = new Map();

const OTP_EXPIRY_MS = 10 * 60 * 1000; // 10 minutes

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit
}

// POST /api/otp/send
router.post('/send', async (req, res) => {
  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email address.' });
  }

  // Check if email already exists in any collection
  const qEmail = email.toLowerCase();
  const exists = await Promise.all([
    Industry.exists({ email: qEmail }),
    TPO.exists({ email: qEmail }),
    Student.exists({ email: qEmail })
  ]);

  if (exists.some((val) => val !== null)) {
    return res.status(400).json({ success: false, message: 'This email address is already registered.' });
  }

  const otp = generateOTP();
  const expiresAt = Date.now() + OTP_EXPIRY_MS;
  otpStore.set(email.toLowerCase(), { otp, expiresAt });

  try {
    if (!resend) {
      throw new Error('Email service is not configured (RESEND_API_KEY missing).');
    }
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'KTPOA <info@ktpoa.org>',
      to: [email],
      subject: 'Your KTPOA Email Verification OTP',
      html: `
        <div style="font-family: Georgia, serif; max-width: 480px; margin: 0 auto; background: #f9f9f9; border-radius: 10px; overflow: hidden;">
          <div style="background: #1E293B; padding: 28px 32px; text-align: center;">
            <h1 style="color: #C9A870; margin: 0; font-size: 24px; letter-spacing: 1px;">KTPOA</h1>
            <p style="color: #94a3b8; margin: 4px 0 0; font-size: 13px;">Karnataka Training & Placement Officers Association</p>
          </div>
          <div style="padding: 32px 32px 24px; background: #fff;">
            <h2 style="color: #1E293B; margin: 0 0 12px; font-size: 20px;">Email Verification</h2>
            <p style="color: #475569; font-size: 14px; margin: 0 0 24px; line-height: 1.6;">
              Use the OTP below to verify your email address for your KTPOA registration.
            </p>
            <div style="background: #f1f5f9; border: 2px dashed #C9A870; border-radius: 8px; padding: 20px; text-align: center; margin-bottom: 24px;">
              <span style="font-size: 36px; font-weight: bold; color: #1E293B; letter-spacing: 8px;">${otp}</span>
            </div>
            <p style="color: #94a3b8; font-size: 12px; margin: 0; text-align: center;">
              This OTP expires in <strong>10 minutes</strong>. Do not share it with anyone.
            </p>
          </div>
          <div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 32px; text-align: center;">
            <p style="color: #94a3b8; font-size: 11px; margin: 0;">© 2025 Karnataka Training & Placement Officers Association</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      otpStore.delete(email.toLowerCase());
      return res.status(400).json({ success: false, message: error.message || 'Failed to send OTP. Please check your email address.' });
    }

    res.json({ success: true, message: 'OTP sent to your email address.' });
  } catch (error) {
    console.error('Resend catch error:', error);
    otpStore.delete(email.toLowerCase());
    res.status(500).json({ success: false, message: 'Failed to send OTP. Please try again.' });
  }
});

// POST /api/otp/verify
router.post('/verify', (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ success: false, message: 'Email and OTP are required.' });
  }

  const record = otpStore.get(email.toLowerCase());

  if (!record) {
    return res.status(400).json({ success: false, message: 'No OTP found for this email. Please request a new one.' });
  }

  if (Date.now() > record.expiresAt) {
    otpStore.delete(email.toLowerCase());
    return res.status(400).json({ success: false, message: 'OTP has expired. Please request a new one.' });
  }

  if (record.otp !== otp.trim()) {
    return res.status(400).json({ success: false, message: 'Incorrect OTP. Please try again.' });
  }

  otpStore.delete(email.toLowerCase());
  res.json({ success: true, message: 'Email verified successfully!' });
});

module.exports = router;
