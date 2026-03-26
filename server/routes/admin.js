const express = require('express');
const router = express.Router();
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');
const { format } = require('date-fns');
const Student = require('../models/Student');
const TPO = require('../models/TPO');
const Industry = require('../models/Industry');

// Auth setup
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: Buffer.from(process.env.GOOGLE_PRIVATE_KEY_BASE64, 'base64').toString('utf8'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

router.post('/export-users', async (req, res) => {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (!spreadsheetId) {
      return res.status(500).json({ success: false, message: 'GOOGLE_SHEET_ID not configured' });
    }

    const doc = new GoogleSpreadsheet(spreadsheetId, serviceAccountAuth);
    await doc.loadInfo(); // loads document properties and worksheets

    // 1. Fetch Data
    const students = await Student.find().sort({ submittedAt: -1 });
    const tpos = await TPO.find().sort({ submittedAt: -1 });
    const industries = await Industry.find().sort({ submittedAt: -1 });

    // 2. Helper to manage sheets
    const syncSheet = async (title, headers, data, fields) => {
      let sheet = doc.sheetsByTitle[title];
      if (!sheet) {
        sheet = await doc.addSheet({ title, headerValues: headers });
      } else {
        await sheet.clear();
        await sheet.setHeaderRow(headers);
      }

      const rows = data.map(item => {
        const row = {};
        fields.forEach(f => {
          const v = item[f];
          row[f] = v instanceof Date ? format(v, 'yyyy-MM-dd HH:mm') : (v || '');
        });
        return row;
      });

      if (rows.length > 0) {
        await sheet.addRows(rows);
      }
    };

    // 3. Sync all categories
    await syncSheet(
      'Students',
      ['fullName', 'email', 'phone', 'institution', 'course', 'specialization', 'yearOfStudy', 'expectedGraduation', 'cgpa', 'skills', 'submittedAt'],
      students,
      ['fullName', 'email', 'phone', 'institution', 'course', 'specialization', 'yearOfStudy', 'expectedGraduation', 'cgpa', 'skills', 'submittedAt']
    );

    await syncSheet(
      'TPOs',
      ['fullName', 'designation', 'institution', 'institutionType', 'email', 'phone', 'city', 'state', 'experience', 'submittedAt'],
      tpos,
      ['fullName', 'designation', 'institution', 'institutionType', 'email', 'phone', 'city', 'state', 'experience', 'submittedAt']
    );

    await syncSheet(
      'Industry',
      ['companyName', 'industry', 'companySize', 'contactPersonName', 'designation', 'email', 'phone', 'website', 'city', 'submittedAt'],
      industries,
      ['companyName', 'industry', 'companySize', 'contactPersonName', 'designation', 'email', 'phone', 'website', 'city', 'submittedAt']
    );

    res.json({ 
      success: true, 
      url: `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit` 
    });

  } catch (error) {
    console.error('Export Error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
