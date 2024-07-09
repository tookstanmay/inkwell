// jshint esversion: 6

import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext.jsx";
import "./home.css";
import "./modal.css";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="noteContainer">
      <h4 style={{ margin: "6px 0px", wordWrap: "break-word" }}>
        {note.title}
      </h4>
      <div
        style={{ margin: "6px 0px", fontSize: "14px", wordWrap: "break-word" }}
      >
        {
          <div>
            {note.description.split("\n").map((element) => (
              <div key={element}>{element}</div>
            ))}
          </div>
        }
      </div>
      <div
        style={{
          color: "rgb(116, 116, 116)",
          margin: "6px 0px",
          fontSize: "14px",
          wordWrap: "break-word",
        }}
      >
        #{note.tag}
      </div>
      <div className="crud-container">
<div className="crud-icons-container">
<img
          src="./images/trash-bin.png"
          alt="trash--v1"
          className="crud-icons"
          onClick={() => {
            deleteNote(note._id);
          }}
        />
</div>
<div className="crud-icons-container">
<img
          src="./images/scripting.png"
          alt="create-new"
          className="crud-icons"
          onClick={() => {
            updateNote(note);
          }}
        />
</div>
      </div>
    </div>
  );
};

export default NoteItem;
