import React from 'react';
import './About.css';
import PersonalPhoto from '../../assets/img/profile-img.jpg';

const About = () => {
  return (
    <section className='aboutpage'>
      <div className="wrapper__content">
            <div className='present__header'>
                <h1 className='present__text'>
                    Hello, I'm a developer based in Romania!
                </h1>
        </div>
        <div className="general-info">
          <div className='general-presentation'>
            <h2 className='name-header'>Gorobet Nicolae</h2>
            <p className='descrition-personal'>Digital Craftsman(Student, Developer)</p>
          </div>
          <img src={PersonalPhoto} alt="profile-img" className='profile__image' />
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

