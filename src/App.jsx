import React from 'react'
import { useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GeneralMusicStats from './GeneralMusicStats'
import { CLIENT_ID, REDIRECT_URI, RED_URI, SCOPES } from './config';
import axios from 'axios';
import { getUsersTopTracks, getUsersPlaylists, fetchLatestPlayedTracks } from './GetUserData';


function App() {
  const [token, setToken] = useState("")
  const [userData, setUserData] = useState({})
  const [userTopTracks, setUserTopTracks] = useState({})
  const [playlists, setPlaylists] = useState({})

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if(token) {
      window.location.hash = ""
      console.log(token);
    }

    if(!token && hash) {
      console.log(hash);
      token = hash.substring(1).split("&")
        .find((elem) => elem.startsWith("access_token")).split(("="))[1]

      console.log(token);
      window.localStorage.setItem("token", token)
      window.location.hash = ""
    }
    setToken(token)
    if(userTopTracks.total) console.log(userTopTracks);
  }, [])

  const fetchUserData = async () => {
    try {
      if(token) {
        const res = await axios.get('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        console.log(res.data);
        setUserData(res.data)
      }
    
    } catch (err) {
      console.log(err);
    }
  }

  const logout = () => {
    window.localStorage.removeItem("token")
  }


  return (
    <body>
      <h1>Spotify Data</h1>
      {!token ? <a href={`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=token`}>
        <button className='btn'>Authorize Spotify</button>
      </a> : <button className='btn' onClick={logout}>Logout</button> } 
      
      <button className='btn' onClick={fetchUserData}>Get User Data</button>
      <button className='btn' onClick={() => getUsersTopTracks(token, setUserTopTracks)}>Get Users Top Tracks</button>
      <button className='btn' onClick={() => getUsersPlaylists(token, setPlaylists)}>Get Users Playlists</button>
      <button className='btn' onClick={() => fetchLatestPlayedTracks(token)}>Get Recently Played</button>
      
    </body>
  )
}

export default App