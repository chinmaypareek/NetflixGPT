import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularTVSeries } from "../utils/moviesSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const usePopularTVSeries = () => {
  //Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const popularTVSeries = useSelector((store) => store.movies.popularTVSeries);

  const getPopularTVSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularTVSeries(json.results));
  };

  useEffect(() => {
    !popularTVSeries && getPopularTVSeries();
  }, []);
};

export default usePopularTVSeries;
