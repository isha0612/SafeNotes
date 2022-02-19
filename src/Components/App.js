import React, {useState} from 'react'
import Header from './Header/Header'
import AddNotes from './AddNotes/AddNotes'
import Menu from './Menu/Menu'
import './App.css';

function App() {
  // const [items, setItem] = useState([]);
  const [menu, setMenu] = useState(false);

  const menuClicked = () => {
    setMenu(prev => !prev);
  }
  // const addNote = (info) => {
  //   setItem(prev => {
  //     return [
  //       ...prev, 
  //       info
  //     ]
  //   })
  // }

  return (
    <>
      <Header menuClicked={menuClicked} />
      <div className='addNote'>
        {menu && <Menu />}
        <AddNotes />
      </div>
    </>
  );
}

export default App;
