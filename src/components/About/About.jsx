import React from 'react';
import './About.css';
import './AboutMobile.css'
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
          <h2 className='job-header'>Work</h2>
          <p className='description-profesional'>I am a Computer Science student with a deep passion for coding and software development. As someone who loves to explore the intricacies of programming, I am constantly seeking opportunities to expand my knowledge and skills in this field. Whether it's developing innovative solutions or diving into complex algorithms, I find great joy in the art of crafting software. With a strong dedication to continuous learning and a drive to solve real-world problems through technology, I am excited to contribute to the ever-evolving world of software development."</p>
          <button className='button-cv'>My CV</button>
        </div>
      </div>
      <div className="bio-info">
            <h2 className="job-header">Bio</h2>
            <div className="life-path">
            <p><span className="year-span">2003</span> Born in Brasov Romania</p>
            <p><span className="year-span">2019</span> Start high school at 16 years old</p>
            <p><span className="year-span">2022</span> Accepted at the University Dunarea de Jos as a Computer Science student</p>
            <p><span className="year-span">2022 to forever</span> Fall in love not only with a girl but also with software development</p>
            </div>
        </div>
    </section>
  );
};

export default About;

