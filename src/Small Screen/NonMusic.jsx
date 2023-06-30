import React, { useState } from 'react'

function NonMusic(props) {
  const { token } = props
  const [nonMusicData, setNonMusicData] = useState({})

  return (
    <div>
        <h2>Audiobooks/Podcasts</h2>
    </div>
  )
}

export default NonMusic