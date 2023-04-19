import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <footer className='bg-black  shadow dark:bg-gray-800'>
        <div className='w-full py-16  px-10  '>
          <div className='flex  flex-col md:flex-row items-center justify-between gap-3'>
            <h1 className='text-white  text-lg'>
              Designed and Developed by Danish Alam
            </h1>
            <p className='text-white  text-lg lg:mr-36  '> Copywrite © 2023 </p>
            <div className='flex gap-3 '>
              <FaLinkedinIn color='white' size={20} />
              <AiFillGithub color='white' size={20} />
              <AiOutlineTwitter color='white' size={20} />
              <AiFillInstagram color='white' size={20} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
