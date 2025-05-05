import React, { useState } from 'react';
import './OnboardingPortal.css';
import ViscadiaLogo from '../assets/Viscadia_logo_red.png';
import PoweredByBg from '../assets/Flow.png';

// Import the sendOTP function from your AuthAws.js file (adjust the path if needed)
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
      // On success, navigate to /reset and pass the email as state
      navigate('/reset', { state: { email } });
    } catch (error) {
      // On error, navigate to /dynamic with the error message
      navigate('/dynamic', { state: { message: error.message } });
    } finally {
      setLoading(false);
    }
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
        <h2>Viscadia Forecasting Solution</h2>
        <h3>Password Reset Portal</h3>
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

export default OnboardingPortal;
