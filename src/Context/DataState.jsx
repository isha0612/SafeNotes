import React from "react";
import DataContext from "./DataContext";
import { useState, useEffect } from "react";

const DataState = (props) => {
  const [notes, setNotes] = useState([]);

  const [dNotes, setDelNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    const delNotes = JSON.parse(localStorage.getItem("react-del-notes-data"));

    if(savedNotes) {
      setNotes(savedNotes);
    }

    if(delNotes) {
      setDelNotes(delNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
    localStorage.setItem("react-del-notes-data",JSON.stringify(dNotes));
  }, [notes, dNotes]);

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

  const delAll = () => {
    setDelNotes([]);
  }

  return (
      <DataContext.Provider value={{notes, addNote, dNotes, delNote, delAll}}>
        {props.children}
      </DataContext.Provider>
  );
};

export default DataState;
