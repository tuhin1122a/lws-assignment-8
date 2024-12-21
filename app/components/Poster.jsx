const { default: Image } = require("next/image");

const Poster = ({ posterPath, title }) => (
  <div className="md:w-1/3">
    <Image
      width={500}
      height={500}
      src={`https://image.tmdb.org/t/p/original/${posterPath}`}
      alt={title}
      className="w-full rounded-lg shadow-lg"
    />
  </div>
);
export default Poster;
