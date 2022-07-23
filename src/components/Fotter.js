import React from 'react';
import './Fotter.css';
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Fotter() {
    return (
        <div className='fotter'>
            <div className="fotter_content">
                <h1>Let's work <br /> together</h1>
                <span className="fotter_line"></span>
                <div className="fotter_content_contact">
                    <button> <a href="mailto:rishikeshpatangesick@gmail.com">rishikeshpatangesick@gmail.com</a> </button>
                    <button> <a href="tel:+91-7823069861">+91-7823069861</a></button>
                </div>
                <span className="fotter_line fotter_line_bottom"></span>

            </div>
            <div className="fotter_social">
                <div className='version'>
                    <p>version</p>
                    <h2>2022 edition</h2>
                </div>
                <div className='social_media'>
                    <p>Socials</p>
                    <div className='social_media_container'>
                        <a href='https://www.instagram.com/rishikeshpatange/' target="_blank">
                            <FaInstagram  className='react_icons' fontSize={"21px"} />
                        </a>
                        <a href='https://github.com/rishikeshpatange' target="_blank">
                            <FaGithub className='react_icons' fontSize={"21px"}/>
                        </a>
                        <a href='https://www.linkedin.com/in/rishikesh-patange-1979251b6/' target="_blank">
                            <FaLinkedinIn className='react_icons' fontSize={"21px"}/>
                        </a>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Fotter