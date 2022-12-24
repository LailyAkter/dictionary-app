import React, { useState } from 'react'
import css from './NotesItem.module.css';
import { useDispatch } from 'react-redux';
import { removeNote } from '../Features/NotesSlice/NotesSlice';

export default function NotesItem({items,focus}) {
  const dispatch = useDispatch();

  return (
    <div className={css.note_container}>
      {items.length > 0 ? items.map((item)=>{
        // console.log(item.id)
        return(
          <>
            <div 
              className={css.note_item}
              style={{background:item.bgColor}}
            >
                <span>{item.note}</span>
                <span style={{float:"right"}}>
                  <button type='submit' className={css.btn_add} onClick={()=>console.log(dispatch(removeNote(item.id)))}>Remove</button>
                </span>
            </div>
            
          </>
        )
      }) : focus && <div className={css.note_not_found}>Note Not Found</div>}
      
    </div>
  )
}
