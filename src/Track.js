import {useState, useEffect} from "react";

function Tracks({addTracks, removeTracks}) {
    const [trackRemove, setTrackRemove] = useState ([]);

    
    function removeTrack (e) {
        if (!e.target.id) { //if the current div does not have ID it will choose the id of parent element (because only the parent div has id and the p element not)
            const stringToNumber= Number(e.target.parentNode.id) //lets make the id from string to number
            const testing = addTracks.find(item => item.id === stringToNumber) 
    
            setTrackRemove(testing);
        }else { //this is if we pressed the div that has the id (parent element)
            const stringToNumber= Number(e.target.id)
            const testing = addTracks.find(item => item.id === stringToNumber)
        
            setTrackRemove(testing);
        }
        }

        useEffect(() => {
            removeTracks((prevAddTracks) => prevAddTracks.filter((currentTrack) => currentTrack !== trackRemove))
        }, [trackRemove, removeTracks])
        
    if(addTracks){
 
    return (
        <>
        <div className="tracks" onClick={removeTrack}>
            <input className="tracklistName"></input>
           <div className="tracksDiv">{addTracks.map(item => <li className={`chosen artist ${item.id}`} key={`choose ${item.id}`} id={item.id}><h2>{item.artist}</h2><p>{item.title}</p></li>)}</div>
            <button className="SaveToSpotify">Save To Spotify</button>
        </div>
        </>
    )
}

}

export default Tracks;