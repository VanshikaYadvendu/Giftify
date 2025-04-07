import React from 'react'
import'./Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="content-left">
                 <img src={assets.logo} alt="" />
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                <div className="social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1-222-321-4242</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
            
        </div>
    <hr />
    <p className="footer-copyright"> Copyright 2024 @Tomato.com -All Rights Reserved</p>
    </div>
  )
}

export default Footer