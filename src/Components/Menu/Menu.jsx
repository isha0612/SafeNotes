import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveRoundedIcon from '@mui/icons-material/ArchiveRounded';
import CloseIcon from '@mui/icons-material/Close';
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
      <div className='icons'>
        <DeleteIcon className='form-icon'/>
        <span> Delete</span>
      </div>
      <div className='icons'>
        <ArchiveRoundedIcon className='form-icon'/>
        <span>Archive</span>
      </div>
      </div>
    </div>
  )
}
