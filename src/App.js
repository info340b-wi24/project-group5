import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import CreateForm from './components/CreateForm';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Indexhome from './components/Indexhome';
import CategoriesPage from './components/Categoriespage';
import CreateFormTest from './components/CreateFormTest'
import sample_activities from './data/activities.json';
import subcat from './data/subcat.json';
import { MySignInScreen } from './components/SignInScreen.js';

import { AddActivity } from './components/AddActivity';
import { FinalItinerary } from './components/FinalFinalItinerary';

function App(props) {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Indexhome activities={sample_activities} />} />
        <Route path="/categories/:categoryName" element={<CategoriesPage activities={sample_activities} tags={subcat}/>} />
      </Routes>
    </Router>

  );
// <Indexhome />
//<CreateFormTest />
//<MySignInScreen />



}

export default App;
