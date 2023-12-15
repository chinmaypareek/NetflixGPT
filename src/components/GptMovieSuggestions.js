import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function GptMovieSuggestions() {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  console.log(movieNames);

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
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
