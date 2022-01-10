import React from "react";

const Note = ({ note }) => {
  const { text, time, color } = note;

  return (
    <div className="col-6 col-md-4 col-lg-3 mt-3">
      <div className="card p-4" style={{ background: color }}>
        <p className="text-secondary">{text}</p>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default Note;