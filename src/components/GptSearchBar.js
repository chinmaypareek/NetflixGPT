import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

function GptSearchBar() {
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSeachClick = async () => {
    //Make an API call to GPT API and get the movie results
    const gptQuery =
      "Act as a Movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me name of 5 movies, comma separeted like the example results given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    //Avengers: Endgame, Mad Max: Fury Road, Mission: Impossible - Fallout, The Dark Knight, John Wick
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    // For each movie I will search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise * 5]
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-full md:w-1/2 grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSeachClick}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-md"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
