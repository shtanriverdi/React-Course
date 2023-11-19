import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function AddTodo() {
    const [item, setItem] = useState({
        id: 1,
        title: 'Morning Exercise',
        description: 'Small exercises in the morning for back and neck',
        done: false,
        priority: 1,
        backgroundColor: '#fff'
    });

    return (
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    );
}