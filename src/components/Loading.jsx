import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-white bg-opacity-30'>
      <ClipLoader size={50} />
    </div>
  );
};

export default Loading;