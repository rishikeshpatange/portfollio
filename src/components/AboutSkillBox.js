import React from 'react';
import './AboutSkillBox.css';

function AboutSkillBox({num, heading, discription}) {
  return (
    <div className='AboutSkillBox'>
      <h2>{num}</h2>
      <span></span>
      <h1>{heading}</h1>
      <p>{discription}</p>

        
    </div>
  )
}

export default AboutSkillBox