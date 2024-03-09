import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ActivitySearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic based on searchQuery
    // You can use APIs or other methods to fetch activities based on the searchQuery
  };

  const handleActivitySelect = (activityId) => {
    // Redirect to add activity page with selected activity ID
    history.push(`/add-activity/${activityId}`);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="search-activity">Search for Activities:</label>
        <input type="text" id="search-activity" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {/* Display search results or saved activities */}
      {/* Example: */}
      <div>
        {/* Assume savedActivities is an array of saved activity objects */}
        {savedActivities.map(activity => (
          <div key={activity.id} onClick={() => handleActivitySelect(activity.id)}>
            <h2>{activity.name}</h2>
            <p>{activity.description}</p>
            {/* Add more details or UI components as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitySearchPage;