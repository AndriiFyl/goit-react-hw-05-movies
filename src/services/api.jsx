import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '33349cc6688203a2df4b881be77c5531';

// https://api.themoviedb.org/3/movie/550?api_key=33349cc6688203a2df4b881be77c5531  request

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/all/day?api_key=${KEY}`);
  console.log(data.results);
  return data.results;
};

export const getMovieById = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  return response.data;
};

export const getMoviesByQuery = async query => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return response.data.results;
};

export const getActors = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  console.log(response.data);
  return response.data.cast;
};

export const getReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );

  return response.data.results;
};
