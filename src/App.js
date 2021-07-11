import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import Notes from "./Components/Notes";
import "./App.css";

function App() {
  //state stuff
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredNotes, setFilteredNotes] = useState([]);


  //only run once
  useEffect(() => {
    getLocalNotes();
  }, []);
  //use effect
  useEffect(() => {
    filterHandler();
    saveLocalNotes();
  }, [notes, status]);

  
  //functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredNotes(notes.filter((note) => note.completed === true));
        break;

      case "uncompleted":
        setFilteredNotes(notes.filter((note) => note.completed === false));
        break;
      default:
        setFilteredNotes(notes);
        break;
    }
  };

  //SAVE TO LOCAL STORAGE
  const saveLocalNotes = () => {
      localStorage.setItem("notes", JSON.stringify(notes));
  };

  const getLocalNotes = () => {
    if (localStorage.getItem("notes") === null) {
      localStorage.setItem("notes", JSON.stringify([]));
    } else {
      let localNotes = JSON.parse(localStorage.getItem("notes"));
      setNotes(localNotes);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>The Samoudi Notebook</h1>
      </header>
      <Form
        notes={notes}
        setNotes={setNotes}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <Notes notes={notes} setNotes={setNotes} filteredNotes={filteredNotes} />
    </div>
  );
}

export default App;
