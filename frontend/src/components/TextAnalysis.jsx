import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function MultilineTextFields() {
    const [text, setText] = React.useState("");
    const [author, setAuthor] = React.useState("");

    const handleChangeText = (event) => {
        setText(event.target.value);
    };

    const handleChangeAuthor = (event) => {
        setAuthor(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let message = {
            owner: author,
            textContent: text
        }

        try {
            fetch(`http://localhost:8080/`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(message)
            })
                .then(response => response.json())
                .then(res => console.log(res));
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 2, width: '50%' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        label="Your name"
                        value={author}
                        onChange={handleChangeAuthor}
                        variant="filled"
                        type="text"
                    />
                    <TextField
                        label="Your message"
                        multiline
                        rows={3}
                        maxRows={4}
                        value={text}
                        onChange={handleChangeText}
                        variant="filled"
                        type="text"
                    />
                </div>
                <Button
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Analyze text</Button>
            </Box>
        </div>

    );
}