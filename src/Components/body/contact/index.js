import React from 'react'
import './contact.css';
import Separator from '../../common/separator';
import SocialContact from '../../common/social-contact';

function Contact() {
  return (
    <div className='contact'>

      <Separator />

      <label className='section-title'>Contact</label>

      <div className='contact-container'>

        <div className='container-left'>

          <p>Want to get in touch? Contact me on any of the platform</p>

          <SocialContact />

        </div>

        <div className='download'>

        <a download href="/images/resume.pdf.docx">
        <i class="fi fi-rr-cloud-download"></i>
        Download Resume

        </a>

        </div>

      </div>

    </div>
  );
}

export default Contact;