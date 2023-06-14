import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { parseHash } from 'spotify-web-api-js';
import { spotifyApi } from './spotify';

const Callback = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = parseHash(location.hash);
    const { access_token, expires_in } = hash;

    if (access_token) {
      // Set the access token and expiration time in the Spotify API wrapper
      spotifyApi.setAccessToken(access_token);
      spotifyApi.setAccessTokenExpirationTime(expires_in);

      // Redirect the user to the desired page in your app
      window.location.href = '/dashboard';
    }
  }, [location]);

  return null;
};

export default Callback;
