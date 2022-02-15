import React, { useState } from 'react';
import './Header.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import DarkModeToggle from "react-dark-mode-toggle";



function Header({ switchTheme,btnText}) {
    const [showMediaIcons, setShowMediaIcons] = useState(false);



    return (
        <div className='header'>
            <Link to='/'>
                <h1 className="header__logo">RISHI</h1>
            </Link>
           
            {/* <div class="form-check form-switch">
                <input onClick={switchTheme} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" /> 
                <label class="form-check-label" for="flexSwitchCheckDefault">{btnText}</label>
            </div> */}
            <button className='darkMode' onClick={switchTheme}>{btnText}</button>

            <div className={
                showMediaIcons ? "header__nav header__navPhone" : "header__nav"}>
                <Link to='/'>
                    <div className="header__option">
                        <h1>HOME</h1>
                    </div>
                </Link>
                <Link to="/project">
                    <div className="header__option">
                        <h1>PROJECT</h1>
                    </div>
                </Link>
                <Link to='/contact' >

                    <div className="header__option">
                        <h1>CONTACT</h1>
                    </div>
                </Link>

            </div>

            <div className="hambuger-menu">
                <a href="#/" onClick={() => setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu fontSize={'33px'} /></a>
            </div>
        </div>
    )
}

export default Header
