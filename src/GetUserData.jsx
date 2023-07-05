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
        const res = await axios.get(`https://api.spotify.com/v1/me/top/tracks`, {
          headers: {
            Authorization: `Bearer ${token}`
          }, params: {
            time_range: time_range,
            limit: 20 // Specify the desired limit of tracks
          }
        });
        
      // Handle the response data here
      console.log(res.data);
      setTracks(res.data.items)
    } catch (err) {
      console.log(err);
    }
  }

export const getUsersOwnPlaylists = async (token, setPlaylists) => {
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

export const getUsersMostHeardPlaylists = async (token, setMostHeardPlaylists) => {
  const response = await axios.get(
    "https://api.spotify.com/v1/me/top/tracks",{
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
            type: "playlists",
            time_range: "medium_term",
            limit: 50,
        },
    })
  const data = response.data
  console.log(data);
}

export const getUsersRecentTracks = async (token, setTracks) => {
    try {
      const res = await axios.get('https://api.spotify.com/v1/me/player/recently-played', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      // Extract the playlists from the recently played tracks
      const latestTracks = res.data.items.map(item => item.track);
      console.log(latestTracks);
      setTracks(latestTracks)
    } catch (error) {
      // Handle any errors here
      console.error(error);
    }
  };

  export const getTopPlayedArtists = async (token, setArtists, timeRange) => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      // Extract the artist information from the response
      const artists = response.data.items;
  
      // Handle the artists here
      console.log(artists);
      setArtists(artists)
    } catch (error) {
      // Handle any errors here
      console.error(error);
    }
  };

  export const getTopPodcasts = async (token, setPodcasts) => {
    try {
      const response = await axios.get('https://api.spotify.com/v1/me/shows', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      const topPodcasts = response.data.items;
      // Process the fetched top podcasts as needed
      console.log(topPodcasts);
      setPodcasts(topPodcasts)
    } catch (error) {
      // Handle error
      console.error('Error fetching top podcasts:', error);
    }
  };
  
  export const getAudiobooks = async (token, setAudiobooks) => {  
    try {
      const response = await axios.get('https://api.spotify.com/v1/me/audiobooks', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      // const savedTracks = response.data.items.filter(
      //   item => item.track.type === 'audiobook'
      // );
      // Process the fetched audiobooks as needed
      console.log(response.data);
      setAudiobooks(response.data)
    } catch (error) {
      // Handle error
      console.error('Error fetching audiobooks:', error);
    }
  };

  
  

  