import React from "react";




const SearchResults = ({results}) => {
    
    return (
        <>
        <div className="results">
        <div>{results.map(item => <li className={`artist ${item.id}`} key={`artist ${item.id}`}><p className="artistPar">{item.artist}</p> <p className="titlePar">{item.title}</p></li>)}</div>
        </div>
        </>
        
    )
}

export default SearchResults;