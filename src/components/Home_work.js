import React from 'react';
import { Link } from 'react-router-dom';
import './Home_work.css'

function Home_work() {
    return (
        <div className='home_work'>

            <div className="home_work_content">
                <p>Recent work</p>
            </div>

            <div data-aos="fade-up" className="home_work_container">
                <div>
                    <a href="https://diskt2.web.app/" target="_blank">

                        <img src="./Images/project4.png" alt="" />
                        <p>Distk</p>
                    </a>
                </div>

                <div data-aos="fade-up">
                    <a href="https://ecommerce-c7689.web.app/" target="_blank">
                        <img src="./Images/project1.png" alt="" />
                        <p>Ecommerce</p>
                    </a>
                </div>
            </div>
            <Link to="/Work">
                <button className='home_work_btn'>More work</button>
            </Link>
        </div>
    )
}

export default Home_work