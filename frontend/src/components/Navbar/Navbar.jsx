import React from 'react'
import { Link } from 'react-router'

import "./Navbar.css"
import Logo from "../../images/logos/62.jpg"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={Logo} alt="MicroProjects Logo" className="logo-image" />
                    MicroProjects
                </div>
                <div className="navbar-links">
                    <Link to="/about">About Us</Link>
                    <Link to="#">Review</Link>
                    <Link to="#">Contact</Link>
                </div>
                <div className="navbar-actions">
                    <Link to="#" className="get-started">Get Started</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar