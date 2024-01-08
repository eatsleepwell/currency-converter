import React from "react";

const Button = ({ exchange, result, empty }) => {
  return (
    <div
      className={`flex items-center justify-center ${
        result !== "" && "hidden"
      } `}
    >
      <button
        className={`p-2 bg-white rounded-lg w-20 ${
          empty && "cursor-default opacity-50 text-red-500"
        }`}
        onClick={() => !empty && exchange()}
      >
        Convert
      </button>
    </div>
  );
};

export default Button;
