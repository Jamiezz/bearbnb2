import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";
import airbnb_logo from "../../img/airbnb-logo.png"

function NavBar() {
    return (
        <div className='NavBar'>
            <Link to='/'>
                <img
                    className="NavBar__icon"
                    src={airbnb_logo}
                    alt="logo"
                />
            </Link>

            <div className='NavBar__center'>
                <input type="text" />

            </div>

            <div className='NavBar__right'>
                <p>Become a bear</p>
            </div>
        </div>
    )
}

export default NavBar