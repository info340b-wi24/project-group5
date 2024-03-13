import React from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';
import ActivityDetail from './ActivityDetails';
import Navbar from './NavBar';
import Categories from './Categories';
import sample_activities from '../data/activities.json';
import Footer from './Footer';

function ActivityReview({activities}) {
 
  const { activity_name } = useParams();
  const decodedName = decodeURIComponent(activity_name);
  const activity = activities.find(a => a.activity_name === decodedName);

  
  const selectedActivity = sample_activities.find(activity => activity.activity_name === activity_name);

  console.log("Selected Activity:", selectedActivity);

  return (
    <div>
      <Navbar />
      <Categories />
      {selectedActivity && <ActivityDetail activity={selectedActivity} />}
      <Footer />
    </div>
  );
};

export default ActivityReview;
