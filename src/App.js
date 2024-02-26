import React from 'react';
import Navbar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import boxList from './components/FlexBoxes';
import './index.css';

function App({activities}) {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Categories />
      <section className="trending-spots">
           <h2>Trending Spots in Seattle</h2>
      </section>

      <section class="trend-container">
        <div class="card-container">
            <div class="container">
                <div class="row">
                <boxList activities={activities} />

                </div>
                </div>
                </div>
                </section>
      
    </div>
  );
}

export default App;
