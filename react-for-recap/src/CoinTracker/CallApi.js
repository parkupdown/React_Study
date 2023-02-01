import { useEffect, useState } from "react";

const CallApi = () => {
  useEffect(() => {
    fetchApi();
  }, []);

  const [data, setData] = useState();
  const fetchApi = () =>
    fetch(` https://api.coinpaprika.com/v1/tickers?limit=10`)
      .then((result) => result.json())
      .then((jsonResult) => setData(jsonResult));

  return data;
};
export default CallApi;
