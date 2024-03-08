// home page js

import React, {useState} from 'react';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './NavBar';
import SearchBar from './SearchBar';
import Footer from './Footer';
import Categories from './Categories';
import BoxList from './BoxList';


import '../index.css';

export default function Indexhome(props) {

  const [activities, setActivities] = useState(props.activities);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [selectedCategory, setSelectedCategory] = useState(null);
  console.log(selectedCategory);

  // Update activities based on search query
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Navbar />
      <SearchBar onSearch={handleSearch}/>
      <Categories activities={activities} setSelectedCategory={setSelectedCategory} />
      <section className="trending-spots">
           <h2>Trending Spots in Seattle</h2>
      </section>

      <section className="trend-container">
        <div className="card-container">
            <div className="container">
                <div className="row">
                <BoxList activities={activities} searchQuery={searchQuery} />

                </div>
                </div>
                </div>
                <Footer />  
                </section>   
 
    </div>
    

  );
}
