import { db } from '../index.js';
import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { ref, onValue } from 'firebase/database'; // Import ref and onValue from Firebase
import NavBar from './NavBar';
import Footer from './Footer';
export default function FinalItinerary() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const auth = getAuth(); //access the "authenticator"
    const user = auth.currentUser;
    if (!user) {
      console.error('User not authenticated.');
      return;
    }
    const userId = user.uid;

    const activitiesRef = ref(db, `/${userId}/itinerary/activities`); // Reference to the user's activities
    onValue(activitiesRef, (snapshot) => {
      const activitiesValue = snapshot.val();
      if (!activitiesValue) {
        console.log('No activities found.');
        return;
      }

      const activityList = Object.values(activitiesValue);
      console.log(activityList);
      setActivities(activityList);
    });

  }, []);

  return (
    <>
      <NavBar />
      <main className="final-form-body">
        <div className="final-form-container">
          <div className="final-info">
            <h1>Your Itinerary</h1>
            <p>Here's a breakdown of your activities for the day:</p>
          </div>

          <div className="itin-card-container">
            <div className="itin-activity">
              <div className="row">
                {activities.map((activity, index) => (
                  <div key={index} className="col-md-6 col-xl-3 mb-4">
                    <div className="card mb-8">
                      <div className="card">
                        <div className="row">
                          <div className="col-sm-auto col-xl-12">
                            <img src={activity.img} className="img-fluid" alt={activity.activity_name} />
                          </div>
                          <div className="col-sm">
                            <div className="card-content">
                              <h2>{activity.activity_name}</h2>
                              <p>{activity.description}</p>
                              
                              
                              {/* <p>{activity.start} - {activity.end}</p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}