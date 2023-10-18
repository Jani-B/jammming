import './App.css';
import trackList from './Tracklist';

function App() {
  return (
    <div className="App">
      <h1>Title of the page</h1>
    
      <div className="SearchBar">
      <button className="Search">Search</button>
      
      </div>
      
      <div className="SearchResults"></div>
      <div className="TrackList"><h3>{trackList()}</h3></div>
      <div className="Playlist"></div>
      <div className="Track"></div>
      <button className="SaveToSpotify">Save To Spotify</button>

    </div>
  );
}

export default App;
