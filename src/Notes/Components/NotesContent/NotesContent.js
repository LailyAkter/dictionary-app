import React from 'react'
import NotesItem from '../NotesItem/NotesItem'
import {  useSelector } from "react-redux";

export default function NotesContent() {
  const items = useSelector((state)=>state.items)
  let filteredNotes = items;
  const searchText = useSelector((state) => state.searchText);

  if (searchText && searchText !== "") {
    filteredNotes = filteredNotes.filter((note) =>
      note.note.toLowerCase().includes(searchText.toLowerCase())
    );
  } else {
    filteredNotes = items;
  }
  return (
    <div>
      <NotesItem focus={items.length > 0} items={filteredNotes}/>
    </div>
  )
}
