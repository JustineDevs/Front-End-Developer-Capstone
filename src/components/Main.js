import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeTimes, updateTimes } from '../utils/bookingReducer';
import './Main.css';

function Main({ children }) {
  const navigate = useNavigate();
  
  // Use useReducer for available times state
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  // Function to submit the booking form
  const submitForm = async (formData) => {
    try {
      // Use the API to submit the booking
      if (typeof window !== 'undefined' && window.submitAPI) {
        const success = await window.submitAPI(formData);
        
        if (success) {
          // Navigate to the booking confirmation page
          navigate('/booking-confirmed');
          return true;
        } else {
          console.error('Booking submission failed');
          return false;
        }
      } else {
        // Fallback if API is not available - simulate success
        console.log('API not available, simulating successful booking');
        navigate('/booking-confirmed');
        return true;
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      return false;
    }
  };

  // Create context value to pass down to children
  const bookingContext = {
    availableTimes,
    dispatch,
    submitForm
  };

  return (
    <main className="main">
      {React.Children.map(children, child => {
        // Clone children and pass booking context as props
        return React.cloneElement(child, { bookingContext });
      })}
    </main>
  );
}

export default Main; 