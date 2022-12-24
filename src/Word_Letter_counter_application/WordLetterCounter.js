import { Container } from '@mui/material'
import React from 'react'
import Counter from './Components/Counter/Counter'
import Navbar from './Components/Navbar/Navbar'

export default function WordLetterCounter() {
  return (
    <div style={{overflowX: "hidden", background: "linear-gradient(109deg, #ddd6f3,#faaca8)",height: "100vh",justifyContent: "center",alignItems: "center",}}>
      <Container>
        <Navbar/>
        <Counter/>
      </Container>
    </div>
  )
}
