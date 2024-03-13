import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';


const SavedActivities = (props) => {
    return (
        <main className="">
            <NavBar></NavBar>
            <div className="itinerary-container">
                <section className="my-itinerary">
                    <h1>My Itinerary</h1>
                    <div className="button1-container">
                        <Link to="/itinerary-form">
                        <button type="button" className="btn btn-success">Build Itinerary</button>
                        </Link>
                    </div>
                </section>

                <section className="sample-saved-activities">
                    <h1>View Itinerary</h1>
                    <div className="button1-container">
                        <Link to="/final-itinerary">
                        <button type="button" className="btn btn-success">View Final Itinerary</button>
                        </Link>
                    </div>
                </section>
            </div>
          <Footer></Footer>
        </main>
    );
};

export default SavedActivities;