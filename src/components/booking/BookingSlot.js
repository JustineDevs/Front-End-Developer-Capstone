import React from 'react';
import './BookingSlot.css';

const BookingSlot = ({ time, isAvailable, onSelect }) => {
  return (
    <div 
      className={`booking-slot ${isAvailable ? 'available' : 'booked'}`}
      onClick={() => isAvailable && onSelect(time)}
    >
      <span className="time">{time}</span>
      <span className="status">
        {isAvailable ? 'Available' : 'Booked'}
      </span>
    </div>
  );
};

export default BookingSlot; 