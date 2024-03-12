import React from 'react';
import { useState } from 'react';
import { ref, push} from 'firebase/database';
import { getAuth } from 'firebase/auth'
import { db } from '../index.js';
import Footer from './Footer.js';
import NavBar from './NavBar.js';


const FormComponent = () => {
  const [name, setName] = useState('');
  const [dates, setDates] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get the current user's UID
    const auth = getAuth(); //access the "authenticator"
    const user = auth.currentUser;
    if (!user) {
      console.error('User not authenticated.');
      return;
    }
    const userId = user.uid;

    // Push data to Firebase Realtime Database
    const itineraryRef = ref(db, 'itineraries');
    push(itineraryRef, {
      userId,
      name,
      dates,
      description
    }).then(() => {
      // Clear form fields after successful submission
      setName('');
      setDates('');
      setDescription('');
    }).catch((error) => {
      console.error('Error adding itinerary: ', error);
    });
  };



  return (
    <div>
    <NavBar></NavBar>
    <div className="form-body">
      <div class="form-container">
      <form onSubmit={handleSubmit}>
        <div className="itinerary-title">
          <label htmlFor="itinerary-title">Itinerary Title</label>
          <input type="text" id="itinerary-title" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="dates">
          <label htmlFor="dates">Dates</label>
          <input type="text" id="dates" value={dates} onChange={(e) => setDates(e.target.value)} />
        </div>
        <div className="description">
          <label htmlFor="description">Description</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        {/* Need to route to the next page */}
        <button className="start-building" type="submit">Start building</button>
      </form>
    </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default FormComponent;


