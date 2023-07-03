import React, {useEffect, useState} from 'react'
import {getTopPlayedArtists} from "../GetUserData"
import "./content.css"


function Artists({token}) {
  const [artists, setArtists] = useState()
  const [timeRange, setTimeRange] = useState()


  useEffect(() => {
    getTopPlayedArtists(token, setArtists, timeRange)
  }, [timeRange])

  const changeArtists = (index) => {
    const timeRanges = ["short_term", "medium_term", "long_term"]
    const artistButtons = Array.from(document.getElementsByClassName("btn switch"))
    artistButtons.map((btn) => {
      if(artistButtons.indexOf(btn) == index) {
        btn.classList.add("active")
      } else {
        btn.classList.remove("active")
      }
    })
    setTimeRange(timeRanges[index])
  }

  return (
    <div className='artists-section'>
      <div className="artists-header">
        <h1>Artists</h1>
        <div className="btn-container">
          <button className='btn switch active' onClick={() => changeArtists(0)}><h2>Last 4 Weeks</h2> </button>  
          <button className='btn switch' onClick={() => changeArtists(1)}><h2>Last 6 Months</h2> </button>
          <button className='btn switch' onClick={() => changeArtists(2)}><h2>All Time</h2> </button>
        </div>
      </div>


        {artists ? 
          <div className="top-artists">
           <div className="artists">
              {artists.map((artist, index) => {
                return (
                  <div className="artist">
                    <div className="imgholder">
                      <img src={artist.images[2].url} alt={artist.name} className='artist-img'/>
                    </div>
                    <h3>{artist.name}</h3>
                  </div>
                )
              })} 
            </div>
          </div>
        : null}
        
    </div>  
  )
}

export default Artists