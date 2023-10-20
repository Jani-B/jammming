import './App.css';
import trackList from './Tracklist';
import SearchInput from './SearchBar'
import SearchResults from './SearchResults'

function App() {
  return (
    <div className="App">
      <h1>Find Your Music!</h1>
    
      <div className="SearchBar">
      {SearchInput()}
      </div>
      
      <div className="SearchResults">{SearchResults()}</div>
      <div className="TrackList"><h3>{trackList()}</h3></div>
      <div className="Playlist"></div>
      <div className="Track"></div>
      <button className="SaveToSpotify">Save To Spotify</button>

    </div>
  );
}

export default App;
