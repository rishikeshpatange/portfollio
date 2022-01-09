import React from 'react';
import './Project.css';
import { motion } from 'framer-motion';

function Project() {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1}}className='project'>
            <div className="project__container">
                <motion.h1 initial={{translateX:-100,opacity:0}} animate={{translateX:0, opacity:1}} exit={{translateX:100, opacity:0}} transition={{duration:1}} >PROJECT</motion.h1>
                <div className="project__content">
                    <motion.h2 initial={{translateX:100,opacity:0}} animate={{translateX:0, opacity:1}} exit={{translateX:-100, opacity:0}} transition={{duration:1}}>Full functional amazon clone app</motion.h2>
                    <h3>Firebase Email authentication, checkout orders, subtotal ..etc </h3>
                    <a href="https://clone-979a7.web.app/" target='_blank' >
                        <motion.img initial={{translateY:100,opacity:0}} animate={{translateY:0, opacity:1}} exit={{translateY:-100, opacity:0}} transition={{duration:1}} className='project__img' src="Images/amazonClone.png" />
                    </a>
                    <p>Tap image to visit the webiste</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Project
