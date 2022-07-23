import React from 'react';
import './ProjectBox.css'

function ProjectBox({ img, heading, discription,link}) {
    return (
        <div className='project_box'>
            <a href={link} target="_blank">
                <img src={img} alt="" />
            </a>
            <div className='project_box_content'>
                <h1>{heading}</h1>
                <p>{discription}</p>
            </div>

        </div>
    )
}

export default ProjectBox