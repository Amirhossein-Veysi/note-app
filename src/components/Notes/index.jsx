import React, { useState, useEffect } from "react";
import loadLocalStorage from "../../helpers/LoadLocalStorage";
import setLocalStorage from "../../helpers/SetLocalStorage";

//components
import NoteInput from "../NoteInput";
import Note from "../Note";

const Notes = () => {
  const [notes, setNotes] = useState(loadLocalStorage());

  const handleAddNote = (text, time, color) => {
    const obj = { text, time, color };
    const cnotes = [...notes, obj];
    setNotes(cnotes);
  };

  const handleDeleteNote = (note) => {
    const cnotes = [];
    notes.map((el) => el !== note && cnotes.push(el));
    setNotes(cnotes);
  };

  useEffect(() => {
    setLocalStorage(notes);
  }, [notes]);

  return (
    <div className="container">
      <NoteInput addNotes={handleAddNote} />
      <div className="row">
        {notes.length <= 0 ? (
          <p className="h2 text-center text-secondary mt-5">
            You Don't Have Any Note Yet!
          </p>
        ) : (
          notes.map((note) => (
            <Note note={note} deleteNote={handleDeleteNote} />
          ))
        )}
      </div>
    </div>
  );
};

export default Notes;
