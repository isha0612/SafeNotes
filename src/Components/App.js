import React, {useEffect, useState} from 'react'
import Header from './Header/Header'
import AddNotes from './AddNotes/AddNotes'
import Menu from './Menu/Menu'
import NotesList from './NotesList/NotesList'
import Footer from './Footer/Footer'
import DeletedNotes from './DeletedNotes/DeletedNotes'
import ArchivedNotes from './ArchivedNotes/ArchivedNotes'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'; 
import './App.scss';

function App() {

  const [items, setItem] = useState([]);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if(savedNotes) {
      setItem(savedNotes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(items)
    )
  }, [items]);

  const menuClicked = () => {
    setMenu(prev => !prev);
  }

  const addNote = (info) => {
    setItem(prev => {
      return [
        ...prev, 
        info
      ]
    })
  }

  return (
    <>
      {menu && <Menu menuClicked={menuClicked} menu={menu}/>} 
      <Header menuClicked={menuClicked} />
      <AddNotes onAdd={addNote} />
      <div className='notes-list'>
      {items.map((val, index) => {
          return (
            <NotesList 
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            menu={menu}
            />
          )
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
