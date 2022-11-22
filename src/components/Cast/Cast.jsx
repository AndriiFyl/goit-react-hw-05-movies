// import { CardActionArea } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'services/api';

const baseUrl = 'https://image.tmdb.org/t/p/w200/';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getActors(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            {actor.name}
            <img src={`${baseUrl + actor.profile_path}`} alt="actor" />
          </li>
        ))}
      </ul>
    </div>
  );
};
