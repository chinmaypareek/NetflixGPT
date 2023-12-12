import { POSTER_CDN } from "../utils/constants";

function MovieCard({ posterPath }) {
  return (
    <div className="w-48 pr-4">
      <img src={POSTER_CDN + posterPath} alt="Movie poster" />
    </div>
  );
}

export default MovieCard;