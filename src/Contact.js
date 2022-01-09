import React from 'react';
import './Contact.css'
import { BiMobileAlt } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
    return (
        <div className='Contact'>
            <div className="contact__container">
                <div className="contact-box">
                    <div className="contact-content">
                        <img src="./Images/Contact-image.png" alt="" />
                        <h1>Rishikesh Patange</h1>
                        <div>
                            <li><BiMobileAlt className="contact-media1" /></li>
                            <li> <FaEnvelope className="contact-media2" /> </li>
                        </div>
                        <div className="details">
                            <p>91+7823069861</p>
                            <p>RishikeshPatangesick @gmail.com</p>
                        </div>
                        <div className="details1">
                            <p>MOBILE</p>
                            <p>GMAIL</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Contact
