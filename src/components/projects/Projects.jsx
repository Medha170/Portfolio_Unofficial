import React from 'react';
import './Projects.css';
import Tile from '../Tile/Tile';
import signature from './../../assets/signature2.png';

function Projects() {
  return (
    <div id='projects'>
      <section className='projects'>
        <div className='projects-header'>
          <h1 className='projects-heading'>My Best Projects</h1>
        </div>
        <div className='separator'></div>
        <div className='project-container'>
          <Tile className='grid-item'
          subHeader={"Quiz App"}
          img={"https://i.pinimg.com/564x/dc/6a/03/dc6a035319474f36d3bf4cf0a002d55f.jpg"}
          text={"A simple quiz app made using HTML, CSS, and JavaScript."}
          link={"https://github.com/Medha170/Quiz-App"}
          linkText={"VIEW SOURCE CODE"}
          />
          <Tile className='grid-item'
          subHeader={"Kanban Board"}
          img={"https://i.pinimg.com/564x/53/4b/26/534b269cee6de65805c9b3f2b2ff9029.jpg"}
          text={"A simple to do list made using HTML, CSS, and JavaScript."}
          link={"https://github.com/Medha170/Kanban-Board"}
          linkText={"VIEW SOURCE CODE"}
          />
          <Tile className='grid-item'
          subHeader={"Portfolio"}
          img={signature}
          text={"Portfolio website made using React."}
          link={"https://github.com/Medha170/Portfolio_Unofficial"}
          linkText={"VIEW SOURCE CODE"}
          />
          <Tile className='grid-item'
          subHeader={"Tic Tac Toe"}
          img={"https://i.pinimg.com/564x/cd/de/a3/cddea39b17378d5fc6eae06d00c6738d.jpg"}
          text={"A basic tic tac toe game made with java and spring boot following MVC architecture."}
          link={"https://github.com/Medha170/Tic-Tac-Toe"}
          linkText={"VIEW SOURCE CODE"}
          />
          <Tile className='grid-item'
          subHeader={"Tabaleau Resume"}
          img={"https://nischaypandey.github.io/Portfolio/static/media/ress.eb3d76c9.png"}
          text={"It is a tableau based advanced data visualisation and responsive resume system, in which will include complete resume system as well as visualized graph for showing progress of candidate"}
          link={"https://drive.google.com/file/d/1VsWChYABHxG8cqd-ZiS9jZVfjUZBiORa/view"}
          linkText={"VIEW RESUME"}
          />
          <Tile className='grid-item'
          subHeader={"Event Countdown Timer"}
          img={"https://i.pinimg.com/564x/8c/b4/34/8cb4345d841ef9bc472dee397415c9ea.jpg"}
          text={"A simple event countdown timer made using HTML, CSS, and JavaScript using the Day.js library."}
          link={"https://github.com/Medha170/Event-count-down-Website"}
          linkText={"VIEW SOURCE CODE"}
          />
          <Tile className='grid-item'
          subHeader={"Library Management System"}
          img={"https://i.pinimg.com/564x/9b/b3/cd/9bb3cd9a4064f6eed5b47b1ffba3480e.jpg"}
          text={"A collaborative project of group number 21 using using Java, Spring Boot, and MySQL. It is a library management system that allows users to borrow and return books."}
          link={"https://github.com/BHAV0207/LBMS"}
          linkText={"VIEW SOURCE CODE"}
          />
          <Tile className='grid-item'
          subHeader={"Web Scapper"}
          img={"https://i.imgur.com/6zM7JBq.png"}
          text={"A web scrapper made using Python and XPath. It is able to scape data from Amazon and Flipkart."}
          link={"https://github.com/Medha170/webscraper-python-project"}
          linkText={"VIEW SOURCE CODE"}
          />
        </div>
      </section>
    </div>
  );
}

export default Projects;