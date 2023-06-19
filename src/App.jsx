import React from 'react'
import { useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Callback from './Callback'
import GeneralMusicStats from './GeneralMusicStats'
import Login from './Login';
import { CLIENT_ID, REDIRECT_URI, SCOPES } from './config';


function App() {
  

  return (
    <div>
      <h1>Spotify Data</h1>
      <a href={`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`}>
        <button>Authorize Spotify</button>
      </a>
      <Router>
        <Routes>
          <Route exact path="/callback" component={Callback} />
          {/* Add other routes */}
        </Routes>
      </Router>
    </div>
  )
}

export default App