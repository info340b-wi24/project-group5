import React, {useState} from 'react';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import CreateForm from './components/CreateForm';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Indexhome from './components/Indexhome';
import CategoriesPage from './components/Categoriespage';
import CreateFormTest from './components/CreateFormTest'
import sample_activities from './data/activities.json';
// import outdoorsSub from './data/outsideActsubcat.json';
import totaloutdoors from './data/totaloutsideActs.json';
// import subcat from './data/subcat.json';
import { MySignInScreen } from './components/SignInScreen.js';

import StartBuilding from './components/StartBuilding.js'; 
import ItineraryFormPage from './components/ItineraryFormPage.js';

import { AddActivity } from './components/AddActivity';
import { FinalItinerary } from './components/FinalFinalItinerary';

function App(props) {

  return (
    <div>
  <MySignInScreen />
  <CreateFormTest />
  </div>


  /*   <Router>
      <Routes>
        <Route path="/" element={<Indexhome activities={sample_activities} />} />
        <Route path="/categories/:categoryName" element={<CategoriesPage activities={sample_activities} tags={subcat}/>} /> 
      </Routes>
    </Router>

  );
// <Indexhome />
//<ItineraryFormPage2 />
// <MySignInScreen />
    // <Router>
           // <Routes>
             //   <Route path="/" element={<Indexhome activities={sample_activities} />} />
              //  <Route path="/categories/:categoryName" element={<CategoriesPage activities={sample_activities} tags={outdoorsSub}/>} />
          //  </Routes>
       // </Router>
  */
      // <Router>
     //  <Routes>
      //     <Route path="/" element={<Indexhome activities={sample_activities} />} />
       //    <Route path="/categories/:categoryName" element={<CategoriesPage activities={sample_activities} tags={outdoorsSub}/>} />
       //   <Route path="/itinerary" element={<StartBuilding activity_name={'Museum of Pop Culture'} data={{activity_name: 'Museum of Pop Culture', img: "img/mpop.jpeg"}}></StartBuilding>}></Route>
       //   <Route path="/itinerary-form" element={<CreateForm></CreateForm>}></Route>
       //   <Route path="/itinerary-form-2nd-page" element={<ItineraryFormPage2 activity_name={'Museum of Pop Culture'} data={{activity_name: 'Museum of Pop Culture', img: "img/mpop.jpeg"}}></ItineraryFormPage2>}></Route>
     // </Routes> 
    // </Router>
  )
}



export default App;
