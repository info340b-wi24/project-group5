import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';

const SavedActivities = (props) => {
    return (
        <main className="">
            <Navbar />
            <div className="itinerary-container">
                <section className="my-itinerary">
                    <h1>My Itinerary</h1>
                    <div className="button1-container">
                        <button type="button">Build Itinerary</button>
                    </div>
                </section>

                <section className="sample-saved-activities">
                    <h1>Saved Itineraries</h1>
                    <div className="test-container">
                        <div className="row">
                                <div className="card">
                                    <p>Itinerary Name</p>
                                    <p>Itinerary Date</p>
                                    <p>Itinerary Description</p>
                                </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
};

export default SavedActivities;