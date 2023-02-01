import CallMovieApi from "./CallApi";

function App() {
  const [movieData, loading] = CallMovieApi();
  console.log(movieData);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <ul>
          {movieData.map((movie) => (
            <li key={movie.id}>
              <div>
                <h3>{movie.title}</h3>
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
}

export default App;
