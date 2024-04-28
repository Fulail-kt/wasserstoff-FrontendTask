
'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import loading from '../../../../public/loading1.png';

const Loading = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control animation

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsOpen(prevOpen => !prevOpen); // Toggle animation state on interval
    }, 2000); // Adjust interval for desired animation speed (lower = faster)

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const style = {
    width: isOpen ? '50%' : '90%', // Set the width based on the isOpen state
    height: '100%', // Maintain original height
    objectFit: 'cover', // Maintain aspect ratio and cover container
    transition: 'width 0.7s ease-in-out', // Add CSS transition for smooth animation
  };

  return (
    <div className='bg-[#FFF4DF] w-full h-screen'>
      <div></div>

      <div className='w-full flex justify-center items-center h-full'>
        <div className='w-[60%] h-[500px] flex flex-col justify-around bg-blue-400'>
          <div className='w-full bg-green-200 flex flex-start'>
            <h1>WE</h1>
            <div className='h-full' style={style}>
              <Image src={loading} className='w-full' alt="Loading" />
            </div>
            <h1>Something</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
