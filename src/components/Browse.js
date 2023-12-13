import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularTVSeries from "../hooks/usePopularTVSeries";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTopRatedTVSeries from "../hooks/useTopRatedTVSeries";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  usePopularTVSeries();
  useTopRatedTVSeries();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
