import React from 'react'
import AddNotes from './AddNotes/AddNotes'
import NotesList from './NotesList/NotesList'
import './NormalNotes.scss'

export default function NormalNotes(props) {
  return (
    <div>
        <AddNotes onAdd={props.addNote} />
        <div className='notes-list'>
        {props.notes.map((val, index) => {
          return (
            <NotesList 
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            menu={props.menu}
            />
          )
        })}
         </div>
    </div>
  )
}
