import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams(); // :/ 하위의 변수를 리턴한다.
  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(true);

  const getApi = async () => {
    const result = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const jsonResult = await result.json();
    console.log(jsonResult);
    setLoading((current) => !current);
    setDetail(jsonResult.data.movie);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{detail.title}</h1>
          <img src={detail.medium_cover_image} />
          <p>{detail.description_full}</p>
        </div>
      )}
    </div>
  );
};
export default Detail;
