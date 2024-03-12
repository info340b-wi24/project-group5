import React, { useState } from 'react';
import activitiesData from '../data/activities.json';
import { ref, push } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { db } from '../index.js';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Flexbox = ({ activity, addToItinerary }) => {
  return (
    <div className="col-md-6 col-xl-3 mb-4">
      <div className="card mb-8">
        <div className="card">
          <div className="row">
            <div className="col-sm-auto col-xl-12">
              <img src={activity.img} className="img-fluid" alt={activity.activity_name} />
            </div>
            <div className="col-sm">
              <div className="card-content">
                <h2>{activity.activity_name}</h2>
                <p>Location: {activity.location}</p>
                <p>Cost: ${activity.cost}</p>
                <p>{activity.description}</p>
                <Link to="/add-activity">
                <button onClick={() => addToItinerary(activity)}>Add to Itinerary</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchActivity = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);

    // Filter activities based on search term
    const filteredActivities = activitiesData.filter(activity =>
      activity.activity_name.toLowerCase().includes(newSearchTerm)
    );
    setSearchResults(filteredActivities);
  };

  const addToItinerary = (activity) => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      console.error('User not authenticated.');
      return;
    }
    const userId = user.uid;

    // Push activity to Firebase under the user's itinerary branch
    const itineraryRef = ref(db, userId + "/itinerary/activities");
    push(itineraryRef, activity).then(() => {
      console.log('Activity added to itinerary successfully.');
    }).catch((error) => {
      console.error('Error adding activity to itinerary: ', error);
    });
  };

  return (
    <div>
      <NavBar />
      <div className='form-container'>
        <section className="add-place-label">
          {/* IT SHOULD DISPLAY THE ITINERARY NAME MADE IN CREATFORMTEST */}
          <h1>Add Activities To:</h1>
          <h1>Itinerary Name</h1>
          <input
            type="text"
            placeholder="Search activities..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchTerm && (
            <div className="row">
              {searchResults.map(activity => (
                <Flexbox key={activity.activity_name} activity={activity} addToItinerary={addToItinerary} />
              ))}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default SearchActivity;
