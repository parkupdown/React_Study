import CallApi from "./CallApi";

const App = () => {
  const data = CallApi();

  return (
    <div>
      <ul>
        {data.map((coin, index) => (
          <li key={index}>{coin.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
