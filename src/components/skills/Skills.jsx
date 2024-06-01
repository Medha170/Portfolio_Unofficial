import React from 'react';
import './Skills.css';
import {Carousel} from 'nuka-carousel';

const skills = [
  { img: 'https://i.pinimg.com/564x/7b/25/56/7b2556503cbd9035d51831afd44bf888.jpg', name: 'Java' },
  { img: 'https://i.pinimg.com/564x/a1/c1/11/a1c11146ba58d21cf1bbb4f22dce4b89.jpg', name: 'Python' },
  { img: 'https://i.pinimg.com/564x/e7/97/a8/e797a8c593c81d72f395d1ccc022ba3f.jpg', name: 'JavaScript' },
  { img: 'https://i.pinimg.com/564x/ca/e1/b4/cae1b4f6b223fe5a7bb712b680cffa67.jpg', name: 'HTML' },
  { img: 'https://i.pinimg.com/564x/b7/c2/e5/b7c2e508920a1168b94dea8675fa311d.jpg', name: 'CSS' },
  { img: 'https://i.pinimg.com/564x/f8/ee/69/f8ee696f018c1a4ad6b9972b85fc6b2e.jpg', name: 'MySql' },
  { img: 'https://i.pinimg.com/564x/8d/fe/0a/8dfe0a99a74efbec4af0d8e440c00282.jpg', name: 'React' },
  { img: 'https://i.pinimg.com/564x/6e/46/e7/6e46e7dbe2bb73dacc055e5dbd85c3ad.jpg', name: 'C' },
];

const params = {
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplayInterval: 2000,
  wrapAround: true,
  cellSpacing: 10,
  renderCenterLeftControls: ({ previousSlide }) => (
    <button onClick={previousSlide} className="carousel-control">{"<"}</button>
  ),
  renderCenterRightControls: ({ nextSlide }) => (
    <button onClick={nextSlide} className="carousel-control">{">"}</button>
  ),
};

function Skills() {
  return (
    <div id='skills'>
      <section className='skills'>
        <div className='heading'>
          <h1 className='skills-heading'>My Skills</h1>
        </div>
        <div className='separator'></div>
        <div className='skills-container'>
          <Carousel {...params}>
            {skills.map((skill, index) => (
              <div key={index} className='skill'>
                <div className='skill-img'>
                  <img src={skill.img} alt={skill.name} height={200} width={200}/>
                </div>
                <div className='skill-name'>{skill.name}</div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default Skills;
