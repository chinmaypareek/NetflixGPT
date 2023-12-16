import { POSTER_CDN } from "../utils/constants";

function MovieCard({ posterPath }) {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img src={POSTER_CDN + posterPath} alt="Movie poster" />
    </div>
  );
}

export default MovieCard;
