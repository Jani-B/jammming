import React, { useState } from 'react';
import './App.css';
import SearchInput from './SearchBar'
import SearchResults from './SearchResults'



function App() {
  const [result, setResult] = useState([]);
  

  return (
    <div className="App">
      <h1>Find Your Music!</h1>
        <SearchInput setResults={setResult} />
        <SearchResults results={result} />
      <div className="Playlist"></div>
      <div className="Track"></div>
      <div>
      <button className="SaveToSpotify">Save To Spotify</button>
      </div>
    </div>
  );
}

export default App;
