import React from 'react'
import Search from '../Search/Search'
import css from './Header.module.css';

export default function Header() {
  return (
    <div className={css.header_text}>
      <h3 style={{color:"#fff"}}>Notes Application</h3>
      <Search/>
    </div>
  )
}
