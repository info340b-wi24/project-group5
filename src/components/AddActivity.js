import React from 'react'; 
import { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar'; 
import { TimePick } from './TimePicker';
import { db } from '../index.js';
import { getDatabase, ref, push } from 'firebase/database';
import { getAuth } from 'firebase/auth'
import { Link } from 'react-router-dom';


export function AddActivity () { 
    const [startHour, setStartHour] = useState('01'); 
    const [startMin, setStartMin] = useState('00'); 
    const [startAMPM, setStartAMPM] = useState('AM'); 
    const [endHour, setEndHour] = useState('01'); 
    const [endMin, setEndMin] = useState('00'); 
    const [endAMPM, setEndAMPM] = useState('AM'); 
    
    const addingAct = () => {
        const auth = getAuth(); //access the "authenticator"
        const user = auth.currentUser;
        if (!user) {
        console.error('User not authenticated.');

        }
        //const user = useAuthState(auth)
        
    const userId = user.uid;
        push(ref(db, userId + '/itinerary/activities'), {
        start: startHour + ":" + startMin + " " + startAMPM, 
        end: endHour + ":" + endMin + " " + endAMPM,
        })
};

    return (
    <>
    <NavBar></NavBar>
    <main>
    <h1 style={{display:'flex', justifyContent:'center'}}>Sunday, February 21</h1>
    </main>
    <section>
        <div className="add-act-card-container">
            <div className="add-activity">
                <div className="add-act-card">
                    <img src="img/pike.jpeg" alt="image of Pike Place Market"/>
                    <h2>Pike Place Market</h2>
                    <p> Start your day at one of the oldest continuously operated public farmers' markets in the United States.</p>
                </div>
            </div>
        </div>
        <div className="act-time-container">
            <div className="time-start">
                <h2>Starts:</h2>
                <TimePick setHour={setStartHour} setMin={setStartMin} setAMPM={setStartAMPM}></TimePick>
            </div>
            <div className="time-end">
                <h2>Ends:</h2>
                <TimePick setHour={setEndHour} setMin={setEndMin} setAMPM={setEndAMPM}></TimePick>
            </div>
            <div className="add-activity-btn">
                <Link to='/search-activity'>
                <button onClick={addingAct} type="button" className="btn btn-success">Add Activity</button>
                </Link>
                <Link to='/final-'>
                <button type="button" className="btn btn-success">Done!</button>
                </Link>
            </div>
        </div>
    </section>
    <Footer></Footer>
    </>
)}