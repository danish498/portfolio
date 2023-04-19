import React from 'react';
import ProjectCard from './common/ProjectCard';

const Projects = () => {
  return (
    <div
      id='projects'
      className=' pt-20   flex items-center flex-col  bg-cover h-full '
    >
      <div className='flex flex-col items-center '>
        <h1
          className='  text-4xl uppercase font-bold pt-10 pb-3 tracking-wide'
          id='project'
        >
          Projects
        </h1>

        <p className='text-center text-gray-600 text-sm md:text-xl  px-5 md:px-32 w-auto block  '>
          Here, you can find some of my personal projects with GitHub
          repositories and live links. These projects are built using my current
          technical skill set.
        </p>
      </div>
      <div className=' flex  sm:flex-wrap  sm:flex-row  flex-col items-center justify-center gap-5  md:gap-8   lg:gap-12 lg:px-24  m-10 '>
        <ProjectCard
          name='Goal Setter'
          GitHub='https://github.com/danish498/goal-setter'
          live='https://gaal-setter.cyclic.app/login'
          alt='goal_setter'
          image='images/goal-settter.png'
          description=' Personal Chat Room or Workspace to share resources and hangout with friends build with react js Material-UI and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.'
        />
        <ProjectCard
          name='Conduit'
          GitHub='https://github.com/danish498/conduit'
          live='https://conduit-indol.vercel.app/'
          image='images/conduit.png'
          alt='conduit'
          description=' Personal Chat Room or Workspace to share resources and hangout with friends build with react js Material-UI and Firebase. Have   features which allows user for realtime messaging, image sharing as  well as supports reactions on messages.'
        />
        <ProjectCard
          name='Hacker News'
          GitHub='https://github.com/danish498/hacker-news'
          live='https://hacker-news-g1b6.vercel.app/'
          image='images/hacker-news.png'
          alt='hacker_news'
          description=' Personal Chat Room or Workspace to share resources and hangout with friends build with react js Material-UI and Firebase. Have   features which allows user for realtime messaging, image sharing as  well as supports reactions on messages.'
        />
        <ProjectCard
          name='Hacker News'
          GitHub='https://github.com/danish498/hacker-news'
          live='https://hacker-news-g1b6.vercel.app/'
          image='images/portfolio.png'
          alt='protfolio'
          description=' Personal Chat Room or Workspace to share resources and hangout with friends build with react js Material-UI and Firebase. Have   features which allows user for realtime messaging, image sharing as  well as supports reactions on messages.'
        />
      </div>
    </div>
  );
};

export default Projects;
