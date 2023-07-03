import React, {useState, useEffect} from 'react'
import { getUsersTopTracks, getUsersRecentTracks } from '../GetUserData'
import "./content.css"

function Songs({token}) {
  const [tracks, setTracks] = useState({})
  const [topRecent, setTopRecent] = useState("top")
  const [timeRange, setTimeRange] = useState(0)

  useEffect(() => {
    topRecent == "top" ?
      getUsersTopTracks(token, setTracks, timeRange)
    : getUsersRecentTracks(token, setTracks)
  }, [timeRange, topRecent])

  const getSongs = () => {

  }

  const changeSongsCategory = (index, text) => {
    const categoryButtons = Array.from(document.getElementsByClassName("btn top"))
    categoryButtons.map((btn) => {
      if(categoryButtons.indexOf(btn) == index) {
        btn.classList.add("active")
      } else {
        btn.classList.remove("active")
      }
    })
    setTopRecent(text)
  }

  const changeSongs = (index) => {
    const timeRanges = ["short_term", "medium_term", "long_term"]
    const songButtons = document.getElementsByClassName("btn switch")
    const songButtonsArr = Array.from(songButtons)
    songButtonsArr.map((btn) => {
      if(songButtonsArr.indexOf(btn) == index) {
        btn.classList.add("active")
      } else {
        btn.classList.remove("active")
      }
    })
    setTimeRange(timeRanges[index])
  }

  return (
    <div className='music'>
        <div className="songs-section">
          <div className="songs-header">
            <h1>Songs</h1>
            <div className="btn-container first-row">
              <button className='btn top active' onClick={() => changeSongsCategory(0, "top")}><h2>Top</h2> </button>
              <button className='btn top' onClick={() => changeSongsCategory(1, "recent")}><h2>Recent</h2> </button>
            </div>
          </div>
          
                {topRecent === "top" ?
                  <div className="btn-container">
                    <button className='btn switch active' onClick={() => changeSongs(0)}><h2>Last 4 Weeks</h2> </button>  
                    <button className='btn switch' onClick={() => changeSongs(1)}><h2>Last 6 Months</h2> </button>
                    <button className='btn switch' onClick={() => changeSongs(2)}><h2>All Time</h2> </button>
                  </div>
                : null }
                
          {tracks[0] ? 
            <div className="top-tracks">
              <div className="tracks">
                {tracks.map((track, index) => {
                  return (
                    <div className="track" key={index}>
                      <div className="song-info">
                        <h4>Song: {track.name}</h4>
                        <h4>Artist: {track.artists[0].name} </h4>
                      </div>
                      <img src={track.album.images[2].url} alt="" />
                    </div>
                  )
                })}  
              </div> 
            </div>
          : null}
        </div>

    </div>
  )
}

export default Songs