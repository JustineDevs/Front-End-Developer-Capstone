import React, { useState } from 'react';
import './Reservations.css';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
    specialRequests: ''
  });

  const [isOccasionOpen, setIsOccasionOpen] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState('');

  const occasions = [
    { value: 'birthday', label: 'Birthday' },
    { value: 'engagement', label: 'Engagement' },
    { value: 'anniversary', label: 'Anniversary' },
    { value: 'business', label: 'Business' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOccasionSelect = (occasion) => {
    setSelectedOccasion(occasion);
    setFormData(prev => ({
      ...prev,
      occasion: occasion
    }));
    setIsOccasionOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage for persistence
    const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    const newReservation = {
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    reservations.push(newReservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      occasion: '',
      specialRequests: ''
    });
    setSelectedOccasion('');
    
    alert('Reservation submitted successfully!');
  };

  return (
    <div className="reservations">
      <div className="reservations-container">
        <div className="reservations-header">
          <h1>Reserve a Table</h1>
          <p>Book your table at Little Lemon for an unforgettable dining experience</p>
        </div>

        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time *</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a time</option>
                <option value="17:00">5:00 PM</option>
                <option value="17:30">5:30 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="18:30">6:30 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="20:30">8:30 PM</option>
                <option value="21:00">9:00 PM</option>
                <option value="21:30">9:30 PM</option>
                <option value="22:00">10:00 PM</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of Guests *</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                required
              >
                <option value="">Select number of guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7">7 Guests</option>
                <option value="8">8 Guests</option>
                <option value="9">9 Guests</option>
                <option value="10">10+ Guests</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="occasion">Occasion</label>
              <div className="dropdown-container">
                <div 
                  className={`dropdown ${isOccasionOpen ? 'open' : ''} ${selectedOccasion ? 'selected' : ''}`}
                  onClick={() => setIsOccasionOpen(!isOccasionOpen)}
                >
                  <span className="dropdown-text">
                    {selectedOccasion || 'Select occasion'}
                  </span>
                  <span className="dropdown-arrow">▼</span>
                </div>
                {isOccasionOpen && (
                  <div className="dropdown-options">
                    {occasions.map((occasion) => (
                      <div
                        key={occasion.value}
                        className="dropdown-option"
                        onClick={() => handleOccasionSelect(occasion.label)}
                      >
                        {occasion.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="specialRequests">Special Requests</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              placeholder="Any special requests or dietary requirements?"
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Reserve Table
          </button>
        </form>

        <div className="reservation-info">
          <h3>Reservation Information</h3>
          <ul>
            <li>Reservations are held for 15 minutes past the booking time</li>
            <li>Please arrive 5-10 minutes before your reservation</li>
            <li>For parties of 8 or more, please call us directly</li>
            <li>Cancellations must be made at least 24 hours in advance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reservations; 