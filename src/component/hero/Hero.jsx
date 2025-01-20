import React from 'react'
import './hero.css';

function Hero() {
    return (
        <div className='home' id='hero'>
            <div className="text_con">
                <h1>Love the Planet</h1>
                <h1>we walk on</h1>
                <p>Bibendum fermentum, aenean donec pretium aliquam blandit tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.</p>
                <div className="shopping">
                    <a href="#">shop men</a>
                    <a href="#" className='women'>shop women</a>
                </div>
            </div>
        </div>
    )
}

export default Hero
