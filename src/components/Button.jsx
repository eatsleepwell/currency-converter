import React from "react";

const Button = ({ exchange }) => {
  return (
    <div className="flex flex-col gap-2">
      <button
        className="bg-white p-2 rounded-lg w-60"
        onClick={() => exchange()}
      >
        Convert
      </button>
    </div>
  );
};

export default Button;
