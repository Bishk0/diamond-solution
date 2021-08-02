const API_URL = 'https://api.themoviedb.org/3/'
const API_KEY = 'api_key=66568aed5bb1659219c997907013c53b';

export const getPopularMovies = async() => {
  const response = await fetch(`${API_URL}movie/popular?${API_KEY}`);
  const result = await response.json();

  return result;
};

export const getMovieById = async(id) => {
  const response = await fetch(`${API_URL}movie/${id}?${API_KEY}`);
  const result = await response.json();

  return result;
};

export const searchMovies = async(query) => {
  const response = await fetch(`${API_URL}search/movie?${API_KEY}&query=${query}`);
  const result = await response.json();

  return result;
}

// &language=en-US&query=${query}&page=1&include_adult=false&840