import React from 'react'
import { useState, useEffect } from 'react'
import { getUsersTopTracks } from './GetUserData'

function UserMusic(props) {
    const { token } = props
    const [topTracks, setTopTracks] = useState({})

    useEffect(() => {
        getUsersTopTracks(token, setTopTracks)
    }, [])

  return (
    <div className='music'>
        <h2>Your Music</h2>
        <div className="songs-section">
          {topTracks[0] ? 
            <div className="top-tracks">
              <h2>Your Top Tracks</h2>
              <div className="tracks">
                {topTracks.map((track) => {
                  return (
                    <div className="track">
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

export default UserMusic