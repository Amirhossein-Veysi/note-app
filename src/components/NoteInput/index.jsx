import React, { useState } from "react";
//components
import ColorCircle from "../ColorCircle";

const NoteInput = () => {
  const [colors, setColors] = useState([
    "#ffffff",
    "#ede84e",
    "#b3d651",
    "#f2ae61",
    "#5ea4d6",
  ]);
  const [inpColor, setInpColor] = useState("#fff");

  const handleColorClick = (color) => {
    setInpColor(color);
  };

  return (
    <React.Fragment>
      <div className="d-flex add-form align-items-center">
        <input
          type="text"
          className="form-control mt-5"
          style={{ background: inpColor }}
        />
        <button className="btn btn-primary mt-5 ms-4">Add</button>
      </div>
      <div className="d-flex">
        {colors.map((color) => (
          <ColorCircle
            color={color}
            key={color}
            colorClick={handleColorClick}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default NoteInput;
