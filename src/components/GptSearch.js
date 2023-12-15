import { BANNER } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

function GptSearch() {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BANNER} alt="Netflix banner" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch;
