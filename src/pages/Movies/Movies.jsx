import { FcClapperboard } from 'react-icons/fc';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/api';
import { Movieslist } from 'components/MoviesList/MoviesList';
import css from './Movies.module.css';
export const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const handleChange = event => {
    setQuery(event.target.value);
  };
  const hanleSumbit = event => {
    event.preventDefault();
    setSearchParams({ query });
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    getMoviesByQuery(query).then(setMovies);
  }, [searchParams]);
  return (
    <>
      <div className={css.Container_Form}>
        <form className={css.Form} onSubmit={hanleSumbit}>
          <input
            className={css.Input}
            onChange={handleChange}
            type="text"
            name="movie"
            value={query}
          ></input>
          <button className={css.Search_Btn}>
            <FcClapperboard size={22} color={'blueviolet'} />
          </button>
        </form>
      </div>
      <Movieslist movies={movies} />
    </>
  );
};
