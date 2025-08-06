import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
  IconButton
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.dark',
        color: 'white',
        mt: 'auto',
        py: 4
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Restaurant Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              Little Lemon
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Experience authentic Mediterranean cuisine in a warm, welcoming atmosphere.
              Our passion is bringing the flavors of the Mediterranean to your table.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                size="small"
                sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: 'white', '&:hover': { color: 'secondary.main' } }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                href="/"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { color: 'secondary.main' },
                  opacity: 0.9
                }}
              >
                Home
              </Link>
              <Link
                href="/about"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { color: 'secondary.main' },
                  opacity: 0.9
                }}
              >
                About Us
              </Link>
              <Link
                href="/menu"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { color: 'secondary.main' },
                  opacity: 0.9
                }}
              >
                Menu
              </Link>
              <Link
                href="/reservations"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { color: 'secondary.main' },
                  opacity: 0.9
                }}
              >
                Reservations
              </Link>
              <Link
                href="/order-online"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  '&:hover': { color: 'secondary.main' },
                  opacity: 0.9
                }}
              >
                Order Online
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ fontSize: 20, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  123 Mediterranean Ave, Chicago, IL 60601
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ fontSize: 20, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  (555) 123-4567
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ fontSize: 20, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  info@littlelemon.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Copyright */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2024 Little Lemon. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer; 