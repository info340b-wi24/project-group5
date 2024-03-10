import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header> 
            <Link to="/">
                <div id="logo">
                    Sleepless in Seattle
                </div>
            </Link>
            
            <div className="topnav">
                <Link to="/">
                    <a className="home" href="/">Home</a>
                </Link>
                
                <a href="itinerary">My Itinerary</a>
                <a href="sign-in.html">Sign In</a>
            </div>
        </header>
    );
};

export default Navbar;
