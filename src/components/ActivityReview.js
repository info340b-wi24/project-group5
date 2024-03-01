import React, {useState} from 'react';
import '../index.css';
import ActivityDetail from './ActivityDetails'
import Navbar from './NavBar';
import Categories from './Categories';
import sample_activities from '../data/activities.json';


function ActivityReview(props) {
  return (
    
    <div>
      <Navbar />
      <Categories />
      <ActivityDetail activities={sample_activities}/>
    </div>
  )
}

export default ActivityReview;
