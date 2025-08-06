import React from 'react';
import './CustomersSay.css';

const CustomersSay = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      comment: "Amazing food and great atmosphere! The Greek salad was incredible."
    },
    {
      id: 2,
      name: "Mike R.",
      rating: 5,
      comment: "Best Mediterranean food in the city. Highly recommend the bruschetta!"
    },
    {
      id: 3,
      name: "Lisa T.",
      rating: 4,
      comment: "Great service and delicious food. Will definitely come back!"
    }
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <span key={index} className={`star ${index < testimonial.rating ? 'filled' : ''}`}>
                  ★
                </span>
              ))}
            </div>
            <p className="testimonial-text">{testimonial.comment}</p>
            <p className="testimonial-author">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomersSay; 