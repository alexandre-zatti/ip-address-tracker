import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="animate-spin rounded-full h-12 w-12 border-4 border-white border-opacity-20 border-t-transparent"></div>
    </div>
  );
};

export default Loading;
