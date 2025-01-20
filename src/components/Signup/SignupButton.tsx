import React, { ReactNode } from 'react';

const SignupButton: React.FC<{ children: ReactNode }> = ({ children }) => (
  <button
    type="submit"
    className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 focus:ring-4 focus:ring-gray-400"
  >
    {children}
  </button>
);

export default SignupButton;
