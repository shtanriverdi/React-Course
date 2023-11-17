import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Box from '@mui/system/Box';

import { useState } from 'react';

export default function FormDemo() {
    const [name, setName] = useState("");
    const updateName = (e) => setName(e.target.value);

    const [volume, setVolume] = useState("");
    const updateVolume = (e, newNalue) => setVolume(newNalue);

    return (
        <div>
            <Box
                sx={{
                    width: 100,
                    height: 100,
                    borderRadius: 1,
                    bgcolor: 'green',
                    '&:hover': {
                        bgcolor: 'primary.dark',
                    },
                }}
            />

            <Box component="section" sx={{ p: 6, border: '1px dashed grey', bgcolor: 'lightblue', }}>
                <TextField
                    onChange={updateName}
                    value={name}
                    id="outlined-basic"
                    placeholder="Fido"
                    label="Puppy Name"
                    variant="outlined"
                />
            </Box>

            <h1>name is:</h1>
            <h2>{name}</h2>
            <TextField
                onChange={updateName}
                value={name}
                id="outlined-basic"
                placeholder="Fido"
                label="Puppy Name"
                variant="outlined"
            />
            <br />

            <h2>{volume}</h2>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <VolumeDown />
                <Slider
                    aria-label="Volume"
                    value={volume}
                    onChange={updateVolume}
                />
                <VolumeUp />
            </Stack>
        </div>
    );
}
