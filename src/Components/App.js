import React, {useEffect, useState} from 'react'
import Header from './Header/Header'
import Menu from './Menu/Menu'
import Footer from './Footer/Footer'
import NormalNotes from './NormalNotes/NormalNotes'
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
    <Router>
        {menu && <Menu menuClicked={menuClicked} menu={menu}/>} 
        <Header menuClicked={menuClicked} />
      <Routes>
        <Route exact path='/' element={<NormalNotes onAdd={addNote} items={items} menu={menu}/>}/>
        <Route exact path="/delete" element={<DeletedNotes />}/>
        <Route exact path="/archive" element={<ArchivedNotes />}/>
      </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
