import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function MessageCard(props) {

  return (
    <Card sx={{ maxWidth: 300, maxHeight: 400, m: 2}}>
      <CardContent             align="left">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {props.message.owner} 
        </Typography>
        <Typography variant="h5" component="div">
        Score: {props.message.sentimentScore.slice(0,4)}

        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Overall sentiment: {props.message.sentimentScore[0] === "-" ? <b>negative</b>: <b>positive</b> }
        </Typography>
        <Typography variant="body2">
        {props.message.textContent}
        </Typography>
      </CardContent>
    </Card>
  );
}
