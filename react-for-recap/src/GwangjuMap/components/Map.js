import { useEffect } from "react";

const { kakao } = window;

const Map = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 7,
    };

    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div
      id="map"
      style={{ width: "500px", height: "400px", borderRadius: "30px" }}
    ></div>
  );
};

export default Map;
