import { useParams, Outlet, Link } from 'react-router-dom';
import { getMovieById } from 'services/api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { FiChevronsLeft } from 'react-icons/fi';

const baseUrl = 'https://image.tmdb.org/t/p/w500/';
export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  const handleGoBack = () => {
    navigate(location.state.from);
  };
  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <div className={css.Container_Movie}>
        <button className={css.Btn_Back} type="button" onClick={handleGoBack}>
          <FiChevronsLeft size={100} />
        </button>
        <img
          className={css.Poster}
          src={`${baseUrl + movie.poster_path}`}
          alt={movie.title}
        />
        <div className={css.Wrapper_Movie_Info}>
          <h2 className={css.head_Movie}>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p className={css.Movie_description}>
            <span className={css.Accent_description}>Overview:</span>{' '}
            {movie.overview}
          </p>
          <p className={css.Movie_description}>
            <span className={css.Accent_description}>Rating:</span>{' '}
            {movie.vote_average.toFixed(1)}{' '}
          </p>
          <p className={css.Movie_description}>
            <span className={css.Accent_description}>Votes:</span>{' '}
            {movie.vote_count}
          </p>

          <Link
            className={css.Additional_Info}
            to="cast"
            state={location.state}
          >
            Cast
          </Link>

          <Link
            className={css.Additional_Info}
            to="reviews"
            state={location.state}
          >
            Reviews
          </Link>
        </div>
      </div>

      {/* <Link className={css.Additional_Info} to="cast" state={location.state}>
        Cast
      </Link>

      <Link className={css.Additional_Info} to="reviews" state={location.state}>
        Reviews
      </Link> */}

      <Outlet />
    </>
  );
};
