import React from 'react';
import './Home.css';
import { FaInstagram, FaLinkedinIn, FaEnvelope, FaGithub} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";




function Home() {

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }} transition={{ duration: 1 }} className="home">
            <div className="home_container">
                <div className="home_content">
                    <div className='home_content_text'>
                        <motion.h1 initial={{ translateY: -100, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} exit={{ translateY: -100, opacity: 0 }} transition={{ duration: 1 }} >Hi, I’m Rishi.</motion.h1>
                        <motion.span initial={{ translateY: -100, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} exit={{ translateY: -100, opacity: 0 }} transition={{ duration: 1 }} className='underLine'></motion.span>
                        <motion.h2 initial={{ translateX: -100, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} exit={{ translateX: -100, opacity: 0 }} transition={{ duration: 1 }}>React Js Developer , Ui Ux  Designer</motion.h2>
                        <motion.p initial={{ translateX: -100, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} exit={{ translateX: -100, opacity: 0 }} transition={{ duration: 1 }}>Currently, I’m based in Pune, India.</motion.p>
                        <motion.div initial={{ translateY: 100, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} exit={{ translateY: 100, opacity: 0 }} transition={{ duration: 1 }} className="social_media">
                            <a href="https://www.instagram.com/rishikeshpatange/" target="_blank" rel="noopener noreferrer"><FaInstagram color='var(--social-media)' fontSize='20px' /></a>
                            <a href="https://www.linkedin.com/in/rishikesh-patange-1979251b6" target="_blank" rel="noopener noreferrer" ><FaLinkedinIn color='var(--social-media)' fontSize='20px' /></a>
                            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" ><FaEnvelope color='var(--social-media)' fontSize='20px' /></a>
                            <a href="https://github.com/rishikeshpatange" target="_blank" rel="noopener noreferrer" ><FaGithub color='var(--social-media)' fontSize='20px' /></a>


                        </motion.div>
                    </div>
                    <div>
                        <img className='hero' src="./Images/hero.jpg" alt="" />
                    </div>
                </div>
                <div className='arrow'>
                    <li>
                        <a href="#arrow"><IoIosArrowDown fontSize={"40px"} /></a>
                    </li>
                </div>
            </div>
            <div className="about_container">
                <div className="about_content" id='arrow'>

                    <motion.div initial={{ translateX: -100, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} exit={{ translateX: -100, opacity: 0 }} transition={{ duration: 1 }} className='about_hero_img'>
                        <img className='about_hero' src="./Images/about.png" alt="" />
                        {/* <img className='hero' src="./Images/hero.png" alt="" /> */}
                    </motion.div>
                    <motion.div initial={{ translateX: 200, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} exit={{ translateX: 200, opacity: 0 }} transition={{ duration: 1 }} className='home_content_text'>
                        <h1>Designer</h1>
                        <p>UI UX Designer with a passion for Designing beautiful and functional user experiences.Minamalist who belives that less is more</p>
                        <h1>Developer</h1>
                        <p>React Developer Who Has Habbit Of Writing clean and efficent code
                            Love javascript , Sass , Css , jsx </p>
                    </motion.div>

                </div>
                <Link to="/project">
                    <div className="about_btn">
                        <button>PROJECTS</button>
                    </div>
                </Link>
            </div>
        </motion.div>

    )
}


export default Home

