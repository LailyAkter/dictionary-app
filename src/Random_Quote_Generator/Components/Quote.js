import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Quote({item,handleClick}) {
  return (
    <div>
        <Card variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" >
                {item.quote}
                </Typography>
                
                <Typography sx={{ mb: 1.5, textAlign: 'right' }} color="text.secondary">
                    {item.author}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleClick} variant="outlined">Random Quote</Button>
            </CardActions>
        </Card>
    </div>
  )
}
