import React, {useState} from 'react'
import Header from './Header/Header'
import Menu from './Menu/Menu'
import Footer from './Footer/Footer'
import NormalNotes from './NormalNotes/NormalNotes'
import DeletedNotes from './DeletedNotes/DeletedNotes'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import DataState from '../Context/DataState' 
import './App.scss';

function App() {
  const [menu, setMenu] = useState(false);

  const menuClicked = () => {
    setMenu(prev => !prev);
  }


  return (
    <>
    <DataState>
    <Router>
        <Menu menuClicked={menuClicked} menu={menu}/> 
        <Header menuClicked={menuClicked} menu={menu}/>
      <Routes>
        <Route exact path='/' element={<NormalNotes /> } />
        <Route exact path="/delete" element={<DeletedNotes />}/>
      </Routes>
      <Footer />
      </Router>
      </DataState>
    </>
  );
}

export default App;
