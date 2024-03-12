import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import Indexhome from './components/Indexhome';
import CategoriesPage from './components/Categoriespage';
import CreateFormTest from './components/CreateFormTest'
import sample_activities from './data/activities.json';
<<<<<<< HEAD
import { MySignInScreen } from './components/SignInScreen.js';

import subcat from './data/subcat.json';
//import { MySignInScreen } from './components/SignInScreen.js';
//import ItineraryFormPage2 from './components/ItineraryFormPage2.js'
=======
// import outdoorsSub from './data/outsideActsubcat.json';
//import totaloutdoors from './data/totaloutsideActs.json';
// import subcat from './data/subcat.json';
import SignInScreen from './components/SignInScreen.js';

//import outdoorsSub from './data/outsideActsubcat.json';
import totaloutdoors from './data/totaloutsideActs.json';
//import subcat from './data/subcat.json';
>>>>>>> 0aa0472a4d50cbe4922371879726b6d45c57cff1
import StartBuilding from './components/StartBuilding.js'; 
import ItineraryFormPage from './components/ItineraryFormPage.js';
import ActivityReview from './components/ActivityReview.js';

import { AddActivity } from './components/AddActivity.js';
import { FinalItinerary } from './components/FinalFinalItinerary';

function App(props) {

  return (
<<<<<<< HEAD
    //michelle's 
    <Router>
    <Routes>
        <Route path="/" element={<Indexhome activities={sample_activities} />} />
        <Route path="/activities/:activity_name" element={<ActivityReview activities={sample_activities} />} />
        <Route path="/categories/:categoryName" element={<CategoriesPage activities={sample_activities} tags={subcat}/>} />
       <Route path="/itinerary" element={<StartBuilding activity_name={'Museum of Pop Culture'} data={{activity_name: 'Museum of Pop Culture', img: "img/mpop.jpeg"}}></StartBuilding>}></Route>
      </Routes>
</Router>


  //   <Router>
  //     <Routes>
  //       <Route path="/signin" element={<MySignInScreen></MySignInScreen>}></Route>
  //       <Route path="/add-activity" element={<AddActivity></AddActivity>}></Route>
  //       <Route path="/final-itin" element={<FinalItinerary></FinalItinerary>}></Route>
  //       <Route></Route>
  //    </Routes>
  //  </Router>
=======

      <Routes>
        <Route path="/" element={<Indexhome activities={sample_activities} />} />
        <Route path="/signin" element={<SignInScreen></SignInScreen>}></Route>
        <Route path="/add-activity" element={<AddActivity></AddActivity>}></Route>
        <Route path="/final-itin" element={<FinalItinerary></FinalItinerary>}></Route>
        <Route path ="/itinerary-form" element={<CreateFormTest></CreateFormTest>}></Route>
        <Route path="/start-building" element={<StartBuilding></StartBuilding>}></Route>
     </Routes>
  
>>>>>>> 0aa0472a4d50cbe4922371879726b6d45c57cff1


  /*   
  
  Hannah's testing stuff 
  <div>
  <MySignInScreen />
  Create Itinerary Page:
  <CreateFormTest />
  Search for activities to add page:
  <ItineraryFormPage />
  </div>
  
  


  Rima's testing stuff 
  <Router>
      <Routes>
        <Route path="/signin" element={<MySignInScreen></MySignInScreen>}></Route>
        <Route path="/add-activity" element={<AddActivity></AddActivity>}></Route>
        <Route path="/final-itin" element={<FinalItinerary></FinalItinerary>}></Route>
        <Route></Route>
     </Routes>
   </Router>





   
  <Router>
      <Routes>
        <Route path="/" element={<Indexhome activities={sample_activities} />} />
        <Route path="/categories/:categoryName" element={<CategoriesPage activities={sample_activities} tags={subcat}/>} /> 
      </Routes>
    </Router>

   
    

    //<CreateFormTest></CreateFormTest>
    <Router>
      <Routes>
        <Route path="/signin" element={<MySignInScreen></MySignInScreen>}></Route>
        <Route path="/add-activity" element={<AddActivity></AddActivity>}></Route>
        <Route path="/final-itin" element={<FinalItinerary></FinalItinerary>}></Route>
        <Route></Route>
     </Routes>
   </Router>
    
  );

   // <Router>
     // <Routes>
      //  <Route path="/" element={<Indexhome activities={sample_activities} />} />
      //  <Route path="/categories/:categoryName" element={<CategoriesPage activities={sample_activities} tags={subcat}/>} />
     // </Routes>
  //  </Router>

//  );
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
     
  )
    
  




}



export default App;
