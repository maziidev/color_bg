import colorNames from "colornames";

function Input({
  colorValue,
  setHexValue,
  setColorValue,
  setIsDarkText,
  isdarkText,
}) {
  return (
    <form
      className="flex flex-col items-center justify-center"
      action=""
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="" className="hidden">
        Add Color name:{" "}
      </label>
      <input
        type="text"
        required
        placeholder="Add color name"
        className="w-full  p-2 focus:outline-none "
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button
        type="
    button"
        onClick={() => setIsDarkText(!isdarkText)}
        className="mt-5 text-center p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
      >
        toggle text color
      </button>
    </form>
  );
}

export default Input;
