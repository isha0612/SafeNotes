import React from "react";
import DataContext from "./DataContext";
import { useState, useEffect } from "react";

const DataState = (props) => {
  const [notes, setNotes] = useState([]);

  const [dNotes, setDelNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (info) => {
    setNotes((prev) => {
      return [...prev, info];
    });
  };

  const delNote = (id) => {
    const note = notes.filter((val, index) => index === id);

    setDelNotes(prev => {
      return [
        ...prev,
        ...note
      ]
    })
    console.log(dNotes);
    setNotes(prev => {
      return prev.filter((val, index) => index !== id);
    });
  }

  return (
      <DataContext.Provider value={{notes, addNote, dNotes, delNote}}>
        {props.children}
      </DataContext.Provider>
  );
};

export default DataState;
