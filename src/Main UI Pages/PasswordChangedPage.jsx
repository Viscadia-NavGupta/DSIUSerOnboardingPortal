import React from 'react';
import './PasswordChangedPage.css';  // Reuse your existing CSS
import ViscadiaLogo from '../assets/Viscadia_logo_red.png';
import PoweredByBg from '../assets/Flow.png';

// React Icons (Ant Design outline icon)
import { AiOutlineCheckCircle } from 'react-icons/ai';

function PasswordChangedPage() {
  return (
    <div className="onboarding-container">
      <div className="onboarding-card">
        {/* Logo at the top */}
        <div className="card-logo">
          <img
            src={ViscadiaLogo}
            alt="Viscadia Logo"
            className="card-logo-img"
          />
        </div>

        {/* Success message */}
        <h2>Your password has been successfully changed.</h2>

        {/* Large green check icon */}
        <AiOutlineCheckCircle className="success-check-icon" />

        {/* Wave at the bottom */}
        <div className="powered-by-container">
          {/* <p>Powered by Viscadia</p> */}
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
          © 2025 Viscadia. All rights reserved. <a href="#contact">Contact Us</a>
        </p>
      </footer>
    </div>
  );
}

export default PasswordChangedPage;
