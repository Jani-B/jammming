import React, { useState} from 'react';
import './App.css';
import SearchInput from './SearchBar'
import SearchResults from './SearchResults'
import Tracks from './Track'



function App() {
  const [result, setResult] = useState([]);
  const [addTracks, setAddTracks] = useState([])

  console.log(addTracks)

  return (
    <div className="App">
      <h1>Find Your Music!</h1>
        <SearchInput setResults={setResult} />
        <SearchResults results={result} setAddTracks={setAddTracks}/>
        <Tracks addTracks={addTracks} removeTracks={setAddTracks} />
      <div>
      
      </div>
    </div>
  );
}

export default App;
