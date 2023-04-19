import Link from 'next/link';
import React, { useState } from 'react';
import Home from '../Home';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <nav className='fixed  top-0 w-full bg-white z-50  shadow-sm '>
          <div className='relative flex items-center justify-between  p-3 h-20'>
            <div className='flex items-center gap-3  md:ml-6 font-bold'>
              <a href='#'>
                <img
                  src='/images/profile-pic.jpg'
                  alt='profile_pic'
                  className='rounded-full h-12 w-12'
                />
              </a>
              <a href='#'>
                <p
                  className='uppercase text-gray-600  hover:text-mediumturquoise transition
                  duration-300 ease-out'
                >
                  {' '}
                  Daanish Alam
                </p>
              </a>
            </div>
            <div className='absolute  inset-y-0 right-0 flex items-center sm:hidden '>
              <button
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 '
                aria-controls='mobile-menu'
                aria-expanded='false'
                onClick={() => setIsOpen(!isOpen)}
              >
                {/* <span className='sr-only'>Open main menu</span> */}
                {isOpen ? (
                  <svg
                    className='block h-6 w-6 text-black'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6 text-black'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className='hidden  sm:flex gap-10  sm:mr-16  '>
              <a
                href='#'
                className=' scroll-smooth font-bold uppercase text-gray-600  hover:text-mediumturquoise 
                transition duration-300 ease-in-out'
              >
                Home
              </a>
              <a
                href='#about'
                className='font-bold uppercase text-gray-600  hover:text-mediumturquoise 
                transition duration-300 ease-in-out'
              >
                About
              </a>

              <a
                href='#projects'
                className='font-bold uppercase text-gray-600  hover:text-mediumturquoise
                first-letter: transition duration-300 ease-in-out '
              >
                Projects
              </a>
              <a
                href='#contact'
                className='font-bold uppercase text-gray-600 
                hover:text-mediumturquoise transition duration-300 ease-in-out'
              >
                Contact
              </a>
            </div>
          </div>

          <div
            className={`sm:hidden ${isOpen ? 'block' : 'hidden'} `}
            id='mobile-menu'
          >
            <div>
              <hr className='h-px w-full  bg-gray-200 border-0 dark:bg-gray-700' />
              <div className='flex flex-col  items-end gap-1 shadow-lg '>
                <a
                  href='#'
                  className='font-semibold uppercase text-gray-600  hover:text-mediumturquoise
                  transition duration-300 ease-in-out  p-4'
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Home
                </a>
                <hr className='h-px w-full  bg-gray-200 border-0 dark:bg-gray-700' />
                <a
                  href='#about'
                  className='font-semibold uppercase text-gray-600  hover:text-mediumturquoise
                 transition duration-300 ease-in-out p-4'
                  onClick={() => setIsOpen(!isOpen)}
                >
                  About
                </a>
                <hr className='h-px w-full  bg-gray-200 border-0 dark:bg-gray-700' />
                <a
                  href='#projects'
                  className='font-semibold uppercase text-gray-600  hover:text-mediumturquoise
                  transition duration-300 ease-in-out p-4'
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Projects
                </a>
                <hr className='h-px w-full  bg-gray-200 border-0 dark:bg-gray-700' />
                <a
                  href='#contact'
                  className='font-semibold uppercase text-gray-600  hover:text-mediumturquoise
                transition duration-300 ease-in-out p-4'
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
