import { useState } from "react";
import styled from "./Button.module.css";

const Button = ({ coinData, onClick }) => {
  const [coinIndex, setCoinindex] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",

        justifyContent: "space-around",
      }}
    >
      <div className={styled.coinBox}>
        {coinData.map((coin, index) => (
          <li id={index} key={coin.id}>
            <button
              onClick={(event) => setCoinindex(event.target.parentElement.id)}
              className={styled.coinBtn}
            >
              {coin.name}
            </button>
          </li>
        ))}
      </div>
      <div>
        <h1>{coinData[coinIndex].name}</h1>
        <h2>{coinData[coinIndex].quotes.USD.price} $!</h2>
        <h2>{coinData[coinIndex].rank} 등!</h2>
      </div>
    </div>
  );
};

export default Button;
