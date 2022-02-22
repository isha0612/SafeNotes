import React from "react";
import DataContext from "./DataContext";
import { useState, useEffect } from "react";

const DataState = (props) => {

  const [notes, setNotes] = useState([]);

  const [dNotes, setDelNotes] = useState([]);

  const [light, setLight] = useState(true);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    const delNotes = JSON.parse(localStorage.getItem("react-del-notes-data"));

    if(savedNotes) {
      setNotes(savedNotes);
    }

    if(delNotes) {
      setDelNotes(delNotes);
    }

    setLight(JSON.parse(localStorage.getItem("react-theme-data")));
    
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
    localStorage.setItem("react-del-notes-data",JSON.stringify(dNotes));
    localStorage.setItem("react-theme-data",JSON.stringify(light));
  }, [notes, dNotes, light]);

  const addNote = (info) => {
    setNotes((prev) => {
      return [...prev, info];
    });
  };

  const addDelNote = (id) => {
    const note = notes.filter((val, index) => index === id);

    setDelNotes(prev => {
      return [
        ...prev,
        ...note
      ]
    });
    
    setNotes(prev => {
      return prev.filter((val, index) => index !== id);
    });
  }

  const delNote = id => {
    setDelNotes(prev => {
      return prev.filter((val, index) => index !== id);
    })
  }

  const delAll = () => {
    setDelNotes([]);
  }

  const toggleClicked = () => {
    setLight(prev => !prev);
  }

  return (
      <DataContext.Provider value={{notes, addNote, dNotes, addDelNote, delNote, delAll, light, toggleClicked}}>
        {props.children}
      </DataContext.Provider>
  );
};

export default DataState;
