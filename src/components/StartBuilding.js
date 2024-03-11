import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import { db } from '../index'; // Import the db instance from your index.js file
import { getAuth } from 'firebase/auth';
import { ref, get, child } from 'firebase/database';

const SavedActivities = (props) => {
    const [itineraries, setItineraries] = useState([]);
    const auth = getAuth();

    useEffect(() => {
        const fetchItineraries = async () => {
            try {
                const user = auth.currentUser;
                if (user) {
                    const userId = user.uid;
                    const snapshot = await get(child(ref(db), 'itineraries'));
                    if (snapshot.exists()) {
                        const itinerariesData = Object.values(snapshot.val()).filter(itinerary => itinerary.userId === userId);
                        setItineraries(itinerariesData);
                    } else {
                        console.log('No itineraries found in the database');
                    }
                }
            } catch (error) {
                console.error('Error fetching itineraries:', error);
            }
        };

        fetchItineraries();
    }, [auth]);

    return (
        <main className="">
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
                            {itineraries.map((itinerary, index) => (
                                <div key={index} className="card">
                                    <p className='itin-name'>{itinerary.name}</p>
                                    <p className='itin-date'>{itinerary.date}</p>
                                    <p className='itin-desc'>{itinerary.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            {/* <Footer /> */}
        </main>
    );
};

export default SavedActivities;
