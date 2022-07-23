import React from 'react';
import ProjectBox from './ProjectBox';
import './Work.css';
import { motion } from "framer-motion"

function Work() {

  const FadeinLeft = {
    initial: {
        translateX: -900,
        opacity: 0,
    },
    animate: {
        translateX: 0,
        opacity: 1,

        transition: {
            duration: 0.4,
        }
    }
}
  
const FadeUp = {
  initial: {
      translateY: 120,
      opacity: 0,

  },
  animate: {
      translateY: 0,
      opacity: 1,

      transition: {
          duration: 0.5,
          delay: 0.8
      }
  }
}
  return (
    <div className='work'>
      <div className="work_content">
        <motion.h1 variants={FadeUp} initial="initial" animate="animate" >Some of my personal and work projects</motion.h1>
        <motion.p variants={FadeinLeft} initial="initial" animate="animate">Recent work</motion.p>
        <motion.span variants={FadeinLeft} initial="initial" animate="animate" className='work_content_line'></motion.span>
      </div>
      <motion.div variants={FadeUp} initial="initial" animate="animate" 
      className="project_container">
        <div>
          <ProjectBox
            img="/Images/project1.png"
            heading="Ecommerce"
            discription="Shopping web app"
            link="https://ecommerce-c7689.web.app/"
          />
        </div>
        <div>

          <ProjectBox
         img="/Images/project2.png"
            heading="Distk"
            discription="Digital growth startup company"
            link="https://diskt2.web.app/"
          />
        </div>
      </motion.div>
      <div   className="project_container">
        <div>

          <ProjectBox
            img="/Images/project3.png"
            heading="Amzone clone"
            discription="Shopping web app"
            link="https://clone-979a7.web.app/"
          />
        </div>
        <div>

          <ProjectBox
         img="/Images/project4.png"
            heading="Dares"
            discription="Website for startup company"
            link="https://dares-85799.web.app/"
          />
        </div>
      </div>


    </div>
  )
}

export default Work