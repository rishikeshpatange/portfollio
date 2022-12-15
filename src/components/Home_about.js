import React, { useEffect } from 'react';
import "./Home_about.css";
import "aos/dist/aos.css";
import Aos from 'aos';
import { Link } from 'react-router-dom';
// import Tilt from 'react-vanilla-tilt';

function Home_about() {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    return (
        <div className='home_about'>
            <div className="home_about_content">
                <h1 data-aos="fade-up">Undergrad engineer who wants to help brands to stand out in the digital era</h1>
                <p data-aos="fade-up">The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</p>
            </div>
            {/* <Tilt id="tilt" options={{ scale: 2, max: 55, reverse: true, speed: 100, }}
                style={{}}> */}
                <Link to="/About">
                    <button data-aos="fade-up" className='home_about_btn home_about_btn1'>About me</button>
                </Link>
            {/* </Tilt> */}

        </div>
    )
}

export default Home_about


