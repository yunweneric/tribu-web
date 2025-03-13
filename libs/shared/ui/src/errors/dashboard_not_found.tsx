import React from 'react';
import { AppButton } from '../others';
import { useNavigate } from 'react-router-dom';
export const DashboardNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen flex flex-col items-center justify-center h-screen">
      <div className="mb-5 text-center">
        <h2>Page not found!</h2>
        <p>
          We're sorry, the page you requested could not be found. Please go back
        </p>
      </div>
      <AppButton label="Back Home" onClick={() => navigate('/')} />
    </div>
  );
};

export default DashboardNotFound;
