import React, { useState, useEffect } from "react";
import muckSpotify from './Spotify';
import trackList from './Tracklist'
import SearchInput from './SearchBar'

const SearchResults = () => {
    const [searchResults, setSearchResults] = useState(trackList)
    const [input, setInput] = useState('test');

    return (
        <>
        <p id="searchValue"></p>
        <p>{searchResults}</p>
        </>
        
    )
}

export default SearchResults;