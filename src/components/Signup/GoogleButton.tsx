import React from 'react';
import GoogleIcon from '../../icons/GoogleIcon';
import { useLocation } from 'react-router';

const GoogleButton: React.FC = () => {
  const location = useLocation();
  return (
    <button className="w-full flex mt-5 items-center justify-center bg-white border border-gray-300 text-gray-700 rounded-lg shadow-sm px-6 py-3 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 transition">
      <GoogleIcon classes="h-5 w-5" />
      <span className="ml-3 font-semibold">
        Sign {location.pathname === '/login' ? 'in' : 'up'} with Google
      </span>
    </button>
  );
};

export default GoogleButton;
