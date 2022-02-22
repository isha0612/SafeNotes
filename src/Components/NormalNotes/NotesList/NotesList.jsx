import React, { useContext } from 'react'
import {useLocation} from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import DataContext from '../../../Context/DataContext';
import './NotesList.scss'

export default function NotesList(props) {

  const context = useContext(DataContext);
  const location = useLocation();

  const delClicked = () => {
    if(location.pathname === '/') {
      context.addDelNote(props.id);
    }
    else if(location.pathname === '/delete') {
      context.delNote(props.id);
    }
  }

  const homeClicked = () => {
    const val = context.dNotes.filter((val, index) => index === props.id);
    context.addNote(...val);
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
        {location.pathname === '/delete' && 
        <div>
            <DeleteIcon className='note-icon' onClick={delClicked}/>
            <HomeIcon className='note-icon' onClick={homeClicked}/>
        </div>
        }
    </div>
  )
}
