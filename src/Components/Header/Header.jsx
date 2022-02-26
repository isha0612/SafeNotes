import React, { useContext } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import keepImg from '../../Images/keep_img.png'
import Switch from '@mui/material/Switch'
import { Link } from 'react-router-dom';
import DataContext from '../../Context/DataContext'
import './Header.scss'

export default function Header(props) {
  const context = useContext(DataContext);
  return (
    <>
      <div className={context.light ? 'header' : 'header header-dark'}>
        <MenuRoundedIcon 
        onClick={props.menuClicked}
        className={props.menu ? 'menuIcon menuIcon-hide' : 'menuIcon'}/>
        <Link to="/">
        <img src={keepImg} aria-hidden alt="keep image"/>
        </Link>
        <p>SafeNotes</p>
        <div className='toggle-switch'>
          <p>Enable {context.light ? 'dark' : 'light'} mode</p>
          <Switch
           className='.switch'
           onChange={context.toggleClicked}
           inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
      </div>
    </>
  );
}
