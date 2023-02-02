import { Link } from "react-router-dom";

const Movie = ({ movieData, loading }) => {
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <ul>
          {movieData.map((movie) => (
            <li key={movie.id}>
              <div>
                <Link to={`/movie/${movie.id}`}>
                  <h2>{movie.title}</h2>
                </Link>
                <img src={movie.medium_cover_image} />
                <h4>{movie.genres}</h4>
              </div>
              <p>{movie.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movie;
