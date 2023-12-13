import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList
          title={"Popular TV Series"}
          movies={movies.popularTVSeries}
        />
        <MovieList
          title={"Top Rated TV Series"}
          movies={movies.topRatedTVSeries}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
