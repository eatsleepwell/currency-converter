function ExchangeCurrency({ URL_EXCHANGE, setResult, from, to, amount }) {
  const fetchData = async () => {
    try {
      const response = await fetch(URL_EXCHANGE);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      setResult(
        ` ${amount.toLocaleString(
          "en-US"
        )} ${from} = ${data.conversion_result.toLocaleString("en-US")} ${to} `
      );
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}

export default ExchangeCurrency;
