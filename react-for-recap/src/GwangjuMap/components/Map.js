import { useEffect } from "react";

const { kakao } = window;

const Map = ({ lat, lng, data }) => {
  // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
  function makeOverListener(map, marker, infowindow) {
    return function () {
      infowindow.open(map, marker);
    };
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다
  function makeOutListener(infowindow) {
    return function () {
      infowindow.close();
    };
  }

  const targetLatLng = data.map((item) => [item.lat, item.lng]);
  const targetTitle = data.map((item) => item.tourDestNm);
  const positions = [];

  for (let i = 0; i < data.length; i++) {
    positions.push({
      content: `<div>${targetTitle[i]}</div>`,
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
      "https://w.namu.la/s/254294b86f5ce9b28d6b319b106860f192b9f26bedf411afca1ca7ed73e640ac3111131fe99ace36182921fecc96ea4eafa5df13ea74fa079397d1ad66b2a840782ac15d014670f73c151fbfd2d05504ca53db4c1800dbda5aa6d6d602587ce4";

    for (let i = 0; i < positions.length; i++) {
      const imgSize = new kakao.maps.Size(24, 35);

      const markerImage = new kakao.maps.MarkerImage(imageSrc, imgSize);

      const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });

      const infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content, // 인포윈도우에 표시할 내용
      });

      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
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
