import { useEffect, useState } from "react";

const CallApi = () => {
  useEffect(() => {
    fetchApi();
  }, []);

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchApi = () =>
    fetch(` https://api.coinpaprika.com/v1/tickers?limit=130`)
      .then((result) => result.json())
      .then((jsonResult) => {
        setData(jsonResult);
        setLoading((current) => !current);
      });

  return [data, loading];
};
export default CallApi;
