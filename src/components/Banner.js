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
                delay: 0.8
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
                delay: 0.8
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
                delay: 0.6
            }
        }

    }
    return (
        <div className='banner'>

            <div className="banner_container">
                <motion.img variants={BannerFadeUp} initial="initial" animate="animate" transition={{delay:1}}  src="/Images/banner.png" className='banner_pic' alt="" />
                <div className='banner_content'>
                    <motion.span variants={banner_left} initial="initial" animate="animate">
                        <p>Based in Pune</p>
                        <motion.img variants={globe_animation}
                            initial="initial"
                            animate="animate" className='globe_image' src="/Images/globe.png" alt="" />
                    </motion.span>
                    <motion.h1 variants={banner_right} initial="initial" animate="animate">Freelance <br /> Designer & React Developer</motion.h1>
                </div>
                <motion.div variants={FadeUp} initial="initial" animate="animate" className='marquee'>
                    <Marquee
                        gradient={0}
                        speed={90}
                        loop={0}
                        direction={'right'}
                    >
                        <h1 className='marquee1'> Rishikesh Patange  ― </h1>
                    </Marquee>
                </motion.div>
            </div>

            {/* banner phone */}

            <div className="banner_container_phone">
            <motion.img variants={BannerFadeUp} initial="initial" animate="animate" transition={{delay:1}}  src="/Images/banner.png" className='banner_pic' alt="" />

                <motion.div variants={FadeUp} initial="initial" animate="animate" >

                    <Marquee
                        className='marquee_phone'
                        gradient={0}
                        speed={70}
                        loop={0}
                    >
                        <h1> Rishikesh ― Patange  ― </h1>

                    </Marquee>
                </motion.div>

                <div className='banner_content_phone'>
                    <motion.h1 variants={banner_left} initial="initial" animate="animate">Freelance <br />  Designer & Developer</motion.h1>
                    <motion.img variants={globe_animation}
                        initial="initial"
                        animate="animate" className='globe_image_phone' src="/Images/globe.png" alt="" />
                </div>


            </div>

        </div>
    )
}

export default Banner;