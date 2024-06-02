import React from 'react';
import './Education.css';
import Tile from './../Tile';

function Education() {
  return (
    <div className='education-container'>
      <h1 className='education-heading'>Degree Pursuing</h1>
      <div className='separator'></div>
      <div className='education-content'>
        <Tile className='education-item'
          header='Scaler School of Technology'
          subHeader='Bachelor of Science in Computer Science + Master of Science in Computer Science(2023 - 2027)'
          img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMPrnwnTscw9PzmnA_QQL-BBIa0iZqldcbow&s'
          text='Scaler School of Technology is a 4-year program that offers a unique combination of Computer Science and Software Engineering. The program is designed to provide students with a solid foundation in computer science and software engineering, as well as the skills and knowledge needed to succeed in the rapidly changing field of technology. The program is designed to be rigorous and challenging, with a focus on hands-on learning and real-world applications.'
          link='https://www.scaler.com/school-of-technology/'
          linkText='VIEW WEBSITE'
        />
        <Tile className='education-item'
          header='BITS Pilani'
          subHeader='Bachelor of Science in Computer Science(2023 - 2026)'
          img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_6hJCaYihFF_AALN3osmK9tIDGygLvdkTw&s'
          text='BITS Pilani provides a 3 year Bachelor of Science in Computer Science program through coursera. Scaler School of Technology provides a Bachelors Degree in COmputer Science in collaboration with BITS Pilani.'
          link='https://www.bits-pilani.ac.in/'
          linkText='VIEW WEBSITE'
        />
        <Tile className='education-item'
          header='Woolf University'
          subHeader='Masters of Science in Computer Science(2026 - 2027)'
          img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1i5dQlY_Y4Qo5eZLaeiMMu5ivWOiLumXzw&s'
          text='Woolf University is a European University that provides Masters of Science in COmputer Science. Scaler School of Technology provides a Masters Degree in Computer Science in collaboration with Woolf University.'
          link='https://woolf.university/'
          linkText='VIEW WEBSITE'
        />
      </div>
    </div>
  );
}

export default Education;
