import React from 'react';
import './Home.css'

function Home() {
  return (
      <div>
        <div id='user' className='user'>
            <div id='user_name' className='user_name'>
                <h1 id='h1' className='h1'>I'm Chinthoju Shiva Kumar</h1>
                <h3 id='h3'className='h3'>I'm a Front-End Developer</h3>
                <p id='p' className='p'>I focus on developing user-friendly web applications that meet the client's requirements, with attention to detail, scalability, and performance.</p>
                <button id='btn' className='btn btn-primary'>About Me</button>
            </div>
           
            {/* <div></div> */}

        </div>
      </div>
  )
}

export default Home