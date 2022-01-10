import React, { useState, useEffect } from "react";
//components
import ColorCircle from "../ColorCircle";

const NoteInput = ({ addNotes }) => {
  const colors = ["#fff", "#ede84e", "#b3d651", "#f2ae61", "#76bdef"];
  const [inpColor, setInpColor] = useState("#fff");
  const [inpText, setInpText] = useState("");

  const handleColorClick = (color) => {
    setInpColor(color);
  };

  const handleInpChange = (event) => {
    setInpText(event.target.value);
  };

  const handleAddClick = () => {
    const d = new Date();
    const date = `${d.getFullYear()}/${
      d.getMonth() + 1
    }/${d.getDate()} -- ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    addNotes(inpText, date, inpColor);
  };

  return (
    <React.Fragment>
      <div className="d-flex add-form align-items-center">
        <input
          type="text"
          className="form-control mt-5"
          style={{ background: inpColor }}
          placeholder="Enter your note"
          value={inpText}
          onChange={handleInpChange}
        />
        <button className="btn btn-primary mt-5 ms-4" onClick={handleAddClick}>
          Add
        </button>
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
