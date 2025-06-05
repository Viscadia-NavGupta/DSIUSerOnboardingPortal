import React from 'react';
import './PasswordChangedPage.css';

import ViscadiaLogo from '../assets/Viscadia_logo_red.png';
import DsiLogo from '../assets/DSI_logo.png';        // ← DSI logo
import PoweredByBg from '../assets/Flow.png';

// React Icon for the success check
import { AiOutlineCheckCircle } from 'react-icons/ai';

function PasswordChangedPage() {
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

        <h2>Your password has been successfully changed.</h2>

        {/* Large green check icon */}
        <AiOutlineCheckCircle className="success-check-icon" />

        {/* Powered‐by wave/image at the bottom */}
        <div className="powered-by-container">
          <img
            src={PoweredByBg}
            alt="Flow Background"
            className="powered-by-bg"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="onboarding-footer">
        <p>
          © 2025 Viscadia. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default PasswordChangedPage;
