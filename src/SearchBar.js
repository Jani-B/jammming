import React, { useState } from "react";


function SearchInput() {
    const [userInput, setUserInput] = useState('search');

    function handleUserInput(e) {
        setUserInput(e.target.value);
        document.getElementById('searchValue').innerHTML = userInput;
    }


    return (
        <>
        <input id="search" type="text" onChange={handleUserInput} value={userInput}></input>
        </>
    )
}


export default SearchInput