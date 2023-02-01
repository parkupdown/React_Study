import { useEffect, useState } from "react";

const CallMovieApi = () => {
  const [movieData, setMovieData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year`
    )
      .then((result) => result.json())
      .then((jsonResult) => {
        setMovieData(jsonResult.data.movies);
        setLoading((current) => !current);
      });
  }, []);

  return [movieData, loading];
};

export default CallMovieApi;
