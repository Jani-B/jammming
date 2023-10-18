import muckSpotify from './Spotify';


const trackList = () => {
    const SpotifyArtistArray = [];
    const SpotifyTitleArray = [];
    for (let i=0; i < muckSpotify.songs.length; i++){
        SpotifyArtistArray.push(muckSpotify.songs[i].artist);
        SpotifyTitleArray.push(muckSpotify.songs[i].title);
       
    }

       return (
        <div>

            {
                Object.keys(muckSpotify.songs).map((propKey) => {
                    return ( 
                        <>
                    <h2 key={propKey} class={propKey}>{muckSpotify.songs[propKey].artist}</h2>
                    <p key={"p" + propKey}>{muckSpotify.songs[propKey].title}</p>
                    </>
                    )
                    
                })
            }


       </div>
       );
    
}

export default trackList;