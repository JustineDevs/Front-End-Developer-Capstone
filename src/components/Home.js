import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const highlights = [
    {
      id: 1,
      name: "Greek Salad",
      description: "Fresh vegetables, olives, and feta cheese with our house dressing",
      price: "$12.99",
      image: "greek-salad.jpg"
    },
    {
      id: 2,
      name: "Bruschetta",
      description: "Grilled bread topped with tomatoes, garlic, and fresh basil",
      price: "$8.99",
      image: "bruschetta.jpg"
    },
    {
      id: 3,
      name: "Lemon Dessert",
      description: "Homemade lemon cake with fresh berries and whipped cream",
      price: "$6.99",
      image: "lemon-dessert.jpg"
    }
  ];

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
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago, Illinois</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional 
            recipes served with a modern twist. Our dishes are made with the finest 
            ingredients and prepared with love and care.
          </p>
          <Link to="/reservations" className="cta-button">
            Reserve a Table
          </Link>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <span>Restaurant Image</span>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights">
        <div className="highlights-header">
          <h2>This Week's Specials</h2>
          <Link to="/order-online" className="order-button">
            Order Online
          </Link>
        </div>
        <div className="highlights-grid">
          {highlights.map((item) => (
            <div key={item.id} className="highlight-card">
              <div className="highlight-image">
                <div className="image-placeholder">
                  <span>{item.name}</span>
                </div>
              </div>
              <div className="highlight-content">
                <div className="highlight-header">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.description}</p>
                <button className="order-delivery-btn">Order Delivery</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
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

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <div className="about-text">
            <h2>About Little Lemon</h2>
            <p>
              Little Lemon is a family-owned Mediterranean restaurant located in the heart of Chicago. 
              Our story began in 1995 when our founders brought their passion for authentic Mediterranean 
              cuisine to the Windy City.
            </p>
            <p>
              We pride ourselves on using only the freshest ingredients, sourced locally whenever possible. 
              Our menu features traditional recipes passed down through generations, prepared with modern 
              techniques and presented with contemporary flair.
            </p>
            <p>
              At Little Lemon, we believe that great food brings people together. Whether you're joining 
              us for a romantic dinner, a family celebration, or a casual lunch with friends, we're 
              committed to providing an exceptional dining experience that will keep you coming back.
            </p>
          </div>
          <div className="about-images">
            <div className="image-placeholder">
              <span>Restaurant Interior</span>
            </div>
            <div className="image-placeholder">
              <span>Chef at Work</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 