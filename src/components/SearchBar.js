// SearchBar.js

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle changes in the search input
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    // Pass the search query back to the parent component (App.js)
    onSearch(query);
  };

  return (
    <section className="question">
      <h1>What Do You Want to Do Today?</h1>
      <input
        type="text"
        id="search-bar"
        placeholder="Find your Activities here"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </section>
  );
};

export default SearchBar;
