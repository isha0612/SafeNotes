import React, {useState, useContext} from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DataContext from "../../../Context/DataContext";
import './AddNotes.scss'

export default function AddNote() {
  const context = useContext(DataContext);

  const [formValue, setValue] = useState(false);
  const [info, setInfo] = useState({
    title: "",
    content: ""
  });

  const onfocus = () => {
    setValue(true);
  }

  const onchange = (e) => {
    const {value, name} = e.target;
    setInfo(prev => {
      return {
        ...prev,
        [name] : value
      }
    })
  }

  const submitNote = () => {
    setValue(false);
    context.addNote(info);
    setInfo({
      title: "",
      content: ""
    });
  }

  return (
    <>
      <form>
            <textarea value={info.title} 
            name="title" 
            cols="70" 
            rows="2" 
            placeholder={formValue ? "Title" : "Take a note..."} 
            onClick={onfocus} style={{fontWeight: 'bold'}} 
            onChange={formValue ? onchange : null}
            spellCheck='false'>
             </textarea> 
            {formValue ? 
            <>
            <textarea value={info.content} 
            onChange={onchange}
            name="content" 
            cols="70" 
            rows="6" 
            placeholder='Take a note...' 
            spellCheck='false' /> 
            <div>
              <AddCircleIcon
              className='addIcon'
              onClick={submitNote} />
            </div>
            </>
            : ''}
        </form>
    </>
  )
}

