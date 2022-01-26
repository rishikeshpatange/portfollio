import React from 'react';
import './Home.css';
import { FaReact, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';




function Home() {

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }} transition={{ duration: 1 }} className='home' >
            <div className="home__container">
                <div className="home__content">
                    <motion.h1 initial={{ translateX: -100, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} exit={{ translateX: -100, opacity: 0 }} transition={{ duration: 1 }} >Hello, I'm Rishikesh Patange</motion.h1>
                    <div className="p__tags">
                        <motion.p initial={{ translateY: -50, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} exit={{ translateY: -50, opacity: 0 }} transition={{ duration: 1 }} >React Developer <FaReact color='00E0FF' size='28px' /> </motion.p>
                        <div>
                            <motion.p initial={{ translateY: 50, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} exit={{ translateY: 50, opacity: 0 }} transition={{ duration: 1 }} className='p__tagsTwo' >UI / UX Designer</motion.p>
                        </div>
                    </div>
                    <div className="Home__box">
                        <div className="box__content">
                            <div className="Box__contentOne">
                                <p>Automobile Engineer</p>
                                <p>Based In Pune, India</p>
                            </div>
                            <img className='home__image' src="Images/Home.jpg" alt="" />
                        </div>
                    </div>
                    <div className="social__media">
                        <div className="social__mediaIcons">

                            <a href="https://www.instagram.com/rishikeshpatange/" target="_blank" rel="noopener noreferrer"><FaInstagram color='var(--social-media)' fontSize='20px' /></a>
                            <a href="https://www.linkedin.com/in/rishikesh-patange-1979251b6" target="_blank" rel="noopener noreferrer" ><FaLinkedinIn color='var(--social-media)' fontSize='20px' /></a>
                            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" ><FaEnvelope color='var(--social-media)' fontSize='20px' /></a>


                        </div>

                    </div>
                </div>
            </div>
            {/* About */}
            <div className="about__container">
                <div className="about__content">
                    <motion.h1 initial={{ translateX: -100, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} exit={{ translateX: -100, opacity: 0 }} transition={{ duration: 1 }}>ABOUT</motion.h1>
                    <div className="about__box">
                        <div className="box__bio">
                            <motion.h2 initial={{ translateY: -50, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} exit={{ translateY: -50, opacity: 0 }} transition={{ duration: 1 }}>Designer</motion.h2>
                            <motion.p initial={{ translateY: 50, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} exit={{ translateY: 50, opacity: 0 }} transition={{ duration: 1 }} >UI UX Designer with a passion for
                                Designing beautiful and functional user experiences.Minamalist
                                who belives that less is more</motion.p>
                        </div>
                        <div className="box__bio">
                            <motion.h2 initial={{ translateY: -50, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} exit={{ translateY: -50, opacity: 0 }} transition={{ duration: 1 }} className='blue' >Developer</motion.h2>
                            <motion.p initial={{ translateY: 50, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} exit={{ translateY: 50, opacity: 0 }} transition={{ duration: 1 }}  >React Developer Who Has Habbit Of Writing clean and efficent code Love HTML5 , Jsx , Css , JavaScript and little Touch of Bootstrap and Nodejs</motion.p>
                        </div>
                    </div>
                    <Link to='/project' >
                        <button>PROJECTS</button>
                    </Link>

                </div>
            </div>
        </motion.div>
    )
}


export default Home
