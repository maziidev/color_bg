function Square({ colorValue, hexValue }) {
  return (
    <section
      className="border p-10 w-72 h-72 flex bg-white rounded-lg items-center justify-center mb-10"
      style={{ background: colorValue }}
    >
      <div className="flex flex-col">
        <p className="uppercase">{colorValue ? colorValue : "Empty Value"}</p>
        <p className="mt-3">{hexValue ? hexValue : null}</p>
      </div>
    </section>
  );
}

Square.defaultProps = {
  colorValue: "Empty color Value",
};
export default Square;
