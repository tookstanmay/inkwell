import React, { useContext, useEffect, useState } from 'react';
import './search.css'; // Import your CSS file for styling
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import "./home.css";
import "./modal.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Add your search logic here, e.g., using searchTerm to filter data
  };

  const handleReset = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setSearchTerm("");
  }


  let history = useHistory();

  useEffect(() => {
    const getting_notes = async () => {
      await getNotes();
      setTimeout(2000);
      return;
    }

    if (localStorage.getItem("token")) {
      getting_notes();
    } else {
      history.push("/login");
    }
    // eslint-disable-next-line
  }, []);

  // ************** // Modal functions // *************** //
  const [modal, setModal] = useState(false);
  const [currentNote, setCurrentNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  const updateNote = (clickedNote) => {
    toggleModal();
    setCurrentNote({
      id: clickedNote._id,
      etitle: clickedNote.title,
      edescription: clickedNote.description,
      etag: clickedNote.tag,
    });
  };

  const onChange = (event) => {
    setCurrentNote({ ...currentNote, [event.target.name]: event.target.value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    editNote(
      currentNote.id,
      currentNote.etitle,
      currentNote.edescription,
      currentNote.etag
    );
    toggleModal();
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }


  return (
    <>
    <div>
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <div className="close-container">
                <h2>Edit Note.</h2>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/color/48/delete-sign--v1.png"
                  alt="delete-sign--v1"
                  onClick={toggleModal}
                />
              </div>
              <form action="" className="modalForm">
                <input
                  className="modalInput"
                  type="text"
                  name="etitle"
                  id="etitle"
                  placeholder="Title"
                  value={currentNote.etitle}
                  onChange={onChange}
                  spellCheck="false"
                  autoComplete="off"
                  minLength={3}
                  required
                />
                <textarea
                  className="modalTextarea"
                  name="edescription"
                  id="edescription"
                  placeholder="Description"
                  value={currentNote.edescription}
                  onChange={onChange}
                  spellCheck="false"
                  autoComplete="off"
                  minLength={3}
                  required
                ></textarea>
                <input
                  className="modalInput"
                  type="text"
                  name="etag"
                  id="etag"
                  placeholder="Tag"
                  value={currentNote.etag}
                  onChange={onChange}
                  spellCheck="false"
                  autoComplete="off"
                />
                <button id="modalBtn" onClick={handleClick}>
                  Update
                </button>
              </form>
            </div>
          </div>
        )}
    </div>
    <h2 style={{marginTop: "20px"}}>Search by TAG</h2>
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit" style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "0 10px"}}>
        <img src="./public/images/magnifying-glass.png" alt="" style={{height: "28px"}} />
      </button>
    </form>
    {
        searchTerm !== "" ? (
            <div>
                <button type="reset" className="about-cta" onClick={handleReset}>
                <span style={{fontSize: "14px"}}>Clear</span>
                </button>
            </div>
        ) : <div></div>
    }
    <div>
        <div style={{ marginTop: "40px" }}>
          {notes.length === 0 && "Nothing to display..."}
        </div>
        <div className="displayNote">
          {notes.map((note) => {
            if (note.tag === searchTerm) {
                return (
                  <NoteItem key={note._id} note={note} updateNote={updateNote} />
                );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Search;
