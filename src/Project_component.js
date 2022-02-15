import React from 'react'
import './Project_component.css'

function Project_component({title, SubTitle, image}) {
  return (
    <div className='project_component'>
        <img src={image} alt="" />
        <div className="project_info">
            <h1>{title}</h1>
            <p>{SubTitle}</p>
            
        </div>

    </div>
  )
}

export default Project_component