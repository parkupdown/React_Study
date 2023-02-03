const makeDistrictLatLng = (district) => {
  if (district === "남구") {
    return [35.1330375, 126.90219];
  }
  if (district === "북구") {
    return [35.1742068, 126.912188];
  }
  if (district === "동구") {
    return [35.1459525, 126.9231488];
  }
  if (district === "서구") {
    return [35.1330375, 126.90219];
  }
  if (district === "광산구") {
    return [35.1395924, 126.7937701];
  }
};

export default makeDistrictLatLng;
