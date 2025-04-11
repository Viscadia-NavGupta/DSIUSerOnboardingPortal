import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OnboardingPortal from './Main UI Pages/UserOnboarding';
import DynamicMessagePage from './Main UI Pages/DynamicMessagePage';
import ResetPasswordPage from './Main UI Pages/ResetPasswordPage';
import PasswordChangedPage from './Main UI Pages/PasswordChangedPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OnboardingPortal />} />
        <Route
          path="/dynamic"
          element={
            <DynamicMessagePage message="This email is not registered. Please contact your administrator." />
          }
        />
        <Route path="/reset" element={<ResetPasswordPage />} />
        <Route path="/password-changed" element={<PasswordChangedPage />} />
      </Routes>
    </>
  );
}

export default App;