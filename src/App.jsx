import React from 'react'
import { useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CLIENT_ID, REDIRECT_URI, RED_URI, SCOPES } from './config';
import axios from 'axios';
import Navbar from './Navbar';
import Profile from './Small Screen/Profile';
import UserPlaylists from './Small Screen/UserPlaylists';
import NonMusic from './Small Screen/NonMusic';
import Songs from './Small Screen/Songs';
import Artists from './Small Screen/Artists';




function App() {
  const [token, setToken] = useState("")
  const [content, setContent] = useState({
    index: 0,
    navbar: "bottom"
  })
  
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
  <Songs token={token} />,
  <Artists token={token} />, 
  <UserPlaylists token={token} />, 
  <NonMusic token={token} /> ]

  // const contentArrSide = [ <Profile token={token} />,
  // <Songs token={token} />,
  // <Artists token={token} />,
  // <UserPlaylists token={token} />, 
  // <NonMusic token={token} /> ]

  return (
    <body>

      <Navbar setContent={setContent} />

      <header>
        <div className="btn-container">
          {!token ? <a href={`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=token`}>
            <button className='btn'>Authorize Spotify</button>
          </a> : <button className='btn' onClick={logout}>Logout</button> } 
        </div>

      </header>

      <main>

        <div className="main-content">
          {content.navbar == "bottom" ? contentArr[content.index]
          : contentArr[content.index]}
        </div>
        
        
      </main>
      
    </body>
  )
}

export default App