import React from 'react'
import { Link } from 'react-router'

import "./Navbar.css"
import Logo from "../../images/logos/62.jpg"

import { SquareArrowOutUpRight } from "lucide-react"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link className='navbar-homepage-link' to="/">
                <div className="navbar-logo">
                    <img src={Logo} alt="MicroProjects Logo" className="logo-image" />
                    MicroProjects
                </div>
                </Link>
                <div className="navbar-links">
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact Me</Link>
                    <Link target='_blank' to="https://github.com/swayam9705/Micro-Projects.git">GitHub <SquareArrowOutUpRight /></Link>
                </div>
                <div className="navbar-actions">
                    <Link to="#" className="get-started">Get Started</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar