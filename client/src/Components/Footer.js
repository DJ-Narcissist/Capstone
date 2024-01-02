import React, { useState } from 'react';
import './Footer.css'; // Ensure this file includes updated styles
// Import icons (assuming you're using something like react-icons or similar)
import { FaFacebookF, FaInstagram, FaTwitter, FaApple, FaGoogle, FaYoutube, FaSoundcloud, FaRss } from 'react-icons/fa';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting for subcription:', email);
        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error ("Not a JSON response");
            }

            const data = await  response.json();
            console.log(data,message);
            // Reset the form or show a sucess message
        } catch (error) {
            console.error('Error subscribing:', error);
            // Handle error, if an erro show error message
        }

    }
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Contact Info */}
                <div className="contact-info">
                    <h3>We'd Love To Chat!</h3>
                    <p>We love hearing from our listeners, so drop us a line!</p>
                    <a href="/contact" className="message-link">Send Us a Message</a>
                </div>

                {/**Subcription Form */}
                <div className='subscribe-form'>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type='email'
                            placeholder='Enter email to subscribe'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <button type='submit'>Subscribe</button>
                    </form>
                </div>

                {/* Listen Links */}
                <div className="listen-links">
                    <h3>Listen</h3>
                    <a href="https://apple.com" target="_blank" rel="noopener noreferrer"><FaApple /> Apple</a>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer"><FaGoogle /> Google</a>
                    <a href="https://www.youtube.com/@_DJNarcissist" target="_blank" rel="noopener noreferrer"><FaYoutube /> Youtube</a>
                    <a href="https://soundcloud.com/dj-narcissist" target="_blank" rel="noopener noreferrer"><FaSoundcloud /> Soundcloud</a>
                    <a href="/rss" target="_blank" rel="noopener noreferrer"><FaRss /> RSS</a>
                </div>

                {/* Social Media Links */}
                <div className="social-media">
                    <h3>Follow</h3>
                    <a href="https://facebook.com/djnarcissist" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/_djnarcissist/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://twitter.com/Wise3K" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            
                </div>

                {/* Subscription Prompt */}
                <div className="subscribe-prompt">
                    <p>Subscribe, don't miss the next mix, events and more!</p>
                </div>

                {/* Copyright */}
                <div className="copyright">
                    © {new Date().getFullYear()} DJ Narcissist. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;