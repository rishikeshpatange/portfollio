import React, { useState } from 'react';
import './Header.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';


function Header() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <div className='header'>
            <Link to='/'>
                <h1 className="header__logo">RSP</h1>
            </Link>

            {/* <div className="header__nav">
                <div className="header__option">
                    <h1>HOME</h1>
                </div>
                <div className="header__option">
                    <h1>PROJECT</h1>
                </div>
                <div className="header__option">
                    <h1>CONTACT</h1>
                </div>
            </div> */}
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
                <a href="#/" onClick={() => setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu fontSize={'35px'} color='black' /></a>
            </div>
        </div>
    )
}

export default Header
