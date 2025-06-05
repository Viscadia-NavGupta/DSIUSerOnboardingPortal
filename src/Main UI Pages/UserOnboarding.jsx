import React, { useState } from 'react';
import './OnboardingPortal.css';

import DsiLogo from '../assets/DSI_logo.png';              // DSI logo (now on right)
import ViscadiaLogo from '../assets/Viscadia_logo_red.png'; // Viscadia logo (now on left)
import PoweredByBg from '../assets/Flow.png';

import { sendOTP } from './AuthAWS';
import { useNavigate } from 'react-router-dom';

function OnboardingPortal() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendOTP(email);
      navigate('/reset', { state: { email } });
    } catch (error) {
      navigate('/dynamic', { state: { message: error.message } });
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

        {loading ? (
          <div className="loading-screen">Loading...</div>
        ) : (
          <form className="onboarding-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Please enter your registered email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        )}

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

export default OnboardingPortal;
