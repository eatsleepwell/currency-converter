import { useState, useEffect, useCallback } from "react";
import { InputBox, Button, Result } from "./components";
import FetchDataCurrency from "./hooks/data";

const App = () => {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("IDR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState("");
  const [empty, setEmpty] = useState(false);

  const apiKey = import.meta.env.VITE_API_KEY;
  const url = import.meta.env.VITE_URL_API;
  const URL_API = `${url}/${apiKey}/latest/${from}`;
  const URL_EXCHANGE = `${url}/${apiKey}/pair/${from}/${to}/${amount}`;
  const data = FetchDataCurrency({ URL_API });

  const exchange = useCallback(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL_EXCHANGE);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        setResult(
          ` ${numberWithCommas(amount)} ${from} = ${numberWithCommas(
            data.conversion_result
          )} ${to} `
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [URL_EXCHANGE]);

  const numberWithCommas = (value) => {
    return value.toLocaleString("en-US");
  };

  return (
    <div className="flex flex-col flex-wrap items-center justify-center w-full h-screen gap-5 bg-slate-200">
      <div className=" md:w-[70%] lg:w-[60%]">
        <h1 className="mb-5 text-2xl font-bold text-center md:text-3xl lg:text-5xl ">
          Simple Currency Converter
        </h1>
        <div className="flex flex-col gap-6 p-5 rounded-xl bg-slate-300">
          <div className="flex flex-col gap-2 lg:flex-row">
            <InputBox
              data={data}
              amount={amount}
              from={from}
              to={to}
              setAmount={setAmount}
              setFrom={setFrom}
              setTo={setTo}
              format={numberWithCommas}
              exchange={exchange}
              result={result}
              setEmpty={setEmpty}
            />
          </div>
          <div className="flex">
            <Result result={result} />
            <Button exchange={exchange} result={result} empty={empty} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
