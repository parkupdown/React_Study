import Button from "./Button";
import styled from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((current) => current + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  console.log("i run all the time");

  const iRunOnlyOnce = () => console.log("Call an api");
  useEffect(iRunOnlyOnce, [counter]);
  const iSearchSomething = () => console.log("Searching");
  useEffect(iSearchSomething, [keyword]);

  return (
    <div className="App">
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
