import React from 'react'; 
import Footer from './Footer';
import NavBar from './NavBar'; 
import { TimePick } from './TimePicker';

export function AddActivity () { 
    return (
    <>
    <NavBar></NavBar>
    <main>
    <h1>Sunday, February 21</h1>
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
                <TimePick></TimePick>
            </div>
            <div className="time-end">
                <h2>Ends:</h2>
                <TimePick></TimePick>
            </div>
            <div className="add-activity-btn">
                <button type="button" className="btn btn-success">Add Activity</button>
            </div>
        </div>
    </section>
    <Footer></Footer>
    </>
)}