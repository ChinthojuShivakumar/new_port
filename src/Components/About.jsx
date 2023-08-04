import React from 'react';
import './About.css';
import { FaUserAlt } from 'react-icons/fa';
import myImage from '../assets/my_image.jpg'
import { HiDocumentArrowDown } from 'react-icons/hi2'

function About() {

    let resumeDownload = (e) =>{

        let file = document.createElement('a')
        file.href = 'shiva_resume.pdf'
        file.download = 'shiva_resume.pdf'
        file.click()
    }
  return (
    <div id='about' className='about'>
          <div id='about_title' className='about_title'>
            <h1 className='h1a' id='h1a'> <FaUserAlt style={{ position: 'relative', bottom: '8px' }} />  About Me  </h1>
        </div>
        <div className='about_disc'>
            <div id='img_sec' className='img_sec'>
                <img id='img' className='img' src={myImage} alt="myImage" />
            </div>
            <div className='about_sec' id='about_sec'>
                <h2 id='h2' className='h2 h2a'>ShivaKumar Chinthoju</h2>
                <h3 id='h3' className='h3 h3a'>Front-End Developer</h3>
                <p id='p' className='p pa'>I am a Front-End developer. I am an Electronics and Communication Engineering undergraduate from BIET. I am very passionate about improving my coding skills & developing websites. I build Websites using ReactJS . Working for myself to improve my skills.</p>
                  <a href='#resume'><button onClick={resumeDownload} className='btn btn-primary' id='btn'> Resume  <HiDocumentArrowDown /></button></a>
            </div>
        </div>
    </div>
  )
}

export default About