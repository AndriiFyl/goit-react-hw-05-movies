// import { CardActionArea } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'services/api';
import css from './Cast.module.css';

const baseUrl = 'https://image.tmdb.org/t/p/w200/';
const other =
  'https://abrakadabra.fun/uploads/posts/2022-03/1647059759_1-abrakadabra-fun-p-kinolenta-raspechatat-1.png';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getActors(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      <ul className={css.Container_Actors}>
        {cast.length > 0 ? (
          cast.map(actor => (
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
          ))
        ) : (
          <span className={css.Notification_Cast}>Cast not available...</span>
        )}
      </ul>
    </div>
  );
};
