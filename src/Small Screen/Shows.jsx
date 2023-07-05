import React, { useEffect, useState } from 'react'
import { getTopPodcasts, getAudiobooks } from '../GetUserData'
import "./content.css"

function Shows({token}) {
  const [podcasts, setPodcasts] = useState()
  const [audiobooks, setAudiobooks] = useState()
  const [whichAudio, setWhichAudio] = useState("podcasts")

  useEffect(() => {
    getTopPodcasts(token, setPodcasts)
    getAudiobooks(token, setAudiobooks)
  }, [])

  const switchAudio = (audio) => {
    const audioButtons = Array.from(document.getElementsByClassName("btn top audio"))
    audioButtons.map((btn) => {
      if(btn.value === audio) {
        btn.classList.add("active")
      } else {
        btn.classList.remove("active")
      }
    })
    setWhichAudio(audio)
  }

  return (
    <div className='audio-section'>
      <div className="audio-header">
        <h1>Shows</h1>
        <div className="btn-container">
          <button className="btn top audio active" value="podcasts" onClick={() => switchAudio("podcasts")}> <h2>Podcasts</h2> </button>
          <button className="btn top audio" value="audiobooks" onClick={() => switchAudio("audiobooks")}> <h2>Audiobooks</h2></button>
        </div>
      </div>
      <div className="shows">
    	  {podcasts && whichAudio === "podcasts" ? <Podcasts podcasts={podcasts} />
        : podcasts ? <Audiobooks audiobooks={audiobooks} /> : null}
      </div>
    </div>
  )
}

export default Shows

function Podcasts({podcasts}) {
  const [fullText, setFullText] = useState(false)

  return (
    <div className="podcasts">
      {podcasts.map((podcast) => {
        return (
          <div className="podcast">
            <div className="show-info">
              <h2>{podcast.show.name}</h2>
              <p>Language: {podcast.show.languages[0]}</p>
              <p>{!fullText ? podcast.show.description.substring(0, 250) : podcast.show.description} {" "}
              {podcast.show.description.length >= 250 ? 
                <button className="btn read" onClick={() => setFullText(!fullText)}> {!fullText ? "...Show more" : "Show less"}</button>
              : null} </p>
              <h3><a href={podcast.show.external_urls.spotify} target='_blank'>Link</a></h3>
            </div>
            <div className="imgholder">
              <img src={podcast.show.images[1].url} alt={podcast.show.name} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Audiobooks({audiobooks}) {


  return (
    <div className="audiobooks">
      
    </div>
  )
}