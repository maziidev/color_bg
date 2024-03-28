function Input({ colorValue, setColorValue }) {
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
        onChange={(e) => setColorValue(e.target.value)}
      />
    </form>
  );
}

export default Input;
