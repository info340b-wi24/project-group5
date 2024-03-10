import React from 'react'; 
import Footer from './Footer';
import NavBar from './NavBar';
import { ItineraryCards } from './ItineraryCard';
import { ref, onValue} from 'firebase/database';
import { db } from '../index.js';
import { useState, useEffect } from 'react';




export function FinalItinerary () {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const activitiesRef = ref(db, 'activities');
        onValue(activitiesRef, (snapshot) => {
        const activitiesValue = snapshot.val();
        console.log(activitiesValue);

        const activityList = []

        for (const activity in activitiesValue) {
            const activityData = activitiesValue[activity]
            activityList.push(activityData)
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
                        <ItineraryCards imgName="img/pike.jpeg" imgAlt = "Pike Place Market sign" activityName = "Pike Place Market" activityDescription = "Start your day at one of the oldest continuously operated public farmers' markets in the United States." timeStart="9:00" timeEnd ="11:00"></ItineraryCards>
                        <ItineraryCards imgName="img/mpop.jpeg" imgAlt = "Cool structures at MOPOP"activityName = "Museum of Pop Culture" activityDescription= "Explore exciting exhibitions of music, film, and science at the Museum of Pop Culture." timeStart="12:30" timeEnd="4:00" ></ItineraryCards>
                        <ItineraryCards imgName="img/pinkdoor.jpeg" imgAlt = "Pasta plate at dinner table" activityName = "The Pink Door" activityDescription="Treat yourself to a delicious Italian meal with a beautiful ambience at this classic Seattle restaurant." timeStart="6:30" timeEnd="8:00"></ItineraryCards>
                        </ul>
                </div>
            </div>
        </div>     
        </main>
        <Footer></Footer>
    </>
    )
}