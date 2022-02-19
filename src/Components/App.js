import React, {useEffect, useState} from 'react'
import Header from './Header/Header'
import AddNotes from './AddNotes/AddNotes'
import Menu from './Menu/Menu'
import NotesList from './NotesList/NotesList'
import './App.css';

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
      <Header menuClicked={menuClicked} />
      <div className='addNote'>
        {menu && <Menu />}
        <AddNotes onAdd={addNote} />
      </div>
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
    </>
  );
}

export default App;
