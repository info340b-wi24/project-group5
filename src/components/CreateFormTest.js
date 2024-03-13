import React, { useState } from 'react';
import { ref, push} from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { db } from '../index.js';
import Footer from './Footer.js';
import NavBar from './NavBar.js';
import { Link, Navigate } from 'react-router-dom';

const CreateFormTest = () => {
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
      return <Navigate to="/sign-in" />;
    }
    const userId = user.uid;

    // Push data to Firebase Realtime Database
    push(ref(db, userId + "/itinerary/"), {
      name,
      dates,
      description,
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
      <NavBar />
      <div className="form-body">
        <div className="form-container">
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
            <Link to="/search-activity">
              <button className="start-building" type="submit">Start building</button>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateFormTest;

