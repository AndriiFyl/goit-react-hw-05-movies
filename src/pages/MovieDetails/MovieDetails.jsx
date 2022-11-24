import { useParams, Outlet, Link } from 'react-router-dom';
import { getMovieById } from 'services/api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { FiChevronsLeft } from 'react-icons/fi';

const baseUrl = 'https://image.tmdb.org/t/p/w500/';
const defaultPoster =
  'https://abrakadabra.fun/uploads/posts/2022-03/1647059759_1-abrakadabra-fun-p-kinolenta-raspechatat-1.png';

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
    <div className={css.Global_Wrapper}>
      <div className={css.Container_Movie}>
        <button className={css.Btn_Back} type="button" onClick={handleGoBack}>
          <FiChevronsLeft size={100} />
        </button>
        <img
          className={css.Poster}
          src={movie.poster_path ? baseUrl + movie.poster_path : defaultPoster}
          alt={movie.title}
        />
        <div className={css.Wrapper_Movie_Info}>
          <h2 className={css.head_Movie}>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p className={css.Movie_description}>
            <span className={css.Accent_Header_description}>Overview:</span>{' '}
            {movie.overview ? (
              movie.overview
            ) : (
              <span className={css.Accent_Description}>Not Found</span>
            )}
          </p>
          <p className={css.Movie_description}>
            <span className={css.Accent_Header_description}>Rating:</span>{' '}
            {movie.vote_average === 0 ? (
              <span className={css.Accent_Description}>
                Not available rating
              </span>
            ) : (
              movie.vote_average.toFixed(1)
            )}
          </p>
          <p className={css.Movie_description}>
            <span className={css.Accent_Header_description}>Votes:</span>{' '}
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
      <Outlet />
    </div>
  );
};
