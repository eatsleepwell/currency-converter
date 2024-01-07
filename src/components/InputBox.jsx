import { useState } from "react";

const InputBox = ({
  data,
  setAmount,
  from = "USD",
  to = "IDR",
  setFrom,
  setTo,
  format,
}) => {
  const [inputValue, setInputValue] = useState(1);

  const handleInputChange = (e) => {
    setAmount(e.target.value);
    setInputValue(e.target.value);
  };

  const formatted = (e) => {
    setInputValue(format(parseFloat(e.target.value)));
  };

  return (
    <div className="bg-slate-300 p-5 rounded-lg text-sm flex gap-5 flex-wrap items-center justify-center max-w-fit">
      <div className="flex flex-col gap-2">
        <span>Amount</span>
        <div className="bg-white p-4 rounded-lg w-60">
          <input
            type="text"
            pattern="\d*"
            className="border-none outline-none"
            placeholder={inputValue}
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => setInputValue("")}
            onBlur={formatted}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span>From</span>
        <div className="bg-white p-2 rounded-lg w-60">
          <select
            className="p-2 border-none outline-none w-52"
            onChange={(e) => setFrom(e.target.value)}
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

        <div className="bg-white p-2 rounded-lg w-60">
          <select
            className="p-2 border-none outline-none w-52"
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
    </div>
  );
};

export default InputBox;
