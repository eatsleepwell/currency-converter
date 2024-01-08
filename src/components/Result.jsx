const Result = ({ result }) => {
  return (
    <div
      className={`flex place-items-center justify-items-center p-5 ${
        result === "" && "hidden"
      }`}
    >
      <span className={` text-2xl font-bold`}>{result}</span>
    </div>
  );
};

export default Result;
