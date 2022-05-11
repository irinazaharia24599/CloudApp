import React from 'react';
import MessageCard from './MessageCard.jsx';


function MessagesList() {
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
        .then(data =>
            //console.log(data)
            setMessageList(data)
        )

    return (
        <div id="MessagesList">
            <div className={classes.grid}>
                {messageList.filter((message) => {
                    return message
                }).map((message) => <MessageCard message={message} />)}
            </div>
        </div>
    );
}
