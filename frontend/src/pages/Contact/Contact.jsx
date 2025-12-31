import React from 'react'
import { Link } from "react-router"
import "./Contact.css"

import { Dot, Linkedin, Github, Award, SquareArrowOutUpRightIcon } from 'lucide-react'

function Contact() {
    return (
        <div className="contact">
            <div className="contact-content">
                <div className="contact-job-status">
                    <Dot size="3rem" color="#34d399" /> Looking for Opportunities
                </div>
                <h1 className="contact-title">Let's build something <span>extraordinary.</span></h1>
                <p className="contact-info">
                    I'm currently looking for Full Stack roles where I can collaborate in building scalable <span>Python</span> backends and dynamic <span>React</span> interfaces. Whether it's a technical deep-dive or a quick coffee chat, I'd love to hear from you.
                </p>
                <div className="contact-profiles-title">Professional Profiles</div>
                <div className="contact-profiles-list">
                    <Link target='_blank' to="https://linkedin.com/in/swayam-bhoir-17b7a1333/" className="contact-profile linkedin">
                        <span className="icon"><Linkedin color="var(--color)" /></span> LinkedIn <SquareArrowOutUpRightIcon />
                    </Link>
                    <Link target='_blank' to="https://github.com/swayam9705" className="contact-profile github">
                        <span className="icon"><Github color="var(--color)" /></span> GitHub <SquareArrowOutUpRightIcon />
                    </Link>
                    <Link target='_blank' to="https://leetcode.com/u/aYzUu2kaie/" className="contact-profile leetcode">
                        <span className="icon"><Award color="var(--color)" /></span> LeetCode <SquareArrowOutUpRightIcon />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact