import React from "react";

const Result = ({ result, to, format }) => {
  const formattedNumber = format(Math.floor(result));
  return (
    <div>
      <h2 className={`${result === 0 && "hidden"}`}>
        {to} {formattedNumber}
      </h2>
    </div>
  );
};

export default Result;
