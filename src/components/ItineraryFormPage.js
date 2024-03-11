import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import activitiesData from '../data/activities.json';

const SearchActivity = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory(); // Initialize useHistory hook

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);

    // Filter activities based on search term
    const filteredActivities = activitiesData.filter(activity =>
      activity.activity_name.toLowerCase().includes(newSearchTerm)
    );
    setSearchResults(filteredActivities);
  };

  // Function to handle activity click
  const handleActivityClick = (selectedActivity) => {
    // Navigate to the add activity page and pass the selected activity
    history.push({
      pathname: '/add-activity',
      state: { activity: selectedActivity }
    });
  };

  return (
    <div>
      <div className='form-body'>
        <div className='form-container'> 
          <section class="add-place-label">
            {/* IT SHOULD DISPLAY THE ITINERARY NAME MADE IN CREATFORMTEST */}
            <h1>Add Activities To:</h1>  
            <h1>Itinerary Name</h1>
            <input
              type="text"
              placeholder="Search activities..."
              value={searchTerm}
              onChange={handleSearch}
            />
            {searchTerm && (
              <div className="row">
                {searchResults.map(activity => (
                  <div key={activity.activity_name} className="col-md-6 col-xl-3 mb-4">
                    <div className="card mb-8">
                      <div className="card">
                        <div className="row"> 
                          <div className="col-sm-auto col-xl-12">
                            <img src={activity.img} className="img-fluid" alt={activity.activity_name} />
                          </div>
                          <div className="col-sm"> 
                            <div className="card-content">
                              <h2>{activity.activity_name}</h2>
                              <p>Location: {activity.location}</p>
                              <p>Cost: ${activity.cost}</p>
                              <p>{activity.description}</p>
                              <button onClick={() => handleActivityClick(activity)} className="add-button">Add</button>
                            </div>
                          </div>
                        </div>
                      </div> 
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default SearchActivity;



