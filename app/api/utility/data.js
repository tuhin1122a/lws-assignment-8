// for getRandom movie
export const getRandomMovie = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movies/random`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
};

// fetch data
export const getTrendingMovies = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movies/trending`
  );
  const data = await response.json();
  return data;
};

//getch popular movies
export const getPopularMovies = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movies/populars`
  );
  const data = await response.json();
  return data;
};

// fetch trending movies
export const getTopRatedMovies = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movies/top_rated`
  );
  const data = await response.json();
  return data;
};
// fetch trending movies
export const getMovideDetails = async (movieId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/${movieId}`
  );
  const data = await response.json();
  return data;
};
// fetch SimilarMovies movies
export const getSimilarMovies = async (movieId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movies/similar/${movieId}`
  );
  const data = await response.json();
  return data;
};
