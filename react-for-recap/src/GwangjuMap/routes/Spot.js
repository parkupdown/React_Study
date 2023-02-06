import { useLocation, useParams } from "react-router-dom";

const Spot = () => {
  const { spot } = useParams();
  const location = useLocation();
  console.log(spot);
  console.log(location.state);

  return (
    <div>
      디테일한 장소에 대한 설명이 추가 될 페이지 입니다.
      <h1>{spot}</h1>
    </div>
  );
};

export default Spot;
