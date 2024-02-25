import React from 'react';

const Navbar = () => {
    return (
        <header> 
            <div id="logo">
                Sleepless in Seattle
            </div>
            <div className="topnav">
                <a className="home" href="index.html">Home</a>
                <a href="itinerary.html">My Itinerary</a>
                <a href="sign-in.html">Sign In</a>
            </div>
        </header>
    );
};

export default Navbar;
