export function getSingleMovie(movies) {
  if (!movies || movies.length === 0) {
    return null; // Return null if no movies are available
  }
  const randomIndex = Math.floor(Math.random() * movies.length);
  return movies[randomIndex];
}
