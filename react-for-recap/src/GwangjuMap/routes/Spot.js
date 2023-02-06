import { useLocation, useParams } from "react-router-dom";

const Spot = () => {
  const { spot } = useParams();
  const { state } = useLocation();

  const spotData = state.filter((item) => item.tourDestNm === spot);
  console.log(spotData);

  return (
    <div>
      <h1>{spot}</h1>
      <hr />
      <h2>주소지 : {spotData[0].addrJibun}</h2>

      <p>{spotData[0].tourDestIntro}</p>
    </div>
  );
};

export default Spot;
