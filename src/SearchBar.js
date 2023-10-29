import React, { useState, useEffect } from "react";
import muSpotify from './SpotifyTest'


function SearchInput({setResults}) {
    const [userInput, setUserInput] = useState('');



    function handleUserInput(e) {
        setUserInput(e.target.value);
    };

    //Here we check both title and artist from the muSpotify
    useEffect(() => {
        if (!userInput){
            setResults(muSpotify);
        } else {
            const results = muSpotify.filter(item => {
                return (
                    item
                    .title
                    .toLowerCase()
                    .includes(userInput.toLowerCase()) || 
                    item
                    .artist
                    .toLowerCase()
                    .includes(userInput.toLowerCase())
                    )}
                );
            setResults(results);       
        }
}, [userInput, setResults] );

    

    return (
        <>
        <div className="inputDiv">
        <input id="search" type="text" onChange={handleUserInput} value={userInput}></input>
        </div>

        </>
    )
}


export default SearchInput