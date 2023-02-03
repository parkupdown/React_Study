import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Map from "../components/Map";
import makeDistrictLatLng from "../utils/DistrictLatLng";

const District = () => {
  const { district } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [districtLtd, districtLng] = makeDistrictLatLng(district);

  const callApi = () => {
    fetch(
      `https://apis.data.go.kr/6290000/tourdestbaseinfo/gettourdestbaseinfo?serviceKey=ZHRtNHeVdq3RstoihtljiyUq1bREx70chuG19hWrdBrZr8cs%2Bzcc1KtztI15NVWUwNWX7qTJQFG8gcgdTEILUA%3D%3D&numOfRows=83&pageNo=1&type=json`
    )
      .then((response) => response.json())
      .then((info) => {
        const districtArr = info.TourDestBaseInfo.filter((item, index) => {
          if (
            item.addrRoad.match(district) !== null ||
            item.addrJibun.match(district) !== null
          ) {
            return item;
          }
        });
        setData(districtArr);
        setLoading(false);
        console.log(data);
      });
  };
  useEffect(() => callApi(), []);

  return (
    <div>
      <h1>{district} 관광지🧃</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Map lat={districtLtd} lng={districtLng} data={data} />
          <hr />
          {data.map((item) => (
            <div key={item.id}>
              <li>{item.tourDestNm}</li>
              <p>
                도로명 주소 :{item.addrRoad} 지번 주소 : {item.addrJibun}
              </p>
              <span>{item.tourDestIntro}</span>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default District;
