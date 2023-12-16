import { BANNER } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

function GptSearch() {
  return (
    <>
      <div className="fixed -z-10 w-full">
        <img
          className="h-screen object-cover w-full"
          src={BANNER}
          alt="Netflix banner"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
}

export default GptSearch;
