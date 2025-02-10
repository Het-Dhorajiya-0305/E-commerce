import React from 'react'
import image from '../assets/sing-in.png'
import './sing-in.css'

function SingIn() {
    return (
        <div className='sing-in-main-container'>
            <div className="inner-container">
                <div className="sing-in-container">
                    <div className="sing-in-title">
                        <h2>Sing In</h2>
                    </div>
                    <div className="sing-in-form">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Sing In" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="image-container">
                    <img src={image} alt="not found" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default SingIn
