import React from 'react'; 
import Footer from './Footer';
import NavBar from './NavBar';
import { ItineraryCards } from './ItineraryCard';
import { ref, onValue} from 'firebase/database';
import { db } from '../index.js';
import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth'

export function FinalItinerary () {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const activitiesRef = ref(db, 'activities');
        onValue(activitiesRef, (snapshot) => {
        const activitiesValue = snapshot.val();
        console.log(activitiesValue);

        const activityList = []

        const auth = getAuth(); //access the "authenticator"
        const user = auth.currentUser;
        if (!user) {
        console.error('User not authenticated.');
        //return;
        }
    //const userId = user.uid;
        for (const activity in activitiesValue) {
            const activityData = activitiesValue[activity]
            //if (userId == activity.userId) {
                activityList.push(activityData)
            //}
        }
        activityList.sort(function(a, b){return a.start - b.start});
        console.log(activityList)

        setActivities(activityList)

    });

}, [])

    
   
    return (
        <>
        <NavBar></NavBar>
        <main className="final-form-body">
            <div className="final-form-container">
                <div className="final-info">
                    <h1> Your Itinerary</h1>
                    <h2> February 21, 2024 </h2>
                    <p> Here's a breakdown of your activities for the day:</p>
                </div>

                <div className="itin-card-container">
                    <div className="itin-activity">
                        <ul>
                        {activities.map((activity) => {
                            return <ItineraryCards imgName={activity.img} imgAlt={activity.alt} activityName={activity.name} activityDescription={activity.description} timeStart= {activity.start} timeEnd = {activity.end} ></ItineraryCards>
                        })}
                        </ul>
                </div>
            </div>
        </div>     
        </main>
        <Footer></Footer>
    </>
    )
}