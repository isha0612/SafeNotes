import React from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import keepImg from '../../Images/keep_img.png'
import { Link } from 'react-router-dom';
import './Header.scss'

export default function Header(props) {
  return (
    <>
    <div className='header'>
      <MenuRoundedIcon 
      onClick={props.menuClicked}
      className={props.menu ? 'menuIcon menuIcon-hide' : 'menuIcon'}/>
      <Link to="/">
      <img src={keepImg} aria-hidden alt="keep image"/>
      </Link>
      Google Keep Clone
    </div>
    </>
  );
}