// for getRandom movie
export const getRandomMovie = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movies/random`,
      { next: { revalidate: 30 } }
    );
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.results.length);
    const randomMovie = data.results[randomIndex];
    return randomMovie;
  } catch (error) {
    return { error: true, message: "data fetch error" };
  }
};
// fetch data
export const getTrendingMovies = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movies/trending`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: true, message: "data fetch error" };
  }
};

//getch popular movies
export const getPopularMovies = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movies/popular`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: true, message: "data fetch error" };
  }
};

// fetch trending movies
export const getTopRatedMovies = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movies/top_rated`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: true, message: "data fetch error" };
  }
};
// fetch trending movies
export const getMovideDetails = async (movieId) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movie/${movieId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: true, message: "data fetch error" };
  }
};
// fetch SimilarMovies movies
export const getSimilarMovies = async (movieId) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movies/similar/${movieId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: true, message: "data fetch error" };
  }
};
