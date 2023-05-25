import React from 'react';
import './About.css';
import PersonalPhoto from '../../assets/img/profile-img.jpg'
const About = () => {
  return (
    <section className='aboutpage'>
      <div className="wrapper__content">
        <h1 className='present__header'>Hello, I'm a developer based in Romania!</h1>
        <div className="general-info">
          <h2>General Info</h2>
          <p>Some general information about me</p>
          <img src={PersonalPhoto} alt="" />
        </div>
        <div className="personal-info">
          <h2>Personal Info</h2>
          <p>Some personal information about me</p>
          <button>Click Me</button>
        </div>
      </div>
    </section>
  );
};

export default About;
