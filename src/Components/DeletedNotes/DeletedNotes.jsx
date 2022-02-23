import React, {useContext} from 'react'
import DataContext from '../../Context/DataContext'
import NotesList from '../NormalNotes/NotesList/NotesList';
import DeleteIcon from '@mui/icons-material/Delete';
import './DeletedNotes.scss'

export default function DeletedNotes() {

  const context = useContext(DataContext);

  return (
    <>
      <div className={context.light ? 'del-text' : 'del-text del-text-dark'}>
        {context.dNotes.length === 0 &&
          <h2>Sorry, Bin is Empty!</h2>
        }
        {context.dNotes.length !== 0 && 
        <p onClick={context.delAll}> 
          <DeleteIcon style={{marginRight: '5px'}}
          className='del-icon'/> 
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

