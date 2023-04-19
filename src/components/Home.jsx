import React from 'react';
import Button from './common/Button';

const Home = () => {
  return (
    <div
      id='#'
      className=' mt-20  bg-fixed bg-cover  h-screen   relative   sm:min-h-0 '
      style={{
        // backgroundImage:
        //   'linear-gradient(to right, rgba(245,245,245, 0.8) , rgba(255,255,255,1) 35%), url("images/bg.svg")',
        backgroundImage: `url("images/bg.svg")`,
      }}
    >
      <div className='absolute lg:top-36 lg:right-8  md:top-96 sm:top-36 top-44   '>
        <div className='flex flex-col items-center'>
          <p className='text-gray-950 md:text-5xl  text-4xl font-bold'>
            Hi, There!
          </p>
          <h1 className='text-black text-3xl  md:text-7xl font-bold uppercase md:tracking-wide  '>
            I'm <span className='text-mediumturquoise'>Daanish Alam</span>
          </h1>
          <p
            className='text-gray-800 t text-center  lg:px-80 md:px-10 sm:px-4 px-1 
          md:text-xl text-lg mt-3 leading-8'
          >
            As a front-end developer, I thrive on building cutting-edge
            applications that foster creativity and functionality.{' '}
          </p>

          <div className='flex gap-3  mt-8'>
            <a href='#projects'>
              <Button className='font-bold text-xl uppercase px-10 py-3'>
                Projects
              </Button>
            </a>
            <a href='#resume'>
              <Button className='uppercase px-10 py-3 font-bold text-xl'>
                Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
