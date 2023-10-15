import React from 'react';
import './about.css';
import SocialContact from '../../common/social-contact';

function About() {
  return (
    <div className='about'>
        <div className='about-top'>

          <div className='about-info'>

          Hello There <span className="hello__icon">👋</span>, I am <br />
          <span className="info-name">Chaitanya Kashid</span>
          <br /> I love experimenting with the web.

          </div>

          <div className='about-photo'>

          <img src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"alt='' className='picture' />
          
          
  
          </div>

        </div>

        <SocialContact />

    </div>
  );
}

export default About;