import React, { useState, useEffect} from "react";




const SearchResults = ({results, setAddTracks}) => {
    const [unique, setUnique] = useState([]); //to add the chosen items

    async function setTracks (e) {
        try{
        if (!e.target.id) { //if the current div does not have ID it will choose the id of parent element (because only the parent div has id and the p element not)
            const stringToNumber= Number(e.target.parentNode.id) //lets make the id from string to number
            const testing = await results.find(item => item.id === stringToNumber) //compare result items to the id we clicked to find same item from the results
           
           if (stringToNumber !== setAddTracks.id){
            setUnique((prevAddTracks) => [...prevAddTracks, testing]);
            //here we add the chosen and earlier chosen items to the unique variable
            
        }

        } else { //this is if we pressed the div that has the id (parent element)
            const stringToNumber= Number(e.target.id)
            const testing = await results.find(item => item.id === stringToNumber)
           setUnique((prevAddTracks) => [...prevAddTracks, testing])
        
            
        }} catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const getUniqueValues = (array) => ( //created a function that will take an array and remove dublicates
            [...new Set(array)]
            );
        const testingArray = getUniqueValues(unique) //remove dublicates from unique

            const array = Array.from(testingArray) //return the Set to array 
            
            setAddTracks(array) //add the array to setAddTracks which is prop that is created in app.js

    }, [unique, setAddTracks]) //fires only if these 2 has somethig changed

    
    console.log(unique)
    return (
        <>
        <div className="results">
        <div className="resultsDiv" onClick={setTracks}>{results.map(item => <li className={`artist ${item.id}`} key={item.id} id={item.id} ><p className="artistPar">{item.artist}</p> <p className="titlePar">{item.title}</p></li>)}</div>
        </div>
        </>
        
    )
}

export default SearchResults;