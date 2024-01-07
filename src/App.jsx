import { useState, useEffect, useCallback } from "react";
import InputBox from "./components/InputBox";
import Button from "./components/Button";
import Result from "./components/Result";

const App = () => {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("IDR");
  const [exchangeData, setExchangeData] = useState(null);
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);
  const API_KEY = `27da243e9ff0100345638ed1`;
  const URL_API = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`;
  const URL_EXCHANGE = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`;

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(URL_API);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setExchangeData(data.conversion_rates);
    } catch (error) {}
  }, [URL_API]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const exchange = useCallback(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL_EXCHANGE);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setResult(data.conversion_result);
      } catch (error) {}
    };

    fetchData();
  }, [URL_EXCHANGE]);

  const numberWithCommas = (value) => {
    return value.toLocaleString("en-US");
  };

  return (
    <div className=" bg-slate-200 w-full h-screen flex flex-col flex-wrap justify-center items-center bg-cover bg-no-repeat">
      <h1 className="mb-10 text-5xl font-bold">Simple Currency Converter</h1>
      <InputBox
        data={exchangeData}
        amount={amount}
        setAmount={setAmount}
        setFrom={setFrom}
        setTo={setTo}
        format={numberWithCommas}
      />
      <Button exchange={exchange} />
      <Result result={result} to={to} format={numberWithCommas} />
    </div>
  );
};

export default App;
