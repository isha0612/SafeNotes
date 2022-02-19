import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveRoundedIcon from '@mui/icons-material/ArchiveRounded';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-router-dom'
import './Menu.scss'

export default function Menu(props) {
  return (
    <div className='menu'>
        <div className='close-icon'>
            <CloseIcon style={{fontSize: '30px', cursor: 'pointer'}}
              onClick={props.menuClicked}
            />
        </div>
        <div className='lists'>
        <Link to="/delete" className='icons' onClick={props.menuClicked}>
          <DeleteIcon className='form-icon'/>
          <span> Delete</span>
        </Link>
        <Link to="/archive" className='icons' onClick={props.menuClicked}>
          <ArchiveRoundedIcon className='form-icon'/>
          <span>Archive</span>
        </Link>
      </div>
    </div>
  )
}
