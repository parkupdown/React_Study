import { useEffect } from "react";

const { kakao } = window;

const Map = ({ lat, lng, data }) => {
  const targetLatLng = data.map((item) => [item.lat, item.lng]);
  const targetTitle = data.map((item) => item.tourDestNm);

  const positions = [];
  for (let i = 0; i < data.length; i++) {
    positions.push({
      title: targetTitle[i],
      latlng: new kakao.maps.LatLng(targetLatLng[i][0], targetLatLng[i][1]),
    });
  }

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 7,
    };

    const map = new kakao.maps.Map(container, options);
    map.setMinLevel(8);
    map.setMaxLevel(8);

    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (let i = 0; i < positions.length; i++) {
      const imgSize = new kakao.maps.Size(24, 35);

      const markerImage = new kakao.maps.MarkerImage(imageSrc, imgSize);

      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
    }
  }, [lat, lng]);

  return (
    <div
      id="map"
      style={{ width: "1000px", height: "400px", borderRadius: "30px" }}
    ></div>
  );
};

export default Map;
