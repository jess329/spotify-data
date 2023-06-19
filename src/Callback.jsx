import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { parseHash } from 'spotify-web-api-js';
import { spotifyApi } from './spotify';

const Callback = () => {
  // const location = useLocation();
  // if(window.location.search) console.log(window.location.search);

  

  return (
    <div>
      <h1>Callback</h1>
    </div>
  );
};

export default Callback;
