import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResetPasswordPage.css';

import ViscadiaLogo from '../assets/Viscadia_logo_red.png';
import DsiLogo from '../assets/DSI_logo.png';          // ← DSI logo on the right
import PoweredByBg from '../assets/Flow.png';

// Import React Icons for inputs
import { AiOutlineExclamationCircle, AiOutlineLock } from 'react-icons/ai';

// Import the verifyOTPAndReset function
import { verifyOTPAndReset } from './AuthAWS';

function ResetPasswordPage() {
  const location = useLocation();
  const navigate = useNavigate();
  // Get the email from the previous page; fallback to empty string if not provided
  const email = location.state?.email || '';

  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Validate new password: min length 8 and at least one special character
  const hasSpecialChar = (str) => /[!@#$%^&*(),.?":{}|<>]/.test(str);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }
    if (!hasSpecialChar(newPassword)) {
      setError('Password must include at least one special character.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      await verifyOTPAndReset(email, otp, newPassword);
      // Navigate to the password changed page on success
      navigate('/password-changed');
    } catch (err) {
      setError(err.message || 'Error verifying OTP or resetting password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-card">

        {/* ───────────── logo header ───────────── */}
        <div className="logo-header">
          {/* Viscadia on the left */}
          <img
            src={ViscadiaLogo}
            alt="Viscadia Logo"
            className="logo-img"
          />

          <div className="logo-separator" />

          {/* DSI on the right */}
          <img
            src={DsiLogo}
            alt="DSI Logo"
            className="viscadia-img"
          />
        </div>
        {/* ─────────────────────────────────────── */}

        <h2>DSI ADC Forecasting Solution</h2>
        <h3>User Onboarding Portal</h3>

        {error && <div className="error-message">{error}</div>}

        <form className="onboarding-form" onSubmit={handleSubmit}>
          <div className="input-with-icon">
            <input
              type="text"
              placeholder="Verification Code (OTP sent to the email)"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <AiOutlineExclamationCircle className="input-icon" />
          </div>

          <div className="input-with-icon">
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <AiOutlineLock className="input-icon" />
          </div>

          <div className="input-with-icon">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <AiOutlineLock className="input-icon" />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        <div className="powered-by-container">
          <img
            src={PoweredByBg}
            alt="Flow Background"
            className="powered-by-bg"
          />
        </div>
      </div>

      <footer className="onboarding-footer">
        <p>
          © 2025 Viscadia. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default ResetPasswordPage;
