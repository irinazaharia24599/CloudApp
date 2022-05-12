import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from './AppBar.jsx';
import TextAnalysis from './TextAnalysis.jsx';
import MessageCard from './MessageCard.jsx';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';


const useStyles = makeStyles((theme) => ({
    grid: {
        display: "flex",
        flexWrap: "wrap",
        margin: "10px",
        // marginRight: "10px"

    }
}))

function MainPage() {
    const classes = useStyles();

    const [messageList, setMessageList] = React.useState([]);

    fetch(`http://localhost:8080/`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(result =>
            result.json()
        )
        .then(data => {
            setMessageList(data.messages)
            //console.log(data.messages)
        }
        )

    return (
        <div id="MainPage">
            <AppBar />
            <TextAnalysis />
            <Divider variant="middle" sx={{ m: 2 }} />
            <Typography variant="h4" gutterBottom component="div" color="text.secondary">
                See what other users analyzed:
            </Typography>

            <div className={classes.grid}>
                {messageList.map((message) => <MessageCard message={message} />)}
            </div>
        </div>
    );
}

export default MainPage;