import React, { useState } from 'react';
import BookingForm from '../forms/BookingForm';
import BookingSlots from './BookingSlots';
import './BookingPage.css';

const BookingPage = ({ bookingContext }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleTimeSelect = (time) => {
    console.log('Time selected:', time);
    // In a real app, this would update the form or handle the selection
  };

  return (
    <div className="booking-page">
      <div className="container">
        <h1>Reserve a Table</h1>
        <p>Book your table at Little Lemon for an unforgettable dining experience.</p>
        
        <div className="booking-content">
          <div className="booking-info">
            <h2>Reservation Information</h2>
            <p>
              We accept reservations for parties of 2-8 people. For larger groups, 
              please contact us directly. Reservations are held for 15 minutes past 
              the scheduled time.
            </p>
            
            <div className="restaurant-hours">
              <h3>Hours of Operation</h3>
              <ul>
                <li><strong>Monday - Thursday:</strong> 11:00 AM - 10:00 PM</li>
                <li><strong>Friday - Saturday:</strong> 11:00 AM - 11:00 PM</li>
                <li><strong>Sunday:</strong> 12:00 PM - 9:00 PM</li>
              </ul>
            </div>
          </div>
          
          <div className="booking-form-container">
            <h2>Make Your Reservation</h2>
            <BookingForm 
              bookingContext={bookingContext} 
              onDateChange={setSelectedDate}
            />
            
            {selectedDate && (
              <BookingSlots
                availableTimes={bookingContext?.availableTimes || []}
                selectedDate={selectedDate}
                onTimeSelect={handleTimeSelect}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage; 