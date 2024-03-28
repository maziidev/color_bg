function Square({ colorValue }) {
  return (
    <section
      className="border p-10 w-72 h-72 flex bg-white rounded-lg items-center justify-center mb-10"
      style={{ background: colorValue }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
    </section>
  );
}

Square.defaultProps = {
  colorValue: "Empty color Value",
};
export default Square;
