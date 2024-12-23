import WatchLaterMovieHeader from "../components/watch_later/WatchLaterMovieHeader";
import WatchLaterMovieLists from "../components/watch_later/WatchLaterMovieLists";

const WatchLaterPage = () => {
  return (
    <div className="container mx-auto pt-24 pb-8">
      <WatchLaterMovieHeader />
      <WatchLaterMovieLists />
    </div>
  );
};

export default WatchLaterPage;
