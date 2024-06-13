import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./Footerstyle.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <div>
                    <p>Thapar University,Patiala</p>
                    <p>Punjab</p>
                </div>
            </div>
            <div className="phone">
             <h4> <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
               1-2323-343-23</h4>
            </div>
            <div className="email">
             <h4> <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
               llishika_be22@thapar.edu</h4>
            </div>

        </div>
        <div className="right">
        <h4>About Me</h4>
        <p>A senior in Thapar Institute of Engineering and Technology, Patiala, Punjab, I am currently pursuing an undergraduate degree in Computer Engineering with a minor in Data Science. 
            
        </p>
        <div className="social">
        <FaFacebook size={20} style={{color:"#fff",marginRight:"1rem"}}/>
        <FaTwitter size={20} style={{color:"#fff",marginRight:"1rem"}}/>
        <FaLinkedin size={20} style={{color:"#fff",marginRight:"1rem"}}/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
