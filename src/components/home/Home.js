import React from 'react';
import './Home.css';
import Typewriter from './Typewriter.js';
function Home() {
  return (
    <div id='home'>
      <section className='home'>
        <div className='introduction'>
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
        <div className='button-container'>
          <a href='#about' className='button-about'>
            <button className='button'>More About Me</button>
          </a>
          <a href='#education' className='button-education'>
            <button className='button'>Education</button>
          </a>
          <a href='#work-experience' className='button-work'>
            <button className='button'>Work Experience</button>
          </a>
          <a target="_blank" href='https://drive.google.com/file/d/1VsWChYABHxG8cqd-ZiS9jZVfjUZBiORa/view' className='button-resume'>
            <button className='button'>Tableau Resume</button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;