import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
<<<<<<< HEAD
        <header> 
            <Link to="/" className="nav-link">
                <div id="logo">
                    Sleepless in Seattle
                </div>
            </Link>
=======
        //<header> 
            //<Link to="/">
                //<div id="logo">
                    //Sleepless in Seattle
                //</div>
            //</Link>
>>>>>>> 0aa0472a4d50cbe4922371879726b6d45c57cff1
            
            //<div className="topnav">
                //<Link to="/">
                    //<a className="home" href="/">Home</a>
                //</Link>
                
                //<a href="itinerary">My Itinerary</a>
                //<a href="sign-in.html">Sign In</a>
            //</div>
        //</header>
        <header>
          <Link to="/">
            <div id="logo">
                Sleepless in Seattle
            </div>
          </Link>

          <div className="topnav">
            <Link to="/">
                <div className="home">Home</div>
            </Link>
            <Link to ="/start-building">
                <div className="itinerary">My Itinerary</div>
            </Link>

            <Link to="/signin">
            <div className='sign-in'>Sign In</div>
            </Link>
          </div> 
        </header>
    );
};

export default Navbar;
