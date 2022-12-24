import React from 'react'
import PersonList from './Components/PersonList'

export default function Random_Person() {
  return (
    <div style={{overflowX:"hidden",height:"80vh",color:"#fff",background:"linear-gradient( 45deg, rgb(117 7 189), rgb(207 39 132))"}}>
      <PersonList/>
    </div>
  )
}
