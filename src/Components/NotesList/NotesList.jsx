import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveRoundedIcon from '@mui/icons-material/ArchiveRounded';
import {Link} from 'react-router-dom';
import './NotesList.scss'

export default function NotesList(props) {
  return (
    <div className='note'>
        <p style={{fontWeight: 'bold'}}>{props.title}</p>
        <p>{props.content}</p>
        <div>
            <Link to="/archive"><ArchiveRoundedIcon className='note-icon'/></Link>
            <Link to="/delete"><DeleteIcon className='note-icon'/></Link>
        </div>
    </div>
  )
}
