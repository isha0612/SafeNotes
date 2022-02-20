import React, {useContext} from 'react'
import AddNotes from './AddNotes/AddNotes'
import NotesList from './NotesList/NotesList'
import DataContext from "../../Context/DataContext";
import './NormalNotes.scss'

export default function NormalNotes() {
  const context = useContext(DataContext);
  return (
    <div>
        <AddNotes />
        <div className='notes-list'>
        {context.notes.map((val, index) => {
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
    </div>
  )
}
