import React, {useContext} from 'react'
import DataContext from '../../Context/DataContext'
import NotesList from '../NormalNotes/NotesList/NotesList';

export default function DeletedNotes() {
  const context = useContext(DataContext);
  return (
    <>
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

