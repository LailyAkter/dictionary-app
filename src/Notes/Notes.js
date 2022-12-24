import { Container } from '@mui/system'
import React from 'react'
import Header from './Components/Header/Header'
import NotesContent from './Components/NotesContent/NotesContent'
import NotesInput from './Components/NotesInput/NotesInput'

export default function Notes() {
  return (
    <div style={{display: "flex",background: '#067597',justifyContent: "center",alignItems: "center",flexDirection: "column",
    padding: "20px",
    margin:" 0 auto"}}>
        <Header/>
        <NotesInput/>
        <NotesContent/>
    </div>
  )
}
