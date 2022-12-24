import React from 'react'
import css from './Search.module.css';
import {useDispatch, useSelector } from 'react-redux';
import { setSearchText } from '../Features/NotesSlice/NotesSlice';

export default function Search() {
  const dispatch = useDispatch();
  const search = useSelector((state)=>state.searchText)
  // console.log(search)
  const handleChange = (e) =>{
    const text = e.target.value;
    dispatch(setSearchText(text))
    // console.log(setSearchText(text))
  }
  return (
    <div>
      <input 
        className={css.search_box }
        value={search}
        placeholder="please enter your search"
        onChange={handleChange}
        type="text"
      />
    </div>
  )
}
