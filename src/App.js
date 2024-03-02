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
import outdoors from './data/outsideAct.json';
import { AddActivity } from './components/AddActivity';
import { FinalItinerary } from './components/FinalFinalItinerary';

function App(props) {

  return (
    
    <div>
       <Categoriespage tags={outdoors} activities={sample_activities}/>
       {/* <AddActivity></AddActivity> */}
       {/* <FinalItinerary></FinalItinerary> */}
       {/* { <Indexhome activities={sample_activities} /> } */}

      

        
    </div>
  )



}

export default App;
