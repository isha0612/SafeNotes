import React, {useContext} from 'react'
import DataContext from '../../Context/DataContext'
import NotesList from '../NormalNotes/NotesList/NotesList';
import DeleteIcon from '@mui/icons-material/Delete';
import './DeletedNotes.scss'

export default function DeletedNotes() {
  const context = useContext(DataContext);

  return (
    <>
    <div className='del-text'>
      {context.dNotes.length !== 0 && <p onClick={context.delAll}> 
        <DeleteIcon style={{marginRight: '5px'}}/> 
      Delete everything 
      </p>}
    </div>
    <div className='notes-list'>
        {context.dNotes.map((val, index) => {
          return (
            <NotesList 
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            />
          )
        })}
         </div>
    </>
  )
}

