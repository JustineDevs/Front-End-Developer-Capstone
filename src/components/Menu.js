import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuData = {
    appetizers: [
      {
        id: 1,
        name: "Greek Salad",
        description: "Fresh mixed greens, tomatoes, cucumbers, red onions, olives, and feta cheese with our house dressing",
        price: "$12.99",
        image: "greek-salad.jpg"
      },
      {
        id: 2,
        name: "Bruschetta",
        description: "Grilled bread topped with diced tomatoes, garlic, fresh basil, and extra virgin olive oil",
        price: "$8.99",
        image: "bruschetta.jpg"
      },
      {
        id: 3,
        name: "Hummus",
        description: "Creamy chickpea dip with tahini, lemon, and garlic, served with warm pita bread",
        price: "$7.99",
        image: "hummus.jpg"
      }
    ],
    mainCourses: [
      {
        id: 4,
        name: "Grilled Salmon",
        description: "Fresh Atlantic salmon grilled to perfection with lemon herb butter and seasonal vegetables",
        price: "$24.99",
        image: "grilled-salmon.jpg"
      },
      {
        id: 5,
        name: "Lamb Souvlaki",
        description: "Tender marinated lamb skewers with tzatziki sauce, served with rice and grilled vegetables",
        price: "$22.99",
        image: "lamb-souvlaki.jpg"
      },
      {
        id: 6,
        name: "Moussaka",
        description: "Layered eggplant, ground beef, and béchamel sauce, baked to golden perfection",
        price: "$20.99",
        image: "moussaka.jpg"
      },
      {
        id: 7,
        name: "Chicken Souvlaki",
        description: "Marinated chicken breast skewers with garlic sauce, served with Greek salad and pita",
        price: "$18.99",
        image: "chicken-souvlaki.jpg"
      }
    ],
    pasta: [
      {
        id: 8,
        name: "Spaghetti Carbonara",
        description: "Al dente spaghetti with pancetta, eggs, parmesan cheese, and black pepper",
        price: "$16.99",
        image: "carbonara.jpg"
      },
      {
        id: 9,
        name: "Penne Arrabbiata",
        description: "Penne pasta in a spicy tomato sauce with garlic, red chili peppers, and fresh basil",
        price: "$15.99",
        image: "arrabbiata.jpg"
      }
    ],
    desserts: [
      {
        id: 10,
        name: "Baklava",
        description: "Layers of phyllo dough filled with chopped nuts and sweetened with honey syrup",
        price: "$6.99",
        image: "baklava.jpg"
      },
      {
        id: 11,
        name: "Galaktoboureko",
        description: "Custard pie wrapped in phyllo dough, topped with sweet syrup",
        price: "$7.99",
        image: "galaktoboureko.jpg"
      },
      {
        id: 12,
        name: "Lemon Cake",
        description: "Homemade lemon cake with fresh berries and whipped cream",
        price: "$6.99",
        image: "lemon-cake.jpg"
      }
    ],
    beverages: [
      {
        id: 13,
        name: "Greek Coffee",
        description: "Traditional Greek coffee prepared in a briki, served with a glass of water",
        price: "$3.99",
        image: "greek-coffee.jpg"
      },
      {
        id: 14,
        name: "Fresh Lemonade",
        description: "House-made lemonade with fresh lemons and a hint of mint",
        price: "$4.99",
        image: "lemonade.jpg"
      },
      {
        id: 15,
        name: "Greek Wine",
        description: "Selection of premium Greek wines, available by the glass or bottle",
        price: "$8.99",
        image: "greek-wine.jpg"
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Menu' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mainCourses', name: 'Main Courses' },
    { id: 'pasta', name: 'Pasta' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      return Object.values(menuData).flat();
    }
    return menuData[activeCategory] || [];
  };

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <div className="menu-hero-content">
          <h1>Our Menu</h1>
          <p>Discover the authentic flavors of the Mediterranean</p>
        </div>
      </div>

      <div className="menu-container">
        {/* Category Filter */}
        <div className="menu-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="menu-grid">
          {getFilteredItems().map((item) => (
            <div key={item.id} className="menu-item">
              <div className="menu-item-image">
                <div className="image-placeholder">
                  <span>{item.name}</span>
                </div>
              </div>
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p className="menu-item-description">{item.description}</p>
                <button className="order-btn">Order Now</button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Dietary Information */}
        <div className="dietary-info">
          <h2>Special Dietary Accommodations</h2>
          <div className="dietary-grid">
            <div className="dietary-item">
              <span className="dietary-icon">🌱</span>
              <h3>Vegetarian Options</h3>
              <p>We offer a variety of vegetarian dishes made with fresh, seasonal ingredients.</p>
            </div>
            <div className="dietary-item">
              <span className="dietary-icon">🥜</span>
              <h3>Allergy Friendly</h3>
              <p>Please inform our staff of any allergies, and we'll be happy to accommodate your needs.</p>
            </div>
            <div className="dietary-item">
              <span className="dietary-icon">🌾</span>
              <h3>Gluten-Free</h3>
              <p>Several gluten-free options available. Ask your server for recommendations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu; 