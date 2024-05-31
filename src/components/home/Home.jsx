import React from 'react';
import './Home.css';
import Typewriter from './Typewriter.jsx';
function Home() {
  return (
    <div id='home'>
      <section className='home'>
        <div className='background-image'></div>
        <div className='introduction'>
            <div className='intro-text'>
              <h1 className='greetings'>Hello World!</h1>
              <p className='intro'>I am Medha Shree</p>
              <Typewriter 
                text ={
                [
                  "Software Developer",
                  "Web Developer", 
                  "Learner", 
                  "Tech Enthusiast"
                ]
                }
                typingSpeed={100}
                deletingSpeed={50}
                duration={500}/>
            </div>  
        </div>
        <div className='hover-effect'></div>
        <div className='button-container'>
         <a href='#about' className='btn'>
           <button className='button about'>More About Me</button>
         </a>
         <a href='#education' className='btn'>
           <button className='button education'>Education</button>
         </a>
         <a href='#work-experience' className='btn'>
           <button className='button work'>Work Experience</button>
         </a>
         <a target="_blank" href='https://drive.google.com/file/d/1VsWChYABHxG8cqd-ZiS9jZVfjUZBiORa/view' className='btn'>
           <button className='button resume'>Tableau Resume</button>
         </a>
       </div>

      </section>
    </div>
  );
}

export default Home;