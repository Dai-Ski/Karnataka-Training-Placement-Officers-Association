import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";

interface EmailOTPFieldProps {
  /** Called when email is verified — pass the verified email up to the parent form */
  onVerified: (email: string) => void;
  /** Optional: called whenever the email input value changes */
  onEmailChange?: (email: string) => void;
}

type OTPState = "idle" | "sending" | "waiting" | "verifying" | "verified";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function EmailOTPField({ onVerified, onEmailChange }: EmailOTPFieldProps) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpState, setOtpState] = useState<OTPState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const emailValid = isValidEmail(email);
  const isVerified = otpState === "verified";
  const showOTPInput = otpState === "waiting" || otpState === "verifying";

  // Notify parent of email changes
  useEffect(() => {
    onEmailChange?.(email);
  }, [email, onEmailChange]);

  const handleSendOTP = async () => {
    if (!emailValid) return;
    setErrorMsg("");
    setOtpState("sending");

    try {
      const res = await fetch("/api/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.success) {
        setOtpState("waiting");
        setOtp("");
        toast.success("OTP Sent!", {
          description: `A 6-digit verification code was sent to ${email}`,
        });
      } else {
        setOtpState("idle");
        setErrorMsg(data.message || "Failed to send OTP.");
        toast.error("Failed to send OTP", { description: data.message });
      }
    } catch {
      setOtpState("idle");
      setErrorMsg("Network error. Please try again.");
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp.trim()) {
      setErrorMsg("Please enter the OTP.");
      return;
    }
    setErrorMsg("");
    setOtpState("verifying");

    try {
      const res = await fetch("/api/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();

      if (data.success) {
        setOtpState("verified");
        onVerified(email);
        toast.success("Email Verified!", {
          description: "Your email address has been verified successfully.",
        });
      } else {
        setOtpState("waiting");
        setErrorMsg(data.message || "Incorrect OTP.");
      }
    } catch {
      setOtpState("waiting");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <div className="space-y-3">
      {/* Email + Send OTP button row */}
      <div className="flex gap-2 items-center">
        <div className="relative flex-1">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (otpState !== "idle") {
                setOtpState("idle");
                setOtp("");
                setErrorMsg("");
              }
            }}
            disabled={isVerified}
            required
            className={
              isVerified
                ? "border-green-500 bg-green-50 pr-8"
                : ""
            }
          />
          {isVerified && (
            <CheckCircle2 className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />
          )}
        </div>

        {/* Show Send/Resend OTP button only when email is valid and not yet verified */}
        {emailValid && !isVerified && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleSendOTP}
            disabled={otpState === "sending"}
            className="shrink-0 border-[#1E293B] text-[#1E293B] hover:bg-[#1E293B] hover:text-white transition-colors"
          >
            {otpState === "sending" ? (
              <>
                <Loader2 className="h-3.5 w-3.5 mr-1.5 animate-spin" />
                Sending…
              </>
            ) : otpState === "waiting" || otpState === "verifying" ? (
              <>
                <Mail className="h-3.5 w-3.5 mr-1.5" />
                Resend OTP
              </>
            ) : (
              <>
                <Mail className="h-3.5 w-3.5 mr-1.5" />
                Send OTP
              </>
            )}
          </Button>
        )}

        {/* Verified badge */}
        {isVerified && (
          <span className="shrink-0 inline-flex items-center gap-1 text-green-600 text-sm font-medium">
            <CheckCircle2 className="h-4 w-4" />
            Verified
          </span>
        )}
      </div>

      {/* OTP input + Verify button */}
      {showOTPInput && (
        <div className="flex gap-2 items-start">
          <div className="flex-1">
            <Input
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value.replace(/\D/g, "").slice(0, 6));
                setErrorMsg("");
              }}
              className={errorMsg ? "border-red-400" : ""}
              autoFocus
            />
            {errorMsg && (
              <p className="text-red-500 text-xs mt-1">{errorMsg}</p>
            )}
          </div>
          <Button
            type="button"
            size="sm"
            onClick={handleVerifyOTP}
            disabled={otpState === "verifying" || otp.length < 6}
            className="shrink-0 bg-[#1E293B] hover:bg-[#2D3748] text-white"
          >
            {otpState === "verifying" ? (
              <>
                <Loader2 className="h-3.5 w-3.5 mr-1.5 animate-spin" />
                Verifying…
              </>
            ) : (
              "Verify OTP"
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
