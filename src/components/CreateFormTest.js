import React from 'react';
import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../index.js';
// import Navbar from './NavBar.js';

const FormComponent = () => {
  const [name, setName] = useState('');
  const [dates, setDates] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Push data to Firebase Realtime Database
    push(ref(db, 'itineraries'), {
      name,
      dates,
      description
    }).then(() => {
      // Clear form fields after successful submission
      setName('');
      setDates('');
      setDescription('');
    }).catch((error) => {
      console.error('Error adding document: ', error);
    });
  };


  return (
  
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
  );
};

export default FormComponent;


