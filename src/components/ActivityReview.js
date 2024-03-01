import React, {useState} from 'react';
import '../index.css';
import ActivityDetail from './ActivityDetails'
import Navbar from './NavBar';
import Categories from './Categories';
import sample_activities from '../data/activities.json';
import Footer from './Footer'

function ActivityReview(props) {
  return (
    
    <div>
      <Navbar />
      <Categories />
      <ActivityDetail activities={sample_activities}/>
      <Footer />
    </div>
  )
}

export default ActivityReview;
