import React from 'react'
import './sing-in.css'
import { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


function SingIn() {


    const [PasswordLogin, setPasswordLogin] = useState(false);
    const [PasswordSingUp, setPasswordSingUp] = useState(false);
    const [active, setActive] = useState(false);


    const showPasswordLogin = () => {
        console.log(PasswordLogin)
        setPasswordLogin(Pass=>!Pass)
        console.log(PasswordLogin)
        console.log("hello world")

    }
    const showPasswordSingUp = () => {
        setPasswordSingUp(Passw=>!Passw)
        console.log("hello world")
    }

    return (
        <div className={active ? 'sing-in-main-container active' : 'sing-in-main-container'}>
            <div className="inner-box">
                <form className="form" >
                    <div className="name">
                        login
                    </div>
                    <div className="flex-column">
                        <label>Username </label></div>
                    <div className="inputForm">
                        <FaUser />
                        <input type="text" className="input" placeholder="Enter your Username" />
                    </div>
                    <div className="flex-column">
                        <label>Password </label></div>
                    <div className="inputForm">
                        <FaLock />
                        <input type={PasswordSingUp ? "text" : "password"} className="input" placeholder="Enter your Password" />
                        <span onClick={showPasswordLogin}>

                            <FaEye size={20} />
                        </span>
                    </div>
                    <div className="flex-row">
                        <span className="span">Forgot password?</span>
                    </div>
                    <button className="button-submit">Login</button>

                </form>
                <form className="form sing-up-container" >
                    <div className="name">
                        sing up
                    </div>
                    <div className="flex-column">
                        <label>Username </label></div>
                    <div className="inputForm">
                        <FaUser />
                        <input type="text" className="input" placeholder="Enter your Username" />
                    </div>
                    <div className="flex-column">
                        <label>Email </label></div>
                    <div className="inputForm">
                        <IoMdMail size={18} />
                        <input type="text" className="input" placeholder="Enter your Email" />
                    </div>
                    <div className="flex-column">
                        <label>Password </label></div>
                    <div className="inputForm">
                        <FaLock />
                        <input type={PasswordLogin ? "text" : "password"} className="input" placeholder="Enter your Password" />
                        <span onClick={showPasswordSingUp}>
                            <FaEye size={20}  />
                        </span>
                    </div>
                    <div className="flex-row">
                        <span className="span">Forgot password?</span>
                    </div>
                    <button className="button-submit">Sign In</button>

                </form>

                <div className="toggle-box">

                    <div className="toggle-panel toggle-left" >
                        <h1>Hello, Welcome!</h1>
                        <p>Don't have an account?</p>
                        <button onClick={() => setActive(true)}>Register</button>
                    </div >
                    <div className="toggle-panel toggle-right" >
                        <h1>Welcome Back!</h1>
                        <p>Already have an account?</p>
                        <button onClick={() => setActive(false)}>Login</button>
                    </div >
                </div>
            </div>

        </div>







    )
}

export default SingIn
