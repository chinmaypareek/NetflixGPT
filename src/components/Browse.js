import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularTVSeries from "../hooks/usePopularTVSeries";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTopRatedTVSeries from "../hooks/useTopRatedTVSeries";
import useUpComingMovies from "../hooks/useUpComingMovies";
import Header from "./Header";
import MainContainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  usePopularTVSeries();
  useTopRatedTVSeries();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
      Main Container
        -Video background
        -Video Title
      Secondary container
        -MovieList * N
          Cards * N
      */}
    </div>
  );
};

export default Browse;
