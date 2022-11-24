import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const baseUrl = 'https://image.tmdb.org/t/p/w500/';
const defaultPoster =
  'https://abrakadabra.fun/uploads/posts/2022-03/1647059759_1-abrakadabra-fun-p-kinolenta-raspechatat-1.png';

export const Movieslist = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.List}>
      {movies.map(movie => (
        <li className={css.Item} key={movie.id}>
          <Link
            className={css.Wrapper_Movie}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            <img
              className={css.Poster}
              src={
                movie.poster_path ? baseUrl + movie.poster_path : defaultPoster
              }
              alt="movie-poster"
            />
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
