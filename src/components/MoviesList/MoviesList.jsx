import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const baseUrl = 'https://image.tmdb.org/t/p/w300/';

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
              src={`${baseUrl + movie.poster_path}`}
              alt="movie-poster"
            />
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
