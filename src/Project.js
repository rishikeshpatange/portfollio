import React from 'react';
import './Project.css';
import { motion } from 'framer-motion';
import Project_component from './Project_component';

function Project() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 1 }} transition={{ duration: 1 }} className='project'>
            <div className="project_container">

                <div className="project_content">
                    <h1>PROJECTS</h1>
                </div>

                <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} exit={{ scaleX: 0, opacity: 0 }} transition={{ duration: 1 }}  className="project_row">

                    <a href="https://ecommerce-c7689.web.app/" target={"_blank"}>
                    <Project_component
                    id="1"
                    title="Ecommerce website"
                    SubTitle="CLOTHING CATEGORY"
                    image="./Images/project_component1.png"
                    />
                    </a>

                    <a href="https://clone-979a7.web.app/" target={"_blank"}>
                    <Project_component
                     id="1"
                     title="Amazon clone"
                     SubTitle="AMAZON CATEGORY"
                     image="./Images/project_component2.png"
                     />
                     </a>

                </motion.div>
            </div>
        </motion.div>
    )
}

export default Project
