import { useEffect } from "react";

const { kakao } = window;

const Map = ({ lat, lng }) => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 7,
    };

    const map = new kakao.maps.Map(container, options);
    map.setMinLevel(7);
    map.setMaxLevel(8);
  }, [lat, lng]);

  return (
    <div
      id="map"
      style={{ width: "600px", height: "400px", borderRadius: "30px" }}
    ></div>
  );
};

export default Map;
