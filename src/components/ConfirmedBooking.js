import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmedBooking.css';

const ConfirmedBooking = () => {
  return (
    <div className="confirmed-booking">
      <div className="container">
        <div className="confirmation-card">
          <div className="confirmation-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <h1>Booking Confirmed!</h1>
          <p className="confirmation-message">
            Thank you for your reservation at Little Lemon. Your table has been successfully booked.
          </p>
          
          <div className="confirmation-details">
            <h2>Reservation Details</h2>
            <p>We've sent a confirmation email with all the details of your reservation.</p>
            <p>Please arrive 5 minutes before your scheduled time.</p>
          </div>
          
          <div className="confirmation-actions">
            <Link to="/" className="btn-primary">
              Return to Home
            </Link>
            <Link to="/booking" className="btn-secondary">
              Make Another Reservation
            </Link>
          </div>
          
          <div className="contact-info">
            <h3>Need to make changes?</h3>
            <p>Contact us at <strong>(555) 123-4567</strong> or email <strong>reservations@littlelemon.com</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedBooking; 