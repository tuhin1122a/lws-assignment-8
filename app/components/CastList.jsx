const { default: Image } = require("next/image");

const CastList = ({ cast }) => (
  <div className="mb-6">
    <h3 className="text-gray-400 mb-2">Cast</h3>
    <div className="flex flex-wrap gap-4">
      {cast.slice(0, 4).map(
        (
          actor // Display only the first 4 cast members
        ) => (
          <div key={actor.id} className="text-center">
            <Image
              width={100}
              height={100}
              src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
              alt={actor.name}
              className="w-24 h-24 rounded-full object-cover mb-2"
            />
            <p className="text-sm">{actor.name}</p>
          </div>
        )
      )}
    </div>
  </div>
);

export default CastList;
