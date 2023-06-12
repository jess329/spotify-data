import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const url = "https://api.spotify.com"
const token = 'BQB3WYfGsk1i-vyRpgdG9wcNQ4iLtcHQeHYD6K4WJvjpm7Bd0grIZ9iOoOUbMrMf8LJ_ZjqDtte-Fah1Dewtq_ETrG7bLL36CePPNsFTmUjbsC6eRJs4_lfAAmrKjSAZTuBbkZU8Mgpk5nT1GXhlBqjvxcPv8em_GSOCJTwVKGuMDl768s2mzWtyoJ3a6TdPWZgawyFVmA24zzsgP9GtFSrbEN5eTcC1Tv9uDCDt_32T2ZeQFcWr_b0tgh9zPAyl51W2Xh46YriLkNdtt7ZGA0xR'
const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
  method: "GET",
  body:JSON.stringify(body)
}

function App() {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    try {
      const fetchSpotifyData = async () => {
        const resp = await fetch(url, options)
        const data = await resp.json()
        console.log(data);
      }
      fetchSpotifyData()
    } catch (error) {
      console.log(error);
    }
    
  }, [])

  return (
    <div>
      <h1>Spotify API Project</h1>
    </div>
  )
}

export default App