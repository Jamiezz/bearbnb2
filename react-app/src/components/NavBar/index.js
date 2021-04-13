import React, { useState } from 'react'
import './NavBar.css'
import { NavLink } from "react-router-dom";
import airbnb_logo from "../../img/airbnb-logo.png"
import SignupModal from '../SignupModal/index'
import LoginModal from '../LoginModal';

function NavBar({ authenticated, setAuthenticated }) {
    const [signupOpen, setSignupOpen] =  useState(false)
    const [loginOpen, setLoginOpen] = useState(false)

    const handleSignupOpen = () => {
        setSignupOpen(!signupOpen)
        if(loginOpen === true){
            setLoginOpen(false)
        }

    }

    const handleLoginOpen = () => {
        setLoginOpen(!loginOpen)
        if(signupOpen === true){
            setSignupOpen(false)
        }
    }

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

            <div onClick={handleSignupOpen}>
                    <img
                        className="NavBar__icon"
                        src={airbnb_logo}
                        alt="logo"
                    /> Become a Bear
            </div>
            <div onClick={handleLoginOpen}>

                    <img
                        className="NavBar__icon"
                        src={airbnb_logo}
                        alt="logo"
                    />login
            </div>
            </div>
            <SignupModal
            isOpen={signupOpen}
            handleClose={handleSignupOpen}
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            />
            <LoginModal
            isOpen={loginOpen}
            handleClose={handleLoginOpen}
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            />
        </div>
    )
}

export default NavBar