import axios from "axios";

export const getUsersTopTracks = async (token) => {
    try {
        const res = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
      // Handle the response data here
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

export const getUsersPlaylists = async (token) => {
    try {
          const res = await axios.get('https://api.spotify.com/v1/me/playlists', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          
        // Handle the response data here
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
}