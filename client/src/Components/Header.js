import React, { useState } from "react";
import './Header.css';


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                {/**ADD LOGO HERE */}
                <a href="/">DJ Narcissist</a>
            </div>
            <button className="navbar-toggler" onClick={toggleNavbar}>
                {/**ICON TO SHOW/HIDE MENU */}
                MENU
            </button>
            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
              
                    {/**NAV LINKS HERE */}
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/events">Events</a>
                    <a href="Music">Music</a>
                    <a href="/Merch">Merch</a>
                    <a href="/contact">Contact</a>

                
            </nav>
        </header>
    );
}

export default NavBar;