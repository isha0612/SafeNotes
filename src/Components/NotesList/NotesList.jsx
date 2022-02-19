import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveRoundedIcon from '@mui/icons-material/ArchiveRounded';
import './NotesList.scss'

export default function NotesList(props) {
  return (
    <div className='note'>
        <p style={{fontWeight: 'bold'}}>{props.title}</p>
        <p>{props.content}</p>
        <div>
            <ArchiveRoundedIcon className='note-icon'/>
            <DeleteIcon className='note-icon'/>
        </div>
    </div>
  )
}
