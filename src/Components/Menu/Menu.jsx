import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveRoundedIcon from '@mui/icons-material/ArchiveRounded';

export default function Menu() {
  return (
    <div className='menu'>
      <div className='Icons'>
        <DeleteIcon className='icon'/>
        <span> Delete</span>
      </div>
      <div className='Icons'>
        <ArchiveRoundedIcon className='icon'/>
        <span>Archive</span>
      </div>
    </div>
  )
}
