import React from 'react';
import Skill from './common/Skill';
import Button from './common/Button';

const About = () => {
  return (
    <div
      id='about'
      className='pt-20 bg-gradient-to-r from-neutral-100 to-stone-50  '
      // style={{
      //   background:
      //     'linear-gradient(to right, rgba(245,245,245, 0.8) , rgba(255,255,255,1) 35%), url("images/bg.svg")',
      //   // backgroundImage: `url("images/bg.svg")`s,
      // }}
    >
      <div className='flex flex-col items-center '>
        <h1
          className='  text-4xl uppercase font-bold pt-10 pb-3 tracking-wide'
          id='project'
        >
          About Me
        </h1>

        <p className='text-center text-gray-600 text-sm md:text-xl  px-7 lg:px-48 w-auto block  '>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>
      </div>
      <div className='flex  lg:flex-row flex-col justify-center  gap-20  lg:p-20  p-10 mt-5 '>
        <div className='flex-1   '>
          <p className='text-2xl font-bold mb-6'>Get to know me</p>
          <div className='text-lg text-gray-500 tracking-normal font-normal leading-7 mb-3 '>
            <p>
              I&apos;m a
              <span className='font-semibold  text-gray-600 '>
                front-end developer
              </span>
              who loves to build with new cutting-edge technologies. I always
              believe that as a developer, it&apos;s your responsibility to
              build a bridge between creativity and functionality, and create
              seamless user experiences. You can find some of my work in the
              <span className='font-semibold  text-gray-600 '>projects</span>
              section.
            </p>
            <p className='mt-5'>
              I am open to
              <span className='font-semibold  text-gray-600 '>job</span>
              opportunities where I can contribute to the growth of both the
              company and myself. If there is any opportunity that aligns with
              my skills and experience, please do not hesitate to
              <span className='font-semibold  text-gray-600 '>contact</span> me.
              You can also
              <span className='font-semibold  text-gray-600 '>
                download my resume
              </span>
              .
            </p>
          </div>
          <a href='#contact'>
            <Button className='px-10 py-3 uppercase'>Contact</Button>
          </a>
        </div>
        <div className='flex-1  '>
          <p className='text-2xl font-bold mb-6'>My Skill set</p>
          <div className=' flex flex-wrap  gap-4 '>
            <Skill>Javascript</Skill>
            <Skill>Reactjs</Skill>
            <Skill>Nextjs</Skill>
            <Skill>HTML</Skill>
            <Skill>CSS</Skill>
            <Skill>Tailwind CSS</Skill>
            <Skill>Material UI</Skill>
            <Skill>Git</Skill>
            <Skill>gitHub</Skill>
            <Skill>Firebase</Skill>
            <Skill>Node</Skill>
            <Skill>Express (Basic)</Skill>
            <Skill>GraphQL (Basic)</Skill>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
