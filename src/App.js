import React, {useState} from 'react';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Navbar from './components/NavBar';
// import SearchBar from './components/SearchBar';
// import Categories from './components/Categories';
 import BoxList from './components/BoxList';
// import CreateForm from './components/CreateForm';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Indexhome from './components/Indexhome';
import Categoriespage from './components/Categoriespage';

import sample_activities from './data/activities.json';
import outdoorsSub from './data/outsideActsubcat.json';
import totaloutdoors from './data/totaloutsideActs.json';
// import waterfront from './data/waterfront.json';
// import kayaking from './data/kayaking.json';
// import bike from './data/bike.json';


import { AddActivity } from './components/AddActivity';
import { FinalItinerary } from './components/FinalFinalItinerary';

function App(props) {

  return (
    
    <div>
       <Categoriespage tags={outdoorsSub} activities={totaloutdoors}/>
       {/* <AddActivity></AddActivity> */}
       {/* <FinalItinerary></FinalItinerary> */}
       {/* { <Indexhome activities={sample_activities} /> } */}

      

        
    </div>
  )



}

export default App;
