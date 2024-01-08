const Result = ({ result }) => {
  return (
    <div
      className={` h-12 flex items-center w-full ${result === "" && "hidden"}`}
    >
      <span className={`text-xl font-bold`}>{result}</span>
    </div>
  );
};

export default Result;
