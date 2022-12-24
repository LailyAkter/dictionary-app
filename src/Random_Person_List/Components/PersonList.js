import React, { useEffect, useState } from 'react'
import  Container  from '@mui/material/Container'
import  Grid  from '@mui/material/Grid'
import  Box  from '@mui/material/Box'
import Person from './Person'
import axios from 'axios'

export default function PersonList() { 
    const [personList,setPersonList] = useState();

    const [person,setPerson] = useState({
            "id": 1,
            "firstName": "Terry",
            "lastName": "Medhurst",
            "maidenName": "Smitham",
            "age": 50,
            "gender": "male",
            "email": "atuny0@sohu.com",
            "phone": "+63 791 675 8914",
            "username": "atuny0",
            "password": "9uQFF1Lh",
            "image": "https://robohash.org/hicveldicta.png",
            "address": {
                "address": "1745 T Street Southeast",
                "city": "Washington",
                "coordinates": {
                    "lat": 38.867033,
                    "lng": -76.979235
                },
                "postalCode": "20020",
                "state": "DC"
            },
            "university": "Capitol University",

            "company": {
                "address": {
                    "address": "629 Debbie Drive",
                    "city": "Nashville",
                        "coordinates": {
                        "lat": 36.208114,
                        "lng": -86.58621199999999
                        },
                    "postalCode": "37076",
                    "state": "TN"
                },
                "department": "Marketing",
                "name": "Blanda-O'Keefe",
                "title": "Help Desk Operator"
            },
        })

    const fetchPersonList = async() => {
        const data = await axios.get("https://dummyjson.com/users");
        console.log(data.data.users)
        setPersonList(data.data.users)
    }

    useEffect(()=>{
        fetchPersonList()
    },[])

   
    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * 20);
        const { id,firstName,lastName,email,maidenName,age,password,image,gender,username,address,phone,university,company} = personList[randomIndex];
        setPerson({
            id:id,
            firstName:firstName,
            lastName:lastName,
            maidenName:maidenName,
            age:age,
            gender:gender,
            password:password,
            email:email,
            username:username,
            address:address,
            university:university,
            image:image,
            company:company,
            phone:phone
        })
    }
  return (
    <div>
      <Container maxWidth="sm">
        <Grid xs={12} md={6} mdOffset={4}>
            <Box sx={{display:"flex",flexDirection:"column",height:"600px"}}>
                <Person person={person} handleClick={handleClick}/>
            </Box>
        </Grid>
      </Container>
    </div>
  )
}
