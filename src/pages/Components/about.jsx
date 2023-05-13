import React, { useState } from 'react';

export default function About() {
  const [activeButton, setActiveButton] = useState(3);

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <>
      <section className='lg:px-28 md:px-20 sm:px-12 mb-32 xs:px-2'>
        <h1 className="text-6xl font-bold mt-8 text-center text-blue-500 dark:text-white">About</h1>
        <p className='text-xl text-center text-gray-400 dark:text-gray-50 py-4 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, laborum!</p>
        <div className="flex flex-col md:flex-row">
          {/* Left side */}
          <div className="lg:w-3/12 md:w-3/12 py-8 px-4">
            <button
              className={`w-full py-2 text-xl text-blue-900 border-blue-900 border focus:text-white font-bold rounded-md mb-2 ${
                activeButton === 1 ? 'bg-blue-900 text-white dark:bg-blue-500' : 'bg-white text-gray-900 dark:text-blue-500'
              }`}
              onClick={() => handleButtonClick(1)}
            >
              Personal
            </button>
            <button
              className={`w-full py-2 text-xl text-blue-900 border-blue-900 border focus:text-white font-bold rounded-md mb-2 ${
                activeButton === 2 ? 'bg-blue-900 text-white dark:bg-blue-500' : 'bg-white text-gray-900 dark:text-blue-500'
              }`}
              onClick={() => handleButtonClick(2)}
            >
              Study
            </button>
            <button
              className={`w-full py-2 text-xl text-blue-900 border-blue-900 border focus:text-white font-bold rounded-md mb-2 ${
                activeButton === 3 ? 'bg-blue-900 text-white dark:bg-blue-500' : 'bg-white text-gray-900 dark:text-blue-500'
              }`}
              onClick={() => handleButtonClick(3)}
            >
              Experience
            </button>
          </div>

          {/* Right side */}
          <div className="lg:w-9/12 md:w-10/12 px-4">
            {activeButton === 1 && (
              <div className='py-8 ps-4'>
                <p className='text-xl font-normal text-gray-600 dark:text-gray-50'>Mubashir Iftikhar</p>
                <p className='text-xl font-normal text-gray-600 dark:text-gray-50'>Iftikhar Khan</p>
                <p className='text-xl font-normal text-gray-600 dark:text-gray-50'>0310 - 4278448</p>
                <p className='text-xl font-normal text-gray-600 dark:text-gray-50'>mubashiriftikharkhan@gmail.com</p>
                <p className='text-xl font-normal text-gray-600 dark:text-gray-50'>Township Lahore, Pakistan</p>
              </div>
            )}
            {activeButton === 2 && (
              <div className="flex flex-wrap -m-4 py-1 ps-4">
                <div className="2xl:w-1/4 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full text-gray-400 dark:text-gray-100 py-1 p-4">
                  <p className='font-bold text-2xl text-black dark:text-gray-50'>BS Information Tehnology</p>
                  <p className='text-md'>(2019 - 2023)</p>
                  <p className='text-xl'>Punjab University</p>
                </div>
                <div className="2xl:w-1/4 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full text-gray-400 dark:text-gray-100 py-1 p-4">
                  <p className='font-bold text-2xl text-black dark:text-gray-50'>F.S.c (Pre - Engineering)</p>
                  <p className='text-md'>(2017 - 2019)</p>
                  <p className='text-xl'>Government College Township</p>
                </div>
                <div className="2xl:w-1/4 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full text-gray-400 dark:text-gray-100 py-1 p-4">
                  <p className='font-bold text-2xl text-black dark:text-gray-50'>Matric (Science)</p>
                  <p className='text-md'>(2015 - 2017)</p>
                  <p className='text-xl'>Government High School</p>
                </div>
              </div>
            )}
            {activeButton === 3 && (
              <div className="flex flex-wrap -m-4 py-1 ps-4">
                <div className="2xl:w-1/4 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full p-4">
                  <div className='text-gray-400 dark:text-gray-100 xs:pb-4'>
                    <p className='font-bold text-2xl text-blue-900 dark:text-gray-50'>Web Development frontend</p>
                    <p className='text-md'>(6 Months)</p>
                    <p className='text-xl'>University of Management and Technology</p>
                  </div>
                </div>
                <div className="2xl:w-1/4 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full p-4">
                  <div className='text-gray-400 dark:text-gray-100 xs:pb-4'>
                    <p className='font-bold text-2xl text-blue-900 dark:text-gray-50'>Data Visualization</p>
                    <p className='text-md'>(3 Months)</p>
                    <p className='text-xl'>Punjab University</p>
                  </div>
                </div>
                <div className="2xl:w-1/4 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full p-4">
                  <div className='text-gray-400 dark:text-gray-100 xs:pb-4'>
                    <p className='font-bold text-2xl text-blue-900 dark:text-gray-50'>Python</p>
                    <p className='text-md'>(3 Months)</p>
                    <p className='text-xl'>Wizmen Systems</p>
                  </div>
                </div>
                <div className="2xl:w-1/4 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-full p-4">
                  <div className='text-gray-400 dark:text-gray-100 xs:pb-4'>
                    <p className='font-bold text-2xl text-blue-900 dark:text-gray-50'>Microsoft Office</p>
                    <p className='text-xl'>Government College of Science</p>
                    <p className='text-md'>Wahdat Road, Lahore</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};