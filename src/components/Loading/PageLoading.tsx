import React from 'react';
import { ThreeDot } from 'react-loading-indicators';

function PageLoading(): React.ReactElement {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ThreeDot color="#9da09d" size="large" text="Loading" textColor="" />
    </div>
  );
}

export default PageLoading;
