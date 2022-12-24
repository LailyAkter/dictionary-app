import React, { useState } from 'react'
import  Card  from '@mui/material/Card'
import { Button,CardActions, CardContent, CardMedia, Typography } from '@mui/material'
function Person({person,handleClick}) {
  const [age,setAge] = useState(false)
  const [gender,setGender] = useState(false)
  const [email,setEmail] = useState(false)
  const [phone,setPhone] = useState(false)
  const [username,setUsername] = useState(false)
  const [university,setUniversity] = useState(false)
  
  console.log(person.university)
  return (
    <>
      <Card style={{marginTop:"20px"}}>
        <CardMedia
            component="img"
            height={300}
            image={person.image}
            alt={person.firstName}
        />

        <CardContent>
            <Typography variant="h5">
                Full Name : {person.firstName}  {person.maidenName} {person.lastName}
            </Typography>
            <Typography variant="h4">
                Username : {person.username}
            </Typography>
            <Typography variant="h4">
                Password : {person.password}
            </Typography>

            <Typography variant="h5">
                My {age ? `Age is ${age}` : "" }
                {gender ? `Gender is ${gender}` : "" }
                {email ? `EMail is ${email}` : "" }
                {phone ? `Phone is ${phone}` : "" }
                {username ? `Username is ${username}` : "" }
                {university ? `University is ${university}` : "" }
            </Typography>

            
        </CardContent>

        <CardActions>
            <Button size="small" onMouseLeave={()=>setAge(false)} onMouseOver={()=>setAge(person.age)}>Age</Button>
            <Button size="small"  onMouseLeave={()=>setGender(false)} onMouseOver={()=>setGender(person.gender)}>Gender</Button>
            <Button size="small" onMouseLeave={()=>setEmail(false)} onMouseOver={()=>setEmail(person.email)}>Email</Button>
            <Button size="small" onMouseLeave={()=>setPhone(false)}  onMouseOver={()=>setPhone(person.phone)}>Phone</Button>
            <Button size="small" onMouseLeave={()=>setUsername(false)}  onMouseOver={()=>setUsername(person.username)}>Username</Button>
            <Button size="small" onMouseLeave={()=>setUniversity(false)} onMouseOver={()=>setUniversity(person.university)}>University</Button>
        </CardActions>
            <Typography style={{textAlign:'center'}}>
              <Button style={{marginBottom:"20px"}} size="small" onClick={handleClick}>Random Person List</Button>
            </Typography>
      </Card>
    </>
  )
}

export default Person