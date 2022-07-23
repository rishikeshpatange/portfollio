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

                    <span className='home_work_img_box'>
                        <img  src="./Images/dares.jpg" alt="" />
                    </span>
                    <p>Distk</p>
                    </a>
                </div>

                <div data-aos="fade-up">
                    <a href="https://ecommerce-c7689.web.app/" target="_blank">

                    <span className='home_work_img_box home_work_img_box2'>
                        <img src="./Images/ecommerce.jpg" alt="" />
                    </span>
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