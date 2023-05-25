import React from 'react';
import "./MyWork.css";
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ShelterPhoto from '../../assets/img/shelter.png';
import PlantsPhoto from '../../assets/img/plants.png';
import UniversityPort from '../../assets/img/UP.png';
import CsAciee from '../../assets/img/cs-aciee.png';

const MyWork = () => {
  return (
    <section className='workpage'>
      <div className="wrapper__content">
        <h1>Works</h1>
        <div className="wrapper__blocks">
          <div className="block-content">
            <a href="https://rolling-scopes-school.github.io/onyxgeek-JSFE2023Q1/shelter/main/index.html#">
              <img src={ShelterPhoto} alt="Shelter" className='portfolio-image' />
            </a>
            <a href="https://rolling-scopes-school.github.io/onyxgeek-JSFE2023Q1/shelter/main/index.html#">
              <p>Shelter - A house for all pets </p>
            </a>
            <a href="work1-link">
              <p>
                Source  &nbsp;
                <FaGithub />
              </p>
            </a>
          </div>
          <div className="block-content">
            <a href="https://portfolio-university.vercel.app/">
              <img src={UniversityPort} alt="University" className='portfolio-image' />
            </a>
            <a href="https://portfolio-university.vercel.app/">
              <p>University Portfolio-my notes from the University</p>
            </a>
            <a href="https://github.com/nicolaeee/Portfolio-University">
            Source  &nbsp;
                <FaGithub />
            </a>
          </div>
          <div className="block-content">
            <a href="https://cs-aciee.vercel.app/">
              <img src={CsAciee} alt="Cs-Aciee" className='portfolio-image' />
            </a>
            <a href="https://cs-aciee.vercel.app/">
              <p>CS-ACIEE - Clubul Studentiolor FACIEE</p>
            </a>
            <a href="https://github.com/nicolaeee/cs-aciee">
            Source  &nbsp;
                <FaGithub />
            </a>
          </div>
          <div className="block-content">
            <a href="https://rolling-scopes-school.github.io/onyxgeek-JSFEPRESCHOOL2022Q4/plants/">
              <img src={PlantsPhoto} alt="Plants" className='portfolio-image' />
            </a>
            <a href="https://rolling-scopes-school.github.io/onyxgeek-JSFEPRESCHOOL2022Q4/plants/">
              <p>Plants - A landing page about one product</p>
            </a>
            <a href="https://github.com/nicolaeee/plants/tree/gh-pages">
            Source  &nbsp;
                <FaGithub />
            </a>
          </div>
          <Link to="/" className='button-cv'>Main Page</Link>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
