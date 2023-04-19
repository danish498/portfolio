import About from '@/components/About';
import Contact from '@/components/Contact';
import Home from '@/components/Home';
import Projects from '@/components/Projects';
import Head from 'next/head';
import React from 'react';

const MainPage = () => {
  return (
    <div>
      <Head>
        <title>Daanish Alam | Portfolio | Frontend Developer</title>
        <meta
          name='description'
          content='This is the showcase of my recent projects and work details, can download my resume also'
        />
        <link rel='icon' href='/porfolio.png' sizes='32x32' />
      </Head>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default MainPage;
