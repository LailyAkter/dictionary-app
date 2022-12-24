import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import axios from 'axios';
import Quote from './Quote';

export default function QuoteList() {
    const [item,setItem] = useState({
        id:1,
        quote:"Whatever the mind of man can conceive and believe, it can achieve.",
        author:"Napoleon Hill"
    })
    const [quoteData,setQuoteData] = useState([])
    const fetchQuotes = async() =>{
        const data = await axios.get("https://dummyjson.com/quotes");
        // console.log(data.data.quotes)
        setQuoteData(data.data.quotes)
    }

    useEffect(()=>{
        fetchQuotes()
    },[])

    const handleClick = (event) =>{
        const randomIndex =  Math.floor(Math.random() *30);
        const {author,quote,id} =  quoteData[randomIndex];
        setItem({
            ...item,
            id:randomIndex,
            quote:quote,
            author:author
        })
        // console.log(item)
    }

  return (
    <>
        <Container maxWidth="sm">
            <Grid xs={12} md={6} mdOffset={2}>
                <Box sx={{display: 'flex', flexDirection: 'column',marginTop:20,width: 370,height: 370 }}>
                    <h3 style={{textAlign:"center",marginBottom:"10px"}}>Random Quote</h3>
                    <Quote item={item}  handleClick={handleClick}/>
                </Box>
            </Grid>
        </Container>
  </>
  )
}
