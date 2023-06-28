import React from 'react'
import { useState, useEffect } from 'react'
import { fetchUserData } from '../GetUserData'

function Profile(props) {
    const { token } = props
    const [userData, setUserData] = useState({})

    useEffect(() => {
        fetchUserData(token, setUserData)
    }, [])

  return (
    <div className="user-section">
            {userData.country ? 
            <div className="user">
              <div className="user-data">
                <h2>Your Profile</h2>
                <h3>Name: {userData.display_name} </h3>
                <h3>Follower: {userData.followers.total} </h3>
                <a href={userData.external_urls.spotify} target='_blank'>View Profile</a>
              </div>
              <div className="imgholder">
                <img src={userData.images[0].url} alt="" className='profile-img'/>
              </div>
            </div>
            : null} 
    </div>
  )
}

export default Profile