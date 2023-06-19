import React from 'react'
import { useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GeneralMusicStats from './GeneralMusicStats'
import { CLIENT_ID, REDIRECT_URI, SCOPES } from './config';
import axios from 'axios';
import { getUsersTopTracks, getUsersPlaylists } from './GetUserData';


function App() {
  const [token, setToken] = useState("")
  const [userData, setUserData] = useState({})
  const [userTopTracks, setUserTopTracks] = useState({})

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if(token) {
      setToken(token)
      window.location.hash = ""
    }

    if(!token && hash) {
      console.log(hash);
      token = hash.substring(1).split("&")
        .find((elem) => elem.startsWith("access_token")).split(("="))[1]

      console.log(token);
      setToken(token)
      window.localStorage.setItem("token", token)
      window.location.hash = ""
    }
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

  // const getUsersTopTracks = async () => {
  //   try {
  //     if(token) {
  //       const res = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         }
  //       });
        
  //     // Handle the response data here
  //     console.log(res.data);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }


  return (
    <div>
      <h1>Spotify Data</h1>
      {!token ? <a href={`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=token`}>
        <button>Authorize Spotify</button>
      </a> : null}
      
      <button onClick={fetchUserData}>Get User Data</button>
      <button onClick={() => getUsersTopTracks(token)}>Get Users Top Tracks</button>
      <button onClick={() => getUsersPlaylists(token)}>Get Users Playlists</button>
      
    </div>
  )
}

export default App