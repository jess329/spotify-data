import axios from "axios";

export const fetchUserData = async (token, setUserData) => {
  try {
    if(token) {
      const res = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      console.log(res.data);
      setUserData(res.data)
    }
  
  } catch (err) {
    console.log(err);
  }
}

export const getUsersTopTracks = async (token, setTracks, time_range) => {
    try {
        const res = await axios.get(`https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=${time_range}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
      // Handle the response data here
      console.log(res.data);
      setTracks(res.data.items)
    } catch (err) {
      console.log(err);
    }
  }

export const getUsersPlaylists = async (token, setPlaylists) => {
    try {
          const res = await axios.get('https://api.spotify.com/v1/me/playlists', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          
        // Handle the response data here
        // console.log(res.data);
        setPlaylists(res.data.items)
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
}

export const fetchLatestPlayedTracks = async (token) => {
    try {
      const res = await axios.get('https://api.spotify.com/v1/me/player/recently-played', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      // Extract the playlists from the recently played tracks
      console.log(res.data);
      const latestTracks = res.data.items.map(item => item.track);
  
      console.log(latestTracks);
    } catch (error) {
      // Handle any errors here
      console.error(error);
    }
  };

  const fetchTopPlayedArtists = async () => {
    try {
      const response = await axios.get('https://api.spotify.com/v1/me/top/artists', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
  
      // Extract the artist information from the response
      const artists = response.data.items;
  
      // Handle the artists here
      console.log(artists);
    } catch (error) {
      // Handle any errors here
      console.error(error);
    }
  };

  const fetchTopPodcasts = async (token) => {
    try {
      const response = await axios.get('https://api.spotify.com/v1/me/shows', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      const topPodcasts = response.data.items;
      // Process the fetched top podcasts as needed
      console.log(topPodcasts);
    } catch (error) {
      // Handle error
      console.error('Error fetching top podcasts:', error);
    }
  };
  
  const fetchAudiobooks = async (token) => {  
    try {
      const response = await axios.get('https://api.spotify.com/v1/me/tracks', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      const savedTracks = response.data.items.filter(
        item => item.track.type === 'audiobook'
      );
      // Process the fetched audiobooks as needed
      console.log(savedTracks);
    } catch (error) {
      // Handle error
      console.error('Error fetching audiobooks:', error);
    }
  };

  
  

  