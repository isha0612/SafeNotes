import React, {useContext, useState} from 'react'
import Header from './Header/Header'
import Menu from './Menu/Menu'
import Footer from './Footer/Footer'
import NormalNotes from './NormalNotes/NormalNotes'
import DeletedNotes from './DeletedNotes/DeletedNotes'
import {Route, Routes, HashRouter as Router} from 'react-router-dom';
import DataContext from '../Context/DataContext'
import './App.scss';

function App() {
  const context = useContext(DataContext);

  const [menu, setMenu] = useState(false);

  const menuClicked = () => {
    setMenu(prev => !prev);
  }

  return (
    <div className={context.light ? 'body' : 'body body-dark'}>
        <Router>
          {menu && <Menu menuClicked={menuClicked}/> }
          <Header menuClicked={menuClicked} menu={menu}/>
          <Routes>
            <Route exact path='/' element={<NormalNotes /> } />
            <Route exact path="/delete" element={<DeletedNotes />}/>
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
