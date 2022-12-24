import React from 'react';
import './Banner.css';
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion"

function Banner() {
    const globe_animation = {
        initial: {},
        animate: {
            rotate: [0, 90, 180],
            transition: {
                duration: 2, ease: "linear", repeat: Infinity, stiffness: 200

            }
        },
    }

    const banner_left = {
        initial: {
            translateX: -300,
            opacity: 0,
        },
        animate: {
            translateX: 0,
            opacity: 1,

            transition: {
                duration: 0.5,
                delay: 1.4
            }
        }
    }

    const banner_right = {
        initial: {
            translateX: 800,
            // opacity:0,
        },
        animate: {
            translateX: 0,
            opacity: 1,

            transition: {
                duration: 0.5,
                delay: 1.4
            }
        }
    }

    const FadeUp = {
        initial: {

            translateY: 200,
            opacity: 0
        },
        animate: {
            translateY: 0,
            opacity: 1,

            transition: {
                duration: 0.5,
                delay: 0.6
            }
        }

    }
    const BannerFadeUp = {
        initial: {
            translateY: 200,
            opacity: 0
        },
        animate: {
            translateY: 0,
            opacity: 1,

            transition: {
                duration: 0.5,
                delay: 1.4
            }
        }

    }
    return (
        <div className='banner'>

            <div className="banner_container">

                <div className='banner_content'>
                    <div className='banner_content_left'>

                        <motion.h1 variants={banner_left} initial="initial" animate="animate">Freelance</motion.h1>
                        <motion.h1 variants={banner_left} initial="initial" animate="animate"> Designer &  Developer</motion.h1>
                        <motion.span variants={banner_left} initial="initial" animate="animate">
                            <p>Based in Pune, India</p>
                            <motion.img variants={globe_animation}
                                initial="initial"
                                animate="animate" className='globe_image' src="/Images/globe.png" alt="" />
                        </motion.span>
                    </div>

                    <motion.img variants={banner_right} initial="initial" animate="animate" transition={{ delay: 1 }} src="/Images/banner2.png" className='banner_pic' alt="" />

                </div>

                <motion.div variants={FadeUp} initial="initial" animate="animate" className='marquee'>
                    <Marquee
                        gradient={0}
                        speed={100}
                        loop={0}
                        direction={'right'}
                    >
                        <h1 className='marquee1'> Rishikesh Patange  ― </h1>
                    </Marquee>
                </motion.div>
            </div>

            {/* banner phone */}

            <div className="banner_container_phone">
                <motion.img variants={banner_right} initial="initial" animate="animate" transition={{ delay: 1 }}src="/Images/banner2.png" className='banner_pic' alt="" />

                <div className='banner_content_phone'>
                    <motion.h1 variants={banner_left} initial="initial" animate="animate">Freelance</motion.h1>
                    <motion.h1 variants={banner_left} initial="initial" animate="animate">Designer & Developer</motion.h1>

                    <div className='phone_basedIn'>
                        <motion.p variants={banner_left} initial="initial" animate="animate">Based in Pune, India</motion.p>
                    </div>


                </div>

                <motion.div variants={FadeUp} initial="initial" animate="animate" >

                    <Marquee
                   
                        gradient={0}
                        speed={70}
                        loop={0}
                    >
                        <h1      className='marquee_phone'> Rishikesh ― Patange  ― </h1>

                    </Marquee>
                </motion.div>


            </div>

        </div>
    )
}

export default Banner;