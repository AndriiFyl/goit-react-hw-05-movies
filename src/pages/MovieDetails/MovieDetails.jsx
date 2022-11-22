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
        <h2 className={css.head_Movie}>{movie.title}</h2>
        <button className={css.Btn_Back} type="button" onClick={handleGoBack}>
          <FiChevronsLeft size={100} />
        </button>
        <div className={css.Wrapper_Movie_Info}>
          <img
            className={css.Poster}
            src={`${baseUrl + movie.poster_path}`}
            alt={movie.title}
          />
          <p className={css.Movie_description}>Overview: {movie.overview}</p>
        </div>
      </div>
      <Link to="cast" state={location.state}>
        Cast
      </Link>
      <Link to="reviews" state={location.state}>
        Reviews
      </Link>

      <Outlet />
    </>
  );
};
