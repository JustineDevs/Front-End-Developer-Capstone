import React from 'react';
import './Chicago.css';

const Chicago = () => {
  return (
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
  );
};

export default Chicago; 