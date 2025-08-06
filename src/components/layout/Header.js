import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';

function Header() {
  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{
        backgroundColor: 'primary.main',
        borderBottom: '1px solid',
        borderColor: 'primary.light',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <RestaurantIcon 
              sx={{ 
                fontSize: 32, 
                color: 'secondary.main',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }} 
            />
            <Typography 
              variant="h4" 
              component="h1"
              sx={{ 
                fontWeight: 700,
                color: 'white',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                letterSpacing: '0.5px'
              }}
            >
              Little Lemon
            </Typography>
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255,255,255,0.8)',
                fontStyle: 'italic',
                letterSpacing: '0.5px'
              }}
            >
              Mediterranean Cuisine
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header; 