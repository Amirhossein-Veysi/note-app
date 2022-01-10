import React from "react";

const Note = ({ note, deleteNote }) => {
  const { text, time, color } = note;

  return (
    <div className="col-6 col-md-4 col-lg-3 mt-3">
      <div className="card p-4" style={{ background: color }}>
        <p className="h5 text-secondary">{text}</p>
        <div className="d-flex w-100 justify-content-between">
          <span style={{ fontSize: 14 }}>{time}</span>
          <button
            className="btn btn-danger btn-sm shadow-0"
            onClick={() => deleteNote(note)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
