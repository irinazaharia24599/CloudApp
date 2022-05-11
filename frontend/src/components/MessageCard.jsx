import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function MessageCard(props) {

  return (
    <Card sx={{ maxWidth: 300, maxHeight: 400 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {props.message.owner} 
        </Typography>
        <Typography variant="h5" component="div">
        Score: {props.message.sentimentScore}

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
