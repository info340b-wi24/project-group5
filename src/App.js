import React from 'react';
import Navbar from './components/NavBar';
import SearchBar from './components/SearchBar';
import FlexBoxes from './components/FlexBoxes';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <FlexBoxes />
    </div>
  );
}

export default App;
