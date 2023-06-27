import React from 'react'
import { useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CLIENT_ID, REDIRECT_URI, RED_URI, SCOPES } from './config';
import axios from 'axios';
import { getUsersTopTracks, getUsersPlaylists, fetchLatestPlayedTracks } from './GetUserData';
import Navbar from './Navbar';
import Profile from './Profile';
import UserMusic from './UserMusic';
import UserPlaylists from './UserPlaylists';
import NonMusic from './NonMusic';
import MostPlayed from './MostPlayed';
import RecentlyPlayed from './RecentlyPlayed';




function App() {
  const [token, setToken] = useState("")
  const [content, setContent] = useState(0)
  
  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")
    
    if(token) {
      window.location.hash = ""
      // console.log(token);
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
    // if(userTopTracks.total) console.log(userTopTracks);
  }, [])

  
  const logout = () => {
    window.localStorage.removeItem("token")
  }
  
  const contentArr = [ <Profile token={token}  />, 
  <UserMusic token={token} />, 
  <UserPlaylists token={token} />, 
  <NonMusic token={token} /> ]

  const contentArrSide = [ <Profile token={token} />,
  <MostPlayed token={token} />,
  <RecentlyPlayed token={token} />,
  <UserPlaylists token={token} />, 
  <NonMusic token={token} /> ]

  return (
    <body>

      <Navbar setContent={setContent} />

      <header>
        <h1>React Spotify App</h1>
        <div className="btn-container">
          {!token ? <a href={`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=token`}>
            <button className='btn'>Authorize Spotify</button>
          </a> : <button className='btn' onClick={logout}>Logout</button> } 
        </div>

      </header>

      <main>

        <div className="main-content">
          {content <= 3 ? contentArr[content]
          : contentArrSide[content - 4]}
        </div>
        
        
      </main>
      
    </body>
  )
}

export default App