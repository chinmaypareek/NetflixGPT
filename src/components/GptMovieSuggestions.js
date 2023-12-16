import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { useState } from "react";

function GptMovieSuggestions() {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  // const [isOpen, setIsOpen] = useState(true);

  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {/* <button
        onClick={handleClo
        className="bg-red-700 text-white m-2 p-2 text-lg w-20"
      >
        Close
      </button> */}
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
}

export default GptMovieSuggestions;
