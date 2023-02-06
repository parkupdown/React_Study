import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const { kakao } = window;

const Map = ({ lat, lng, data }) => {
  const navigate = useNavigate();
  const { district } = useParams();

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

  function makeClickListener(markerTitle) {
    //클릭된 마커의 title을 가져오고싶다.
    navigate(`/${district}/${markerTitle}`, { state: data }); //Link로 수정해야 data를 넘겨줄수있다
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
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

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
      kakao.maps.event.addListener(marker, "click", (event) => {
        makeClickListener(marker.Gb);
      });
    }
  }, [lat, lng]);

  return (
    <div
      id="map"
      style={{
        width: "80vw",
        height: "60vh",
        borderRadius: "30px",
        margin: "0 auto",
      }}
    ></div>
  );
};

export default Map;
