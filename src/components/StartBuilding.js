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
                        <button type="button"><a href="itinerary-form">Build Itinerary</a></button>
                    </div>
                </section>

                <section className="sample-saved-activities">
                    <h1>Saved Activities</h1>
                    <div className="test-container">
                        <div className="row">
                                <div className="card">
                                    <img src={props.data.img} className="img-fluid" alt={props.data.activity_name} />
                                    <p>{props.activity_name}</p>
                                    <p>{props.activity}</p>
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