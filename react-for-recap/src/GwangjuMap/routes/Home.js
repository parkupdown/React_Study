import { Link } from "react-router-dom";
import styled from "../css/Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={styled.titleBox}>
        <h1>광주의 관광지를 소개합니다 !😃</h1>
      </div>
      <div className={styled.mainBox}>
        <Link style={{ textDecoration: "none" }} to="광산구">
          <div>광산구</div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="북구">
          <div>북구</div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="동구">
          <div>동구</div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="서구">
          <div>서구</div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="남구">
          <div>남구</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
