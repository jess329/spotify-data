import axios from "axios";

export const getUsersTopTracks = async (token, setTracks) => {
    try {
        const res = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
      // Handle the response data here
      setTracks(res.data)
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
        console.log(res.data);
        setPlaylists(res.data)
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
  

  