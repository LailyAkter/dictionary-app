import React, { useState } from 'react'
import css from "./NotesInput.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from '../Features/NotesSlice/NotesSlice';
import { nanoid } from "nanoid";
import ColorButton from '../ColorButton/ColorButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NotesInput() {
  const [text,setText] = useState('');
  const [bgColor,setBgColor] = useState('red')
  const dispatch = useDispatch();
  const items = useSelector((state)=>state.items)

  // console.log(text)
  const handleAddNote = () =>{
    if (text === "") {
      toast("Please fill in the relevant fields!")
      // alert("Please fill in the relevant fields!");
      return;
    }
    // console.log(items)
    const note = items.filter((item) => item.note === text);
   
    if (note.length > 0) {
      toast("You have already added this note!")
      // alert("You have already added this note!");
      return;
    }
    dispatch(addNote({ id:nanoid(5), note:text,bgColor }));
    setText("");
  }
 
  return (
    <div className={css.textarea_box }>
      <textarea value={text} className={css.textarea_input} name="text" onChange={(event)=>setText(event.target.value)}></textarea>
      <div className={css.textarea_inner_container}>
        <ColorButton bgcolor={bgColor} setBgColor={setBgColor}/>
        <button className={css.btn_add} onClick={handleAddNote}>Add</button>
      </div>
      <ToastContainer />
      
    </div>
  )
}
