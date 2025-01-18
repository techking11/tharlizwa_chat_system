import React from 'react';
import { Toaster } from 'react-hot-toast';

const CustomToast: React.FC = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        // Default styles for all toasts
        style: {
          border: '1px solid #4ade80',
          padding: '16px',
          borderRadius: '8px',
          fontSize: '14px',
        },
        // Success toast styles
        success: {
          style: {
            border: '1px solid #22c55e', // Green border
            backgroundColor: '#ecfdf5', // Light green background
            color: '#15803d', // Dark green text
          },
          iconTheme: {
            primary: '#22c55e', // Green icon
            secondary: '#ecfdf5', // Light background
          },
        },
        // Error toast styles
        error: {
          style: {
            border: '1px solid #dc2626', // Red border
            backgroundColor: '#fef2f2', // Light red background
            color: '#991b1b', // Dark red text
          },
          iconTheme: {
            primary: '#dc2626', // Red icon
            secondary: '#fef2f2', // Light background
          },
        },
      }}
      containerStyle={{ marginBottom: '50px' }}
    />
  );
};

export default CustomToast;
