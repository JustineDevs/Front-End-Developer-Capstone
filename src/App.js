import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';
import './styles/App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Main from './components/layout/Main';
import Homepage from './components/pages/Homepage';
import About from './components/pages/About';
import Menu from './components/pages/Menu';
import Reservations from './components/pages/Reservations';
import OrderOnline from './components/pages/OrderOnline';
import Login from './components/forms/Login';
import BookingPage from './components/booking/BookingPage';
import ConfirmedBooking from './components/booking/ConfirmedBooking';
import LayoutTest from './components/ui/LayoutTest';
import StylingTest from './components/ui/StylingTest';
import Footer from './components/layout/Footer';

// Create a professional theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#495E57', // Little Lemon green
      light: '#6B7A75',
      dark: '#2E3A36',
    },
    secondary: {
      main: '#F4CE14', // Little Lemon yellow
      light: '#F7D94A',
      dark: '#D4B800',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#6C757D',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          padding: '12px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Header />
          <Nav />
          <Main>
            <Container maxWidth="xl" sx={{ py: 4 }}>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
                <Route path="/order-online" element={<OrderOnline />} />
                <Route path="/login" element={<Login />} />
                <Route path="/layout-test" element={<LayoutTest />} />
                <Route path="/styling-test" element={<StylingTest />} />
              </Routes>
            </Container>
          </Main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
