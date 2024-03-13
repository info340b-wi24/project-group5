import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import { TimePick } from './TimePicker';
import { db } from '../index.js';
import { getAuth } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { ref, push, get } from 'firebase/database'; // Import ref, push, and get

export function AddActivity() {
    const [startHour, setStartHour] = useState('01');
    const [startMin, setStartMin] = useState('00');
    const [startAMPM, setStartAMPM] = useState('AM');
    const [endHour, setEndHour] = useState('01');
    const [endMin, setEndMin] = useState('00');
    const [endAMPM, setEndAMPM] = useState('AM');
    const [activity, setActivity] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const auth = getAuth();
            const user = auth.currentUser;
            if (!user) {
                console.error('User not authenticated.');
                return;
            }
            const userId = user.uid;
            
            // Fetch activity data from Firebase
            const activityRef = ref(db, `${userId}/itinerary/activities`);
            const snapshot = await get(activityRef); // Use get method to fetch data

            if (snapshot.exists()) {
                // Get the last activity added (assuming it's the one the user just added)
                const activities = snapshot.val();
                const keys = Object.keys(activities);
                const lastActivityKey = keys[keys.length - 1];
                setActivity(activities[lastActivityKey]);
            }
        };

        fetchData();
    }, []);

    const addingAct = () => {
        const auth = getAuth(); // Access the "authenticator"
        const user = auth.currentUser;
        if (!user) {
            console.error('User not authenticated.');
            return;
        }
        
        const userId = user.uid;
        push(ref(db, `${userId}/itinerary/activities`), {
            start: startHour + ":" + startMin + " " + startAMPM, 
            end: endHour + ":" + endMin + " " + endAMPM,
           
        }).then(() => {
            console.log('Activity added successfully.');
        }).catch((error) => {
            console.error('Error adding activity: ', error);
        });
    };

    return (
        <>
            <NavBar />

            <section>
                <div className="add-act-card-container">
                    <div className="add-activity">
                        <div className="add-act-card">
                            {activity && (
                                <>
                                    <img src={activity.img} alt="Activity" />
                                    <h2>{activity.activity_name}</h2>
                                    <p>{activity.description}</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="act-time-container">
                    <div className="time-start">
                        <h2>Starts:</h2>
                        <TimePick setHour={setStartHour} setMin={setStartMin} setAMPM={setStartAMPM} />
                    </div>
                    <div className="time-end">
                        <h2>Ends:</h2>
                        <TimePick setHour={setEndHour} setMin={setEndMin} setAMPM={setEndAMPM} />
                    </div>
                    <div className="add-activity-btn">
                        <button onClick={addingAct} type="button" className="btn btn-success">Add Activity</button>
                        <Link to='/final-itinerary'>
                            <button type="button" className="btn btn-success">Done!</button>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
