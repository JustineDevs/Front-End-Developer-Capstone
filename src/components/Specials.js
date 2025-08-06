import React from 'react';
import { Link } from 'react-router-dom';
import './Specials.css';

const Specials = () => {
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

  return (
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
  );
};

export default Specials; 