import { useState, useCallback } from "react";

function ExchangeCurrency({ URL_EXCHANGE }) {
  const [result, setResult] = useState({});

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

  exchange();

  return result;
}

export default ExchangeCurrency;
