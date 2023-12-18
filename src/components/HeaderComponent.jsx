import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function HeaderComponent() {
    return (
        <AppBar position="sticky" style={{ background: '#ff6200' }}>
            <Toolbar>
                <img src={process.env.PUBLIC_URL + '/itau.avif'} alt="logo" style={{ height: '40px', marginRight: '10px' }} />
                <Typography variant="h6" color="inherit" component="div">
                    Assistente Virtual - Política de Risco de Crédito
                </Typography>
                {/* Aqui você pode adicionar mais elementos ao seu cabeçalho, se necessário */}
            </Toolbar>
        </AppBar>
    );
}
