const { default: Image } = require("next/image");

const Backdrop = ({ backdropPath }) => (
  <div className="absolute inset-0">
    <Image
      fill
      src={`https://image.tmdb.org/t/p/original/${backdropPath}`}
      alt="Movie Backdrop"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70"></div>
  </div>
);
export default Backdrop;
