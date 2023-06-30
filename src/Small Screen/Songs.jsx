import React, {useState, useEffect} from 'react'
import { getUsersTopTracks } from '../GetUserData'
import "./content.css"

function Songs({token}) {
  const [topTracks, setTopTracks] = useState({})
  

  useEffect(() => {
    getUsersTopTracks(token, setTopTracks, "short_term")
  }, [])

  const changeSongs = () => {

  }

  return (
    <div className='music'>
        <h1>Your Songs</h1>
        <div className="songs-section">
              <div className="btn-container">
                <button className='btn switch' onClick={() => changeSongs()}><h2>Last 4 Weeks</h2> </button>  
                <button className='btn switch' onClick={() => changeSongs()}><h2>Last 6 Months</h2> </button>
                <button className='btn switch' onClick={() => changeSongs()}><h2>All Time</h2> </button>
              </div>
          {topTracks[0] ? 
            <div className="top-tracks">
              <div className="tracks">
                {topTracks.map((track) => {
                  return (
                    <div className="track" key={topTracks.indexOf(track)}>
                      <div className="song-info">
                        <h4>Song: {track.name}</h4>
                        <h4>Artist: {track.artists[0].name} </h4>
                      </div>
                      <img src={track.album.images[2].url} alt="" />
                    </div>
                  )
                })}  
              </div> 
            </div>
          : null}
        </div>

    </div>
  )
}

export default Songs