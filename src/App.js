import React, {useState} from 'react';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import BoxList from './components/BoxList';
import CreateForm from './components/CreateForm';
import './index.css';

function App(props) {

  const [activities, setActivities] = useState(props.activities);
  const [searchQuery, setSearchQuery] = useState('');

  // Update activities based on search query
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Navbar />
      <SearchBar onSearch={handleSearch}/>
      <Categories />
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
                </section>      
    </div>
    

  );
}

export default App;
