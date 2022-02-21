import React, { useContext } from 'react'
import {useLocation} from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import DataContext from '../../../Context/DataContext';
import './NotesList.scss'

export default function NotesList(props) {

  const context = useContext(DataContext);
  const location = useLocation();

  const delClicked = () => {
    context.delNote(props.id);
  }

  return (
    <div className={context.light ? 'note' : 'note note-dark'}>
        <p style={{fontWeight: 'bold'}}>{props.title ? props.title : 'Untitled'}</p>
        <p>{props.content}</p>
        {location.pathname === '/' && 
        <div>
            <DeleteIcon className='note-icon' onClick={delClicked}/>
        </div>
        }
    </div>
  )
}
