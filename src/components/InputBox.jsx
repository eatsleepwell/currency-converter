import { useState, useEffect } from "react";

const InputBox = ({
  data,
  setAmount,
  from = "USD",
  to = "IDR",
  setFrom,
  setTo,
  format,
  exchange,
  result,
  setEmpty,
}) => {
  const [inputValue, setInputValue] = useState(1);

  useEffect(() => {
    let timerId;

    if (result !== "") {
      timerId = setTimeout(() => {
        exchange();
      }, 500);
    }

    return () => clearTimeout(timerId);
  }, [inputValue, from, to]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEmpty(value === "" || value === "0");
    setInputValue(value === "" ? "" : value);
    setAmount(Number(value));
  };

  const formatted = (e) => {
    const value = e.target.value;
    setInputValue(value === "" ? "" : format(parseFloat(e.target.value)));
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <span>Amount</span>
        <div className="p-4 bg-white rounded-lg">
          <input
            type="text"
            pattern="\d*"
            className="w-32 w-full border-none outline-none"
            placeholder={inputValue}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={formatted}
          />
        </div>
        {inputValue === "0" && (
          <span className="text-red-500">
            "Please enter an amount greater than 0"
          </span>
        )}
        {inputValue === "" && (
          <span className="text-red-500">"Please enter a valid amount"</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <span>From</span>
        <div className="p-2 bg-white rounded-lg">
          <select
            className="w-32 p-2 border-none outline-none"
            onChange={(e) => {
              setFrom(e.target.value);
            }}
          >
            {data &&
              Object.keys(data).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            <option value="">{from}</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span>To</span>

        <div className="p-2 bg-white rounded-lg ">
          <select
            className="w-32 p-2 border-none outline-none"
            onChange={(e) => setTo(e.target.value)}
          >
            {data &&
              Object.keys(data).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            <option value="">{to}</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default InputBox;
