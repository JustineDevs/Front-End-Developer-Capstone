import React from 'react';
import BookingSlot from './BookingSlot';
import './BookingSlots.css';

const BookingSlots = ({ availableTimes, selectedDate, onTimeSelect }) => {
  // Mock data for booked times - in a real app this would come from an API
  const bookedTimes = ['19:00']; // Example: 7 PM is booked

  return (
    <div className="booking-slots">
      <h3>Available Times for {selectedDate || 'Selected Date'}</h3>
      <div className="slots-container">
        {availableTimes.map((time) => (
          <BookingSlot
            key={time}
            time={time}
            isAvailable={!bookedTimes.includes(time)}
            onSelect={onTimeSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default BookingSlots; 