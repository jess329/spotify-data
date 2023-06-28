import React, { useState, useEffect } from 'react'
import { getUsersPlaylists } from '../GetUserData'
import "./content.css"


function UserPlaylists(props) {
    const { token } = props
    const [playlists, setPlaylists] = useState({})

    useEffect(() => {
        getUsersPlaylists(token, setPlaylists)
    }, [])
    // if(playlists) console.log(playlists);

  return (
    <div>
        <h2>Your Playlists</h2>
        <div className="playlists">
            {playlists[0] ?
            playlists.map((playlist) => {
                return (
                <div className="playlist">
                    <div className="playlist-info">
                        <h2>{playlist.name}</h2>
                        <p>{playlist.description}</p>
                        {/* <p>Follower: {playlist.} </p> */}
                        <a href={playlist.external_urls.spotify} target='_blank'>Link</a>
                    </div>
                    <div className="imgholder">
                        <img src={playlist.images[0].url} alt="Playlist Image" className='playlist-img' />
                    </div>
                </div>
                )
                
            }) 
            : null}

        </div>

    </div>
  )
}

export default UserPlaylists