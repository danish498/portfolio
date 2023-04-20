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
          description=' In this Goal Setter App, I used JWT authentication for user signup and login. Once a user registers, they can create and delete goals. The entire process is supported by the backend using Node, Express, and MongoDB. For state management, I used Redux Toolkit.'
        />
        <ProjectCard
          name='Conduit'
          GitHub='https://github.com/danish498/conduit'
          live='https://conduit-indol.vercel.app/'
          image='images/conduit.png'
          alt='conduit'
          description='The Conduit App is a great example of using REST API and Routes. I implemented all CRUD operations including creating, deleting, and updating news, as well as implementing JWT authentication. With multiple routes and protected routes. Additionally, I built this app using Next.js, TypeScript, Formik, and MobX.'
        />
        <ProjectCard
          name='Personal Portfolio'
          GitHub='https://github.com/danish498/portfolio'
          live='https://daanishnoor.vercel.app/'
          image='images/portfolio.png'
          alt='protfolio'
          description=' This is my personal portfolio app where I used Next.js and Tailwind CSS. I aimed to make the app responsive and user-friendly. I also incorporated Email.js for the contact form and added a resume download button. Additionally, I implemented scroll behavior for improved user experience. I will continue to enhance the app with new features and improvements.'
        />
        <ProjectCard
          name='Hacker News'
          GitHub='https://github.com/danish498/hacker-news'
          live='https://hacker-news-g1b6.vercel.app/'
          image='images/hacker-news.png'
          alt='hacker_news'
          description='Hacker News is a great example of implementing multiple endpoint API calls effectively. I built this app using  React, Redux and Redux Thunk for state management. I also incorporated displaying news data on a dropdown menu for a streamlined user experience. Additionally, The design of this app is little compex which help me undertand more CSS. '
        />
      </div>
    </div>
  );
};

export default Projects;
