import React, { useState } from 'react';
import { TextField, Button, Box, InputAdornment } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Importando o ícone
import CircularProgress from '@mui/material/CircularProgress';

export default function ChatInputComponent({ onSubmit, thinking }) {
    const [prompt, setPrompt] = useState('');

    const handleInputChange = (event) => {
        setPrompt(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Impede a quebra de linha
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        if (prompt.trim()) {
            onSubmit(prompt);
            setPrompt(''); // Limpa o campo após o envio
            // Aqui você pode adicionar a lógica para lidar com o prompt enviado
        }
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', paddingTop: '5px', paddingBottom: '40px' }}>
            <TextField
                fullWidth
                placeholder= {thinking ? "Pensando..." : "Digite seu prompt"}
                variant="outlined"
                multiline
                maxRows={4}
                value={prompt}
                disabled={thinking}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                sx={{
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: 'transparent', // Modificado para transparente
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#888', // Você pode ajustar essa cor conforme necessário
                        borderRadius: '4px',
                        '&:hover': {
                            backgroundColor: '#555', // E também esta cor
                        },
                    }
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button
                                variant="contained"
                                onClick={handleSubmit}
                                disabled={thinking}
                                style={{ backgroundColor: '#000d3c', color: 'white' }}> {/* Estilo personalizado */}
                                {thinking ? <CircularProgress color="inherit" size={25}/> : <ArrowUpwardIcon />} {/* Ícone de seta */}

                            </Button>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
}
