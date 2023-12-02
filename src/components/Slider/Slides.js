import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Students from './../../images/students.jpg';
import Study from './../../images/pupil.jpg';
import Student from './../../images/white.jpg';
import './Slides.css'
import { Link } from 'react-router-dom';

const fadeImages = [
  {
    url:Students,
    caption: 'Fill in the form to join the waitlist',
    header:" Welcome to CPBL \t 🌟 Explore the Depths of the Ocean \n",

  },
  {
    url:Study,
    caption: 'Select courses of your choice or desire',
    header:' Pick topics that are relevant and timely in the field of education.'
  },
  {
    url:Student,
    caption: ' Encourage interaction among students through forums or comment sections.',
    header:"Meets Experts and Mentors in their fields or niche"
  },
];

const Slides = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className='fade'>
            <h1 style={{color:"#fff", position:"absolute", top:"100px", fontSize:'40px', width:'400px', left:"100px", height:'100px', marginBottom:"40px"}}>{fadeImage.header}</h1>
            <img className='img' src={fadeImage.url} alt={fadeImage.header} />
            <h2 className='caption'>{fadeImage.caption}</h2>
            <form className='form'>
              <input type='email' placeholder='Join the Waitlist' className='email'/>
              <Link to='https://docs.google.com/forms/d/e/1FAIpQLSd8SUGLEYwUYJPWlA8e5nRUxzBcLcWQrpBwD3Z0dZweFg5-YA/viewform?usp=sf_link'> <button className='sub'>Submit</button></Link>
            </form>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slides;