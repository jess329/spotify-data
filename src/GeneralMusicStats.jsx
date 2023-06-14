import React, { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'


function GeneralMusicStats() {
const [playlist, setPlaylist] = useState([])

const spotifyApi = new SpotifyWebApi()
const playlistId = "37i9dQZF1DX0XUsuxWHRQd"
console.log(spotifyApi);

useEffect(() => {
spotifyApi.getPlaylist(playlistId)
    .then((response) => {
        const playlist = response;
        console.log(playlist);
      })
      .catch((error) => {
        console.error('Error fetching playlist:', error);
        console.log(error.response);
      })
}, [])

  return (
    <div>
        <h1>Global Music Stats</h1>
    </div>
  )
}

export default GeneralMusicStats