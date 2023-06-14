import React from 'react'
import { useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Callback from './Callback'
import GeneralMusicStats from './GeneralMusicStats'


function App() {

  return (
    <div>
      <h1>Spotify Data</h1>
      <Router>
        <Routes>
          <Route exact path="/callback" component={Callback} />
          <Route exact path="/dashboard" component={GeneralMusicStats} />
          {/* Add other routes */}
        </Routes>
      </Router>
    </div>
  )
}

export default App