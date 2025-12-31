import React from 'react'
import { Terminal, Sparkles } from "lucide-react"

import "./About.css"

function About() {
    return (
        <div className="about">
            <div className="about-content">
                <span className="about-projectname">The MicroProjects</span>
                <h1 className="about-title">Building Tools for <span>Modern Web.</span></h1>
                <p className="about-info">
                    Hi, I'm a developer and I am passionate about bridging the gap between complex machine learning logic and intuitive user experiences.
                </p>
                <p className='about-info'>
                    I built <span>MicroProjects</span> because I believe that powerful tools like K-Means color extraction or algorithmic ASCII transformation should be accessible to everyone through a clean, performant interface. By combining a FastAPI backend with a reactive frontend, I aim to provide a seamless workspace for digital creators and data enthusiasts.
                </p>
                <div className="about-aspects-list">
                    <div className="about-aspect">
                        <Terminal
                            color="var(--color-accent)"
                            className="about-aspect-icon"
                        />
                        <div className="about-aspect-content">
                            <h3 className="about-aspect-title">Developer-Centric</h3>
                            <p className="about-aspect-info">
                                Built by a developer for developers, focusing on usability and performance.
                            </p>
                        </div>
                    </div>

                    <div className="about-aspect">
                        <Sparkles
                            color="var(--color-accent)"
                            className="about-aspect-icon"
                        />
                        <div className="about-aspect-content">
                            <h3 className="about-aspect-title">Innovative Tools</h3>
                            <p className="about-aspect-info">
                                Offering cutting-edge features like K-Means color extraction and ASCII art generation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About