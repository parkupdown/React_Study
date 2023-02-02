import { Link } from "react-router-dom";
import Map from "../components/Map";

const Home = () => {
  return (
    <div>
      <Link to="광산구">
        <div>광산구</div>
      </Link>
      <Link to="북구">
        <div>북구</div>
      </Link>
      <Link to="동구">
        <div>동구</div>
      </Link>
      <Link to="서구">
        <div>서구</div>
      </Link>
      <Link to="남구">
        <div>남구</div>
      </Link>
    </div>
  );
};

export default Home;
