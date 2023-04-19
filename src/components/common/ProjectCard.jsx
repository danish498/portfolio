import React from 'react';
import Button from './Button';
import { CgWebsite } from 'react-icons/cg';
import { AiFillGithub } from 'react-icons/ai';

const ProjectCard = ({ name, GitHub, live, image, description, alt }) => {
  return (
    <div>
      <div
        className='max-w-sm   md:w-72   lg:w-80 h-full  bg-stone-50 border border-gray-200 rounded-lg 
        shadow-md  dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 md:hover:scale-110  hover:scale-105 '
      >
        <img className='rounded-t-lg' src={image} alt={alt} />

        <div className='p-5 inline-flex flex-col items-center'>
          <p className='text-lg   font-bold'>{name}</p>

          <p className=' mx-0  text-base mb-3 text-slate-500 text-justify '>
            {description}
          </p>
          <div className='flex'>
            <a href={GitHub} target='_blank'>
              <Button className='flex flex-row items-center gap-1 '>
                <AiFillGithub size={18} />
                <p>GitHub</p>
              </Button>
            </a>
            <a href={live} target='_blank'>
              <Button className='flex flex-row items-center gap-1 '>
                <CgWebsite size={18} />
                <p>Demo</p>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
