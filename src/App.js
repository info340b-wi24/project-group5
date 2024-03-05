import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import CreateForm from './components/CreateForm';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Indexhome from './components/Indexhome';
import Categoriespage from './components/Categoriespage';

import sample_activities from './data/activities.json';
import outdoorsSub from './data/outsideActsubcat.json';
import totaloutdoors from './data/totaloutsideActs.json';

import { AddActivity } from './components/AddActivity';
import { FinalItinerary } from './components/FinalFinalItinerary';

function App(props) {

  return (


    <Router>
      <Routes>
        <Route path="/" element={<Indexhome activities={sample_activities} />} />
        <Route path="/outdoorActivities" element={<Categoriespage tags={outdoorsSub} activities={totaloutdoors} />} />
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
