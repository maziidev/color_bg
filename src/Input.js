import colorNames from "colornames";

function Input({ colorValue, setHexValue, setColorValue }) {
  return (
    <form action="" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="" className="hidden">
        Add Color name:{" "}
      </label>
      <input
        type="text"
        required
        placeholder="Add color name"
        className="p-2 focus:outline-none "
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
    </form>
  );
}

export default Input;
