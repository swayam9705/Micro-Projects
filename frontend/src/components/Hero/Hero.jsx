import React from 'react'
import "./Hero.css"

function Hero() {
    return (
        <div className='hero'>
            <div className="hero-sideindicator"></div>
            <div className="hero-content">
                <h1 className='hero-title'>Unleash Your Creativity With Micro-Tools</h1>
                <p className="hero-subtitle">A collection of small, powerfull projects to have fun with</p>
            </div>
        </div>
    )
}

export default Hero