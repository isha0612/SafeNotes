import React from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import keepImg from '../../Images/keep_img.png'
import './Header.scss'

export default function Header(props) {
  return (
    <>
    <div className='header'>
      <MenuRoundedIcon 
      onClick={props.menuClicked}
      className='menuIcon'/>
      <img src={keepImg} aria-hidden alt="keep image"/>
      Google Keep Clone
    </div>
    </>
  );
}