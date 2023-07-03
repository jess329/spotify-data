import React, { useState, useEffect } from 'react'
import { getUsersOwnPlaylists, getUsersMostHeardPlaylists } from '../GetUserData'
import "./content.css"


function UserPlaylists(props) {
    const { token } = props
    const [ownPlaylists, setOwnPlaylists] = useState({})
    const [mostHeardPlaylists, setMostHeardPlaylists] = useState({})

    useEffect(() => {
        getUsersOwnPlaylists(token, setOwnPlaylists)
    }, [])
    // if(playlists) console.log(playlists);

  return (
    <div>
        <h1>Your Playlists</h1>
        <div className="playlists">
            {ownPlaylists[0] ?
            ownPlaylists.map((playlist) => {
                return (
                <div className="playlist">
                    <div className="playlist-info">
                        <h2>{playlist.name}</h2>
                        <p><i>{playlist.description}</i></p>
                        <h3>Tracks: {playlist.tracks.total} </h3>
                        {/* <p>Follower: {playlist.} </p> */}
                        <a href={playlist.external_urls.spotify} target='_blank'>Link</a>
                    </div>
                    <div className="imgholder-playlist">
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