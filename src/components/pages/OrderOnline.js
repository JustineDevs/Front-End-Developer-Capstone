import React, { useState } from 'react';
import './OrderOnline.css';

const OrderOnline = () => {
  const [cart, setCart] = useState([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const menuItems = [
    {
      id: 1,
      name: "Greek Salad",
      description: "Fresh mixed greens, tomatoes, cucumbers, red onions, olives, and feta cheese",
      price: 12.99,
      category: "appetizers",
      image: "greek-salad.jpg"
    },
    {
      id: 2,
      name: "Bruschetta",
      description: "Grilled bread topped with diced tomatoes, garlic, fresh basil, and olive oil",
      price: 8.99,
      category: "appetizers",
      image: "bruschetta.jpg"
    },
    {
      id: 3,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon grilled to perfection with lemon herb butter",
      price: 24.99,
      category: "mainCourses",
      image: "grilled-salmon.jpg"
    },
    {
      id: 4,
      name: "Lamb Souvlaki",
      description: "Tender marinated lamb skewers with tzatziki sauce and rice",
      price: 22.99,
      category: "mainCourses",
      image: "lamb-souvlaki.jpg"
    },
    {
      id: 5,
      name: "Spaghetti Carbonara",
      description: "Al dente spaghetti with pancetta, eggs, and parmesan cheese",
      price: 16.99,
      category: "pasta",
      image: "carbonara.jpg"
    },
    {
      id: 6,
      name: "Baklava",
      description: "Layers of phyllo dough filled with chopped nuts and honey syrup",
      price: 6.99,
      category: "desserts",
      image: "baklava.jpg"
    },
    {
      id: 7,
      name: "Greek Coffee",
      description: "Traditional Greek coffee prepared in a briki",
      price: 3.99,
      category: "beverages",
      image: "greek-coffee.jpg"
    },
    {
      id: 8,
      name: "Fresh Lemonade",
      description: "House-made lemonade with fresh lemons and mint",
      price: 4.99,
      category: "beverages",
      image: "lemonade.jpg"
    }
  ];

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCart(cart.map(item =>
        item.id === itemId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Please add items to your cart before checkout.');
      return;
    }
    setIsCheckoutOpen(true);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: getTotalPrice(),
      date: new Date().toISOString(),
      status: 'pending'
    };
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Clear cart and close checkout
    setCart([]);
    setIsCheckoutOpen(false);
    alert('Order submitted successfully! You will receive a confirmation email shortly.');
  };

  return (
    <div className="order-online-page">
      <div className="order-hero">
        <div className="order-hero-content">
          <h1>Order Online</h1>
          <p>Delicious Mediterranean cuisine delivered to your door</p>
        </div>
      </div>

      <div className="order-container">
        <div className="order-content">
          {/* Menu Section */}
          <div className="menu-section">
            <h2>Our Menu</h2>
            <div className="menu-grid">
              {menuItems.map((item) => (
                <div key={item.id} className="menu-card">
                  <div className="menu-card-image">
                    <div className="image-placeholder">
                      <span>{item.name}</span>
                    </div>
                  </div>
                  <div className="menu-card-content">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="menu-card-footer">
                      <span className="price">${item.price.toFixed(2)}</span>
                      <button 
                        className="add-to-cart-btn"
                        onClick={() => addToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="cart-section">
            <div className="cart-header">
              <h2>Your Cart</h2>
              <span className="cart-count">{cart.length} items</span>
            </div>
            
            {cart.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty</p>
                <p>Add some delicious items to get started!</p>
              </div>
            ) : (
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                    <div className="cart-item-controls">
                      <button 
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
                
                <div className="cart-total">
                  <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
                  <button 
                    className="checkout-btn"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Checkout Modal */}
        {isCheckoutOpen && (
          <div className="checkout-modal">
            <div className="checkout-content">
              <div className="checkout-header">
                <h2>Checkout</h2>
                <button 
                  className="close-btn"
                  onClick={() => setIsCheckoutOpen(false)}
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleOrderSubmit} className="checkout-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="address">Delivery Address *</label>
                  <textarea id="address" name="address" rows="3" required></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor="instructions">Delivery Instructions</label>
                  <textarea id="instructions" name="instructions" rows="2"></textarea>
                </div>
                
                <div className="order-summary">
                  <h3>Order Summary</h3>
                  {cart.map((item) => (
                    <div key={item.id} className="summary-item">
                      <span>{item.name} x{item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="summary-total">
                    <strong>Total: ${getTotalPrice().toFixed(2)}</strong>
                  </div>
                </div>
                
                <button type="submit" className="submit-order-btn">
                  Place Order
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderOnline; 