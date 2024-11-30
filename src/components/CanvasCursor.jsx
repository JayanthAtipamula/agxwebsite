import useCanvasCursor from "../hooks/useCanvasCursor";

const CanvasCursor = () => {
  useCanvasCursor();

  return (
    <canvas
      className="pointer-events-none absolute inset-0 z-10"
      id="canvas"
      style={{ zIndex: 9999 }}
    />
  );
};

export default CanvasCursor;
