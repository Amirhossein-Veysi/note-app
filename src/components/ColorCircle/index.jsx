import React from "react";

const ColorCircle = ({ color, colorClick }) => {
  return (
    <div
      className="color-circle m-2"
      style={{ background: color }}
      onClick={() => colorClick(color)}
    ></div>
  );
};

export default ColorCircle;
