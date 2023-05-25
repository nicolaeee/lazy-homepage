import React from 'react'
import "./MyWork.css"
import { FaGithub } from 'react-icons/fa'

const MyWork = () => {
  return (
    <section className='workpage'>
  <div className="wrapper__content">
    <h1>Works</h1>
    <div className="wrapper__blocks">
      <div className="block-content">
        <a href="work1-link">
          <img src="image1.jpg" alt="Work 1" />
          <p>Work 1 Description</p>
          <p>
            Work 1 Details
            <FaGithub />
          </p>
        </a>
      </div>
      <div className="block-content">
        <a href="work2-link">
          <img src="image2.jpg" alt="Work 2" />
          <p>Work 2 Description</p>
          <p>
            Work 2 Details
            <FaGithub />
          </p>
        </a>
      </div>
      <div className="block-content">
        <a href="work3-link">
          <img src="image3.jpg" alt="Work 3" />
          <p>Work 3 Description</p>
          <p>
            Work 3 Details
            <FaGithub />
          </p>
        </a>
      </div>
      <div className="block-content">
        <a href="work4-link">
          <img src="image4.jpg" alt="Work 4" />
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