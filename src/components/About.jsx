import React from 'react';
import aboutImage from "../images/organic-about-1.png";

function About() {
  return (
    <div className='our-brand'>
      <div className='brand-img'>
        <img src={aboutImage} alt='img' />
      </div>
      <div className='brand-text'>
        <h3>Fresh Food,Simply <font>Delicious</font></h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        <a href='#' className='about-btn'>Read More</a>
      </div>
    </div>
  )
}

export default About;