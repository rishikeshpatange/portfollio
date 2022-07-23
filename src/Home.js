import React from 'react';
import './Home.css';
import { FaInstagram, FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from './components/Banner';
import Home_about from './components/Home_about';
import Home_work from './components/Home_work';




function Home() {

    return (
        <div className="home">
            <Banner/>
            <Home_about/>
            <Home_work/>

        </div>

    )
}


export default Home

{/* <motion.div className="social_media">
                            <a href="https://www.instagram.com/rishikeshpatange/" target="_blank" rel="noopener noreferrer"><FaInstagram color='var(--social-media)' fontSize='20px' /></a>
                            <a href="https://www.linkedin.com/in/rishikesh-patange-1979251b6" target="_blank" rel="noopener noreferrer" ><FaLinkedinIn color='var(--social-media)' fontSize='20px' /></a>
                            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" ><FiMail color='var(--social-media)' fontSize='20px' /></a>
                            <a href="https://github.com/rishikeshpatange" target="_blank" rel="noopener noreferrer" ><FaGithub color='var(--social-media)' fontSize='20px' /></a>
                        </motion.div> */}
