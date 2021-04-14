import React, { useState } from 'react'
import './NavBar.css'
import { NavLink, useHistory } from "react-router-dom";
import airbnb_logo from "../../img/airbnb-logo.png"
import SignupModal from '../SignupModal/index'
import LoginModal from '../LoginModal';
import {useSelector} from 'react-redux'

function NavBar({ authenticated, setAuthenticated }) {
    const history = useHistory()
    const [signupOpen, setSignupOpen] =  useState(false)
    const [loginOpen, setLoginOpen] = useState(false)
    const user = useSelector((state) => state?.user)

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

    const handleReservationButton = () => {

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
            <div onClick={handleReservationButton}>
                    <img
                        className="NavBar__icon"
                        src={airbnb_logo}
                        alt="logo"
                    /> Reservations
            </div>
            {/* <div className='NavBar__center'>

                <input type="text" />
            </div> */}
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