import React from "react";
import DataContext from "./DataContext";
import { useState, useEffect } from "react";

const DataState = (props) => {
  const [notes, setNotes] = useState([]);

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

  return (
      <DataContext.Provider value={{notes, addNote}}>
        {props.children}
      </DataContext.Provider>
  );
};

export default DataState;
