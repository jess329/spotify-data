import React, { useState, useEffect } from 'react'
import { getUsersPlaylists } from './GetUserData'


function UserPlaylists(props) {
    const { token } = props
    const [playlists, setPlaylists] = useState({})

    useEffect(() => {
        getUsersPlaylists(token, setPlaylists)
    }, [])
    if(playlists) console.log(playlists);

  return (
    <div>
        <h2>Your Playlists</h2>
        <div className="playlists">
            {playlists[0] ?
            playlists.map((playlist) => {
                <div className="playlist">
                    <h3>{playlist.name}</h3>
                    <div className="imgholder">
                        <img src={playlist.images[0].url} alt="" />
                    </div>
                </div>
            }) 
            : null}

        </div>

    </div>
  )
}

export default UserPlaylists