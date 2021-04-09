import React from 'react'
import './NavBar.css'
import { NavLink } from "react-router-dom";
import airbnb_logo from "../../img/airbnb-logo.png"
import { openSignup, openLogin } from "../../store/modal";
import { useDispatch, useSelector } from "react-redux";

function NavBar() {
    const dispatch = useDispatch();
    const modal = useSelector((state) => state.modal.signupShow);
    // <p onClick={() => dispatch(openLogin())}>Log in</p>
    // <p onClick={() => dispatch(openSignup())}>Sign up</p>

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
                {/* <NavLink to='/sign-up'> */}

            <div>
                    <img
                        onClick={() => dispatch(openSignup())}
                        className="NavBar__icon"
                        src={airbnb_logo}
                        alt="logo"
                    /> Become a Bear </div>
                {/* </NavLink> */}
                < NavLink to='/login' >
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