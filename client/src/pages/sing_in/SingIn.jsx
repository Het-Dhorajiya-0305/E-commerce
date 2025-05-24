import React from 'react'
import './sing-in.css'
import { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from 'axios';


function SingIn() {


    const [passwordLogin, setPasswordLogin] = useState(false);
    const [passwordSingUp, setPasswordSingUp] = useState(false);
    const [active, setActive] = useState(false);

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword]=useState('');


    const showPasswordLogin = () => {
        setPasswordLogin(Pre=>!Pre)
    }
    const showPasswordSingUp = () => {
        setPasswordSingUp(Pre=>!Pre)
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        try {
            const formData=new FormData();

            formData.append('username',userName)
            formData.append('email',email)
            formData.append("password",password);



        } catch (error) {
            
        }
    }

    return (
        <div className={active ? 'sing-in-main-container active' : 'sing-in-main-container'}>
            <div className="inner-box">
                <form className="form" method='post' action='/user' >
                    <div className="name">
                        login
                    </div>
                    <div className="flex-column">
                        <label>Username </label></div>
                    <div className="inputForm">
                        <FaUser />
                        <input required onChange={(e)=>setUserName(e.target.value)} value={userName} type="text" className="input" placeholder="Enter your Username" />
                    </div>
                    <div className="flex-column">
                        <label>Password </label></div>
                    <div className="inputForm">
                        <FaLock />
                        <input required onChange={(e)=>setPassword(e.target.value)} value={password} type={passwordLogin ? "text" : "password"} className="input" placeholder="Enter your Password" />
                        <span onClick={showPasswordLogin}>
                        {passwordLogin?( <FaEyeSlash size={20}/>):(<FaEye size={20}  />)} 
                        </span>
                    </div>
                    <div className="flex-row">
                        <span className="span">Forgot password?</span>
                    </div>
                    <button className="button-submit"><Link to="/home" className='link'>Login</Link></button>

                </form>
                <form className="form sing-up-container" >
                    <div className="name">
                        sign up
                    </div>
                    <div className="flex-column">
                        <label>Username </label></div>
                    <div className="inputForm">
                        <FaUser />
                        <input required onChange={(e)=>setUserName(e.target.value)} value={userName} type="text" className="input" placeholder="Enter your Username" />
                    </div>
                    <div className="flex-column">
                        <label>Email </label></div>
                    <div className="inputForm">
                        <IoMdMail size={18} />
                        <input required onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className="input" placeholder="Enter your Email" />
                    </div>
                    <div className="flex-column">
                        <label>Password </label></div>
                    <div className="inputForm">
                        <FaLock />
                        <input required onChange={(e)=>setPassword(e.target.value)} value={password} type={passwordSingUp ? "text" : "password"} className="input" placeholder="Enter your Password" />
                        <span onClick={showPasswordSingUp}>
                           {passwordSingUp?( <FaEyeSlash size={20}/>):(<FaEye size={20}  />)} 
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
