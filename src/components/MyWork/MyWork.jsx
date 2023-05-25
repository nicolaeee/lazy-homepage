import React from 'react'
import "./MyWork.css"
import { FaGithub } from 'react-icons/fa'
import ShelterPhoto from '../../assets/img/shelter.png'
import PlantsPhoto from '../../assets/img/plants.png'
import UniversityPort from '../../assets/img/UP.png'
import CsAciee from '../../assets/img/cs-aciee.png'

const MyWork = () => {
  return (
    <section className='workpage'>
  <div className="wrapper__content">
    <h1>Works</h1>
    <div className="wrapper__blocks">
      <div className="block-content">
        <a href="work1-link">
          <img src={ShelterPhoto} alt="Shelter" className='portfolio-image'/>
          <p>Shelter - A house for all pets </p>
          <p>
            Work 1 Details
            <FaGithub />
          </p>
        </a>
      </div>
      <div className="block-content">
        <a href="work2-link">
        <img src={UniversityPort} alt="University" className='portfolio-image'/>
          <p>Work 2 Description</p>
          <p>
            Work 2 Details
            <FaGithub />
          </p>
        </a>
      </div>
      <div className="block-content">
        <a href="work3-link">
        <img src={CsAciee} alt="Cs-Aciee" className='portfolio-image'/>
          <p>Work 3 Description</p>
          <p>
            Work 3 Details
            <FaGithub />
          </p>
        </a>
      </div>
      <div className="block-content">
        <a href="work4-link">
        <img src={PlantsPhoto} alt="Plants" className='portfolio-image'/>
          <p>Work 4 Description</p>
          <p>
            Work 4 Details
            <FaGithub />
          </p>
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default MyWork