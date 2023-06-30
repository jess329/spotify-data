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
              <div className="imgholder">
                <img src={userData.images[0].url} alt="" className='profile-img'/>
              </div>
              <div className="user-data">
                <h2 className='name'>{userData.display_name} </h2>
                <div className="user-data-row2">
                  <h3>{userData.country}</h3>
                  <h3>Followers: {userData.followers.total} </h3>
                  <h3 className='user-product'>{userData.product} </h3>
                </div>
                <a href={userData.external_urls.spotify} target='_blank'>View Profile</a>
              </div>
              
            </div>
            : null} 
    </div>
  )
}

export default Profile