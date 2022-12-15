import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Spiral } from 'hamburger-react';
import { motion } from "framer-motion";




function Header() {

    const [navbar, setNavbar] = useState(false);
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [isopen, setOpen] = useState(false);

    function MenuBtn() {
        setShowMediaIcons(showMediaIcons => !setShowMediaIcons);
        setOpen(isopen => !setOpen)
    }

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener("scroll", changeBackground);

    // animations

    const FadeDown = {
        initial: {
            translateY: -200,
            opacity: 0
        },
        animate: {
            translateY: 0,
            opacity: 1,

            transition: {
                duration: 0.2,
            }
        }

    }



    return (
        <motion.div variants={FadeDown} initial="initial" animate="animate" className={navbar ? 'header active' : "header"}>
            <Link to='/'>
                <h1 className="header__logo">© R I S H I</h1>

            </Link>
            <div onClick={MenuBtn} className={
                showMediaIcons ? "header__nav header__navPhone" : "header__nav"}>

                <Link to='/work'  >
                    <div className="header__option">
                        <h1>Work</h1>
                    </div>
                </Link>

                <Link to='/about' >
                    <div className="header__option">
                        <h1>About</h1>
                    </div>
                </Link>
            </div>

            <div className="hambuger-menu">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}><Spiral color='black' size={30}
                    toggled={isopen} toggle={setOpen} /></a>
            </div>
        </motion.div>
    )
}

export default Header

