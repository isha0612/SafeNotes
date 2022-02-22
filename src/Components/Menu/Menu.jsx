import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import './Menu.scss'


export default function Menu(props) {
  return (
    <MenuAnimated className='menu'>
      <div className='close-icon'>
        <CloseIcon style={{fontSize: '30px', cursor: 'pointer'}}
        onClick={props.menuClicked}/>
      </div>
      <div className='lists'>
        <Link to="/" className='icons' onClick={props.menuClicked} >
          <HomeIcon className='form-icon' />
          <span>Home</span>
        </Link>
        <Link to="/delete" className='icons' onClick={props.menuClicked}>
          <DeleteIcon className='form-icon'/>
          <span>Delete</span>
        </Link>
      </div>
    </MenuAnimated>
  )
}

const MENU = keyframes`
from {
  width:0;
}
to {
  width:300px;
}
`;

const MenuAnimated = styled.div`
animation-name:${MENU};
animation-duration:1s;
animation-timing-function:ease-in-out;
animation-iteration-count:1;
`;