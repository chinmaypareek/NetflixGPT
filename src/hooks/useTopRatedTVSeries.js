import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedTVSeries } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedTVSeries = () => {
  //Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getTopRatedTVSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedTVSeries(json.results));
  };

  useEffect(() => {
    getTopRatedTVSeries();
  }, []);
};

export default useTopRatedTVSeries;
