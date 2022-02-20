import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DataContext from '../../../Context/DataContext';
import './NotesList.scss'

export default function NotesList(props) {
  const context = useContext(DataContext);
  const delClicked = () => {
    context.delNote(props.id);
  }
  return (
    <div className='note'>
        <p style={{fontWeight: 'bold'}}>{props.title}</p>
        <p>{props.content}</p>
        <div>
            <DeleteIcon className='note-icon' onClick={delClicked}/>
        </div>
    </div>
  )
}
