import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import CreateForm from './components/CreateForm';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Indexhome from './components/Indexhome';
import CategoriesPage from './components/Categoriespage';
import CreateFormTest from './components/CreateFormTest'
import sample_activities from './data/activities.json';
import outdoorsSub from './data/outsideActsubcat.json';
import totaloutdoors from './data/totaloutsideActs.json';
import { MySignInScreen } from './components/SignInScreen.js';
import StartBuilding from './components/StartBuilding.js'; 
import CreateForm from './components/CreateForm.js'; 
import ItineraryFormPage2 from './components/ItineraryFormPage2.js'; 

import { AddActivity } from './components/AddActivity';
import { FinalItinerary } from './components/FinalFinalItinerary';

function App(props) {

  return (
 //<Indexhome />
// <AddActivity></AddActivity>
//<CreateFormTest />
//<MySignInScreen />
     <Router>
           <Routes>
               <Route path="/" element={<Indexhome activities={sample_activities} />} />
               <Route path="/categories/:categoryName" element={<CategoriesPage activities={sample_activities} tags={outdoorsSub}/>} />
              <Route path="/itinerary" element={<StartBuilding activity_name={'Museum of Pop Culture'} data={{activity_name: 'Museum of Pop Culture', img: "img/mpop.jpeg"}}></StartBuilding>}></Route>
              <Route path="/itinerary-form" element={<CreateForm></CreateForm>}></Route>
              <Route path="/itinerary-form-2nd-page" element={<ItineraryFormPage2 activity_name={'Museum of Pop Culture'} data={{activity_name: 'Museum of Pop Culture', img: "img/mpop.jpeg"}}></ItineraryFormPage2>}></Route>
           </Routes>
      </Router>



    
    // <Router>
    //   <div>

    //     {/* <AddActivity></AddActivity> */}
        // {/* <FinalItinerary></FinalItinerary> */}
    //     <Switch>
    //       <Route path="/" exact>
            
    //       </Route>
    //       <Route path="/categories">
            
    //       </Route>
    //       {/* Add routes for other components */}
    //     </Switch>


        
    //   </div>
    // </Router>
    
   )



}

export default App;
