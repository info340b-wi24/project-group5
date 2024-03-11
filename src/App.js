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
//import totaloutdoors from './data/totaloutsideActs.json';
// import subcat from './data/subcat.json';
import { MySignInScreen } from './components/SignInScreen.js';

//import outdoorsSub from './data/outsideActsubcat.json';
import totaloutdoors from './data/totaloutsideActs.json';
//import subcat from './data/subcat.json';
//import { MySignInScreen } from './components/SignInScreen.js';
//import ItineraryFormPage2 from './components/ItineraryFormPage2.js'
import StartBuilding from './components/StartBuilding.js'; 
import ItineraryFormPage from './components/ItineraryFormPage.js';

import { AddActivity } from './components/AddActivity.js';
import { FinalItinerary } from './components/FinalFinalItinerary';

function App(props) {

  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<MySignInScreen></MySignInScreen>}></Route>
        <Route path="/add-activity" element={<AddActivity></AddActivity>}></Route>
        <Route path="/final-itin" element={<FinalItinerary></FinalItinerary>}></Route>
        <Route></Route>
     </Routes>
   </Router>


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
    
  
 //<Indexhome />
// <AddActivity></AddActivity>
//<CreateFormTest />
//<MySignInScreen />
    // <Router>
      //     <Routes>
       //        <Route path="/" element={<Indexhome activities={sample_activities} />} />
       //        <Route path="/categories/:categoryName" element={<CategoriesPage activities={sample_activities} tags={outdoorsSub}/>} />
       //       <Route path="/itinerary" element={<StartBuilding activity_name={'Museum of Pop Culture'} data={{activity_name: 'Museum of Pop Culture', img: "img/mpop.jpeg"}}></StartBuilding>}></Route>
        //      <Route path="/itinerary-form" element={<CreateForm></CreateForm>}></Route>
        //      <Route path="/itinerary-form-2nd-page" element={<ItineraryFormPage2 activity_name={'Museum of Pop Culture'} data={{activity_name: 'Museum of Pop Culture', img: "img/mpop.jpeg"}}></ItineraryFormPage2>}></Route>
      //     </Routes>
  //    </Router>



    
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
    
  



}



export default App;
