import React from 'react';
import "./DynamicMessagePage.css" // or './DynamicMessagePage.css'
import ViscadiaLogo from "../assets/Viscadia_logo_red.png";
import PoweredByBg from '../assets/Flow.png';

function DynamicMessagePage({ message }) {
  // A fallback message if nothing is passed
  const defaultMessage = 'This email is not registered. Please contact your administrator.';
  const displayMessage = message || defaultMessage;

  const handleContactAdmin = () => {
    // For example, redirect or open a mailto link
    alert('Contact Admin button clicked!');
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-card">
        <div className="card-logo">
          <img
            src={ViscadiaLogo}
            alt="Viscadia Logo"
            className="card-logo-img"
          />
        </div>

        <h2>Welcome to the Viscadia Platform</h2>
        <h3>User Onboarding Portal</h3>

        {/* Dynamic Message Box */}
        <div className="dynamic-message-box">
          <p>{displayMessage}</p>
        </div>

        {/* Contact Admin Button */}
        <button className="contact-admin-button" onClick={handleContactAdmin}>
          Contact Admin
        </button>

        <div className="powered-by-container">
          <p>Powered by Viscadia</p>
          <img
            src={PoweredByBg}
            alt="Flow Background"
            className="powered-by-bg"
          />
        </div>
      </div>

      <footer className="onboarding-footer">
        <p>
          © 2025 Viscadia. All rights reserved. <a href="#contact">Contact Us</a>
        </p>
      </footer>
    </div>
  );
}

export default DynamicMessagePage;
