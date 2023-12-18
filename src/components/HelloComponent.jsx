import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ButtonBase } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function HelloComponent({ promptsSuggestions = [], sendMessageHandle }) {
    const handleClick = (prompt) => {sendMessageHandle(prompt)};

    return (
        <Box >
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} marginBottom={'10px'}>
                <img src={process.env.PUBLIC_URL + '/itau2.avif'} alt="logo" style={{ height: '80px' }} />
            </Box>
            <Box sx={{ width: '100%' }} marginBottom={'50px'}>
                <Typography variant="h4" component="h2" style={{ textAlign: 'center' }}>
                    Como posso ajudá-lo?
                </Typography>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {promptsSuggestions.map((prompt) => (
                            <Grid item xs={6} key={prompt.id}>
                            <ButtonBase onClick={() => handleClick(prompt.message)}>
                            <Item>{prompt.message}</Item>
                            </ButtonBase>
                            </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
