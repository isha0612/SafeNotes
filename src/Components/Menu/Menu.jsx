import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveRoundedIcon from '@mui/icons-material/ArchiveRounded';
import './Menu.scss'

export default function Menu() {
  return (
    <div className='menu'>
      <div className='icons'>
        <DeleteIcon className='form-icon'/>
        <span> Delete</span>
      </div>
      <div className='icons'>
        <ArchiveRoundedIcon className='form-icon'/>
        <span>Archive</span>
      </div>
    </div>
  )
}
