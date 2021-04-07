import React from 'react'
import './NavBar.css'
import { NavLink } from "react-router-dom";
import airbnb_logo from "../../img/airbnb-logo.png"

function NavBar() {
    return (
        <div className='NavBar'>
            <NavLink to='/'>
                <img
                    className="NavBar__icon"
                    src={airbnb_logo}
                    alt="logo"
                />BearBnb
            </NavLink>

            <div className='NavBar__center'>
                <input type="text" />

            </div>

            <div className='NavBar__right'>
            <NavLink to='/sign-up'>
                <img
                    className="NavBar__icon"
                    src={airbnb_logo}
                    alt="logo"
                />Become a Bear
            </NavLink>
            <NavLink to='/sign-up'>
                <img
                    className="NavBar__icon"
                    src={airbnb_logo}
                    alt="logo"
                />login
            </NavLink>
            </div>
        </div>
    )
}

export default NavBar