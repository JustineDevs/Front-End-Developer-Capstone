import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Stack
} from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

function Homepage() {
  const specials = [
    {
      id: 1,
      name: 'Greek Salad',
      price: '$12.99',
      description: 'Fresh vegetables, olives, and feta cheese with our house dressing',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Bruschetta',
      price: '$8.99',
      description: 'Toasted bread topped with tomatoes, garlic, and fresh basil',
      image: 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Lemon Dessert',
      price: '$6.99',
      description: 'Homemade lemon cake with fresh berries and whipped cream',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'The best Mediterranean food I\'ve ever had! The atmosphere is wonderful and the staff is incredibly friendly.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 5,
      comment: 'Amazing flavors and authentic recipes. I love the Greek salad and the service is always excellent.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      rating: 5,
      comment: 'Perfect for family dinners. The portions are generous and the prices are very reasonable.'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.5)',
          }}
        />
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  mb: 2
                }}
              >
                Welcome to Little Lemon
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}
              >
                Experience authentic Mediterranean cuisine in a warm, welcoming atmosphere
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button
                  component={Link}
                  to="/reservations"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'secondary.main',
                    color: 'primary.dark',
                    '&:hover': {
                      backgroundColor: 'secondary.dark',
                    },
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600
                  }}
                >
                  Reserve a Table
                </Button>
                <Button
                  component={Link}
                  to="/menu"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    },
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600
                  }}
                >
                  View Menu
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Paper>

      {/* About Section */}
      <Container maxWidth="xl" sx={{ mb: 6 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
              Our Story
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
              Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes 
              served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish 
              culture and have a menu of 12-15 items that they rotate seasonally.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a 
              popular place for a meal any time of the day. Little Lemon is owned by two Italian 
              brothers, Mario and Adrian, who moved to the United States to pursue their shared 
              dream of owning a restaurant.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: 3
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop"
                alt="Restaurant interior"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover'
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Specials Section */}
      <Box sx={{ backgroundColor: 'grey.50', py: 6 }}>
        <Container maxWidth="xl">
          <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4, fontWeight: 600, color: 'primary.main' }}>
            This Week's Specials
          </Typography>
          <Grid container spacing={4}>
            {specials.map((special) => (
              <Grid item xs={12} md={4} key={special.id}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={special.image}
                    alt={special.name}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                        {special.name}
                      </Typography>
                      <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                        {special.price}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {special.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<LocalDiningIcon />}
                      sx={{ textTransform: 'none', fontWeight: 600 }}
                    >
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4, fontWeight: 600, color: 'primary.main' }}>
          What Our Customers Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <Card sx={{ height: '100%', p: 3 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', mb: 2 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Typography key={i} sx={{ color: 'secondary.main', fontSize: '1.2rem' }}>
                        ★
                      </Typography>
                    ))}
                  </Box>
                  <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                    "{testimonial.comment}"
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main' }}>
                    {testimonial.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Info */}
      <Box sx={{ backgroundColor: 'primary.dark', color: 'white', py: 4 }}>
        <Container maxWidth="xl">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <LocationOnIcon />
                <Typography variant="h6">Location</Typography>
              </Box>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                123 Mediterranean Ave<br />
                Chicago, IL 60601
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <AccessTimeIcon />
                <Typography variant="h6">Hours</Typography>
              </Box>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Mon-Fri: 11:00 AM - 10:00 PM<br />
                Sat-Sun: 10:00 AM - 11:00 PM
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <PhoneIcon />
                <Typography variant="h6">Contact</Typography>
              </Box>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                (555) 123-4567<br />
                info@littlelemon.com
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Homepage; 