import { getTrendingMovies } from 'services/api';
import { useEffect, useState } from 'react';
import { Movieslist } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);
  return (
    <div>
      <Movieslist movies={movies} />
    </div>
  );
};
