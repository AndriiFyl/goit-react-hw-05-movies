// import { CardActionArea } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'services/api';
import css from './Cast.module.css';

const baseUrl = 'https://image.tmdb.org/t/p/w200/';
const other =
  'https://static8.depositphotos.com/1252474/997/i/200/depositphotos_9978983-stock-photo-grunge-film-background-with-space.jpg';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getActors(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      <ul className={css.Container_Actors}>
        {cast.map(actor => (
          <li className={css.Actor} key={actor.id}>
            <img
              className={css.Img}
              src={
                actor.profile_path !== null
                  ? baseUrl + actor.profile_path
                  : other
              }
              alt="actor"
            />
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
