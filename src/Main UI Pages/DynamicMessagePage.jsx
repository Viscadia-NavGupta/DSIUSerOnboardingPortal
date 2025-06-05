import React from 'react';
import './DynamicMessagePage.css';

import ViscadiaLogo from '../assets/Viscadia_logo_red.png';
import DsiLogo from '../assets/DSI_logo.png';        // ← DSI logo imported here
import PoweredByBg from '../assets/Flow.png';

function DynamicMessagePage({ message }) {
  const defaultMessage = 'This email is not registered. Please contact your administrator.';
  const displayMessage = message || defaultMessage;

  const handleContactAdmin = () => {
    // Example action—adjust as needed
    // alert('Contact Admin button clicked!');
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

        {/* Dynamic Message Box */}
        <div className="dynamic-message-box">
          <p>{displayMessage}</p>
        </div>

        {/* Contact Admin Button */}
        <button
          className="contact-admin-button"
          onClick={handleContactAdmin}
        >
          Contact
        </button>

        <div className="powered-by-container">
          <img
            src={PoweredByBg}
            alt="Flow Background"
            className="powered-by-bg"
          />
        </div>
      </div>

      <footer className="onboarding-footer">
        <p>© 2025 Viscadia. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default DynamicMessagePage;
