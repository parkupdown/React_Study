import CallApi from "./CallApi";
import Button from "./Button";

const Container = ({ data }) => {
  return (
    <div>
      <Button coinData={data} />
    </div>
  );
};

const App = () => {
  const [data, loading] = CallApi();

  return <div>{loading ? null : <Container data={data} />}</div>;
};

export default App;

//style={{ width: "100%", height: "100%", backgroundColor: "burlywood" }
