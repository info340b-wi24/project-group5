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
                        <button type="button">Build Itinerary</button>
                        </Link>
                    </div>
                </section>

                <section className="sample-saved-activities">
                    <h1>Saved Itineraries</h1>
                    <div className="test-container">
                        <div className="row">
                                <div className="card">
                                    <p className='itin-name'>Itinerary Name</p>
                                    <p className='itin-date'>Itinerary Date</p>
                                    <p className='itin-desc'>Itinerary Description</p>
                                </div>
                        </div>
                    </div>
                </section>
            </div>
          <Footer></Footer>
        </main>
    );
};

export default SavedActivities;