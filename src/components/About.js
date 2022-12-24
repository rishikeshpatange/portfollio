import React from 'react';
import './About.css';
import { motion } from "framer-motion"
import AboutSkillBox from './AboutSkillBox';

function About() {
    const globe_animation = {
        initial: {},
        animate: {
            rotate: [0, 90, 180],
            transition: {
                duration: 2, ease: "linear", repeat: Infinity, stiffness: 400, 

            }
        },
    }
    const globe_left = {
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
    const FadeIn ={
        initial:{
            opacity:0,
        },
        animate:{
            opacity:1,

            transition:{
                duration:0.5,
                delay:0.3

            }
        }

    }
    const TextFadeUp = {
        initial: {
            translateY: 50,
            opacity: 0
        },
        animate: {
            translateY: 0,
            opacity: 1,

            transition: {
                duration: 0.5,
                delay: 0.9

            }
        }
    }
    return (
        <div className='about'>
            <div className="about_heading">
                <motion.h1 variants={FadeUp} initial="initial" animate="animate">Engineer with passion of coding and designing</motion.h1>
                <motion.span variants={FadeIn} initial="initial" animate="animate" className="about_heading_line">
                    <motion.button variants={globe_left} initial="initial" animate="animate">
                        <motion.img variants={globe_animation}
                            initial="initial"
                            animate="animate" className='globe_image_about' src="/Images/globe.png" alt="" />
                    </motion.button>
                </motion.span>
                <motion.div variants={TextFadeUp} initial="initial" animate="animate" className='about_me_content' >
                    <div >
                        <p >I am an undergrad engineer from Pune, India who write efficient codes and tailor-made solutions. I push my work to new horizons with each project, always putting learning first.</p>
                        <h2>Always exploring ...</h2>
                    </div>
                    <div>

                        <img src="/Images/about.jpeg" alt="" />
                    </div>

                </motion.div>
                <div  className="about_skills">
                    <div className='about_skills_heading'>
                        <h1>I can help you with ...</h1>
                    </div>
                    <div  className='skill_container'>
                        <AboutSkillBox
                        num="01"
                        heading="Design"
                        discription="having a good record in friendly user experience and good knowledge of using Figma, Adobe xd and Photoshop."
                        />
                        <AboutSkillBox
                        num="02"
                        heading="Development"
                        discription="having a good knowledge of front end development using technologies like Javascript ES6+, React.js, Redux, Node.js, Firebase, Html, Css, Wordpress."
                        />
                        <AboutSkillBox
                        num="03"
                        heading="The full package"
                        discription="Combination of both design and development using technologies like React.js, html, CSS, javascript."
                        />


                    </div>

                </div>
            </div>


        </div>
    )
}

export default About