import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Navigation } from './Navigation/Navigation';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.App_Container}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
