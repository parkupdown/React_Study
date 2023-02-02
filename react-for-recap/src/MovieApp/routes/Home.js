import CallMovieApi from "../CallApi";
import Movie from "../components/Movie";

const Home = () => {
  const [movieData, loading] = CallMovieApi();

  return <Movie movieData={movieData} loading={loading} />;
};

export default Home;
