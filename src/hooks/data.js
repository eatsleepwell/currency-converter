import { useState, useEffect } from "react";

function FetchDataCurrency({ URL_API }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL_API);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setData(data.conversion_rates);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [URL_API]);

  return data;
}

export default FetchDataCurrency;
