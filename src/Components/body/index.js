import React from 'react';
import './body.css';
import Projects from './pojects/index';
import Skills from './skills/index';
import Work from './work/index';
import Contact from './contact/index';
import About from './about/index';


function Body() {
  return (
    <div className='body'> 

    <section id='about'>
      <About />

    </section>

    <section id='projects'>

      <Projects />
    </section>

    <section id='skills'>

      <Skills />

    </section>

    <section id='Work'>

      <Work />

    </section>

    <section id='contact'>

      <Contact />

    </section>


    
    </div>


  );
}

export default Body;