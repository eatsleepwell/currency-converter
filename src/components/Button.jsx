const Button = ({ exchange, result, empty }) => {
  return (
    <div
      className={`flex w-full h-12 justify-end ${result !== "" && "hidden"} `}
    >
      <button
        className={`px-5 py-2 bg-white rounded-lg ${
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
