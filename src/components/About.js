import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About Little Lemon</h1>
          <p>Our Story of Passion, Tradition, and Mediterranean Excellence</p>
        </div>
      </div>

      <div className="about-container">
        <section className="about-story">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Little Lemon was founded in 1995 by the Andrianos family, who brought their 
                passion for authentic Mediterranean cuisine from the sun-drenched islands of 
                Greece to the vibrant city of Chicago. What started as a small family restaurant 
                has grown into one of the city's most beloved dining destinations.
              </p>
              <p>
                Our founders, Maria and Dimitri Andrianos, immigrated to the United States 
                with nothing but their family recipes and a dream to share the rich flavors 
                and warm hospitality of the Mediterranean with their new community.
              </p>
              <p>
                Today, Little Lemon continues to be family-owned and operated, with the 
                second generation of Andrianos taking the helm while staying true to the 
                traditional recipes and values that made us who we are.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>Family Photo</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-philosophy">
          <div className="philosophy-content">
            <h2>Our Philosophy</h2>
            <div className="philosophy-grid">
              <div className="philosophy-item">
                <div className="philosophy-icon">🌿</div>
                <h3>Fresh Ingredients</h3>
                <p>
                  We source only the freshest, highest-quality ingredients, working with 
                  local farmers and suppliers whenever possible to ensure the best flavors 
                  and support our community.
                </p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">👨‍🍳</div>
                <h3>Traditional Recipes</h3>
                <p>
                  Our menu features time-honored recipes passed down through generations, 
                  prepared with modern techniques and presented with contemporary flair 
                  while maintaining authentic Mediterranean flavors.
                </p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">❤️</div>
                <h3>Family Values</h3>
                <p>
                  We believe that great food brings people together. Every dish is prepared 
                  with love and care, creating an atmosphere where families and friends can 
                  gather and create lasting memories.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-team">
          <div className="team-content">
            <h2>Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  <div className="image-placeholder">
                    <span>Chef Dimitri</span>
                  </div>
                </div>
                <h3>Dimitri Andrianos</h3>
                <p className="member-title">Executive Chef & Co-Owner</p>
                <p>
                  With over 30 years of culinary experience, Dimitri brings his passion 
                  for Mediterranean cuisine to every dish. His expertise in traditional 
                  Greek cooking techniques ensures authentic flavors in every bite.
                </p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <div className="image-placeholder">
                    <span>Chef Maria</span>
                  </div>
                </div>
                <h3>Maria Andrianos</h3>
                <p className="member-title">Pastry Chef & Co-Owner</p>
                <p>
                  Maria's expertise in Mediterranean pastries and desserts has made her 
                  famous throughout Chicago. Her baklava and galaktoboureko are customer 
                  favorites and family recipes passed down for generations.
                </p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <div className="image-placeholder">
                    <span>Manager Alex</span>
                  </div>
                </div>
                <h3>Alex Andrianos</h3>
                <p className="member-title">General Manager</p>
                <p>
                  The next generation of the Andrianos family, Alex ensures that every 
                  guest receives the warm, family-style hospitality that Little Lemon 
                  is known for, while managing day-to-day operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-awards">
          <div className="awards-content">
            <h2>Awards & Recognition</h2>
            <div className="awards-grid">
              <div className="award-item">
                <div className="award-icon">🏆</div>
                <h3>Best Mediterranean Restaurant</h3>
                <p>Chicago Food Awards 2023</p>
              </div>
              <div className="award-item">
                <div className="award-icon">⭐</div>
                <h3>4.8/5 Stars</h3>
                <p>Google Reviews (500+ reviews)</p>
              </div>
              <div className="award-item">
                <div className="award-icon">🍽️</div>
                <h3>Excellence in Service</h3>
                <p>Chicago Restaurant Association 2022</p>
              </div>
              <div className="award-item">
                <div className="award-icon">🌱</div>
                <h3>Sustainable Restaurant</h3>
                <p>Green Restaurant Certification 2023</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-location">
          <div className="location-content">
            <h2>Visit Us</h2>
            <div className="location-grid">
              <div className="location-info">
                <h3>Location</h3>
                <p>123 Main Street<br />Chicago, IL 60601</p>
                <h3>Hours</h3>
                <p>
                  Monday - Thursday: 11:00 AM - 10:00 PM<br />
                  Friday - Saturday: 11:00 AM - 11:00 PM<br />
                  Sunday: 12:00 PM - 9:00 PM
                </p>
                <h3>Contact</h3>
                <p>
                  Phone: (312) 555-0123<br />
                  Email: info@littlelemon.com
                </p>
              </div>
              <div className="location-map">
                <div className="image-placeholder">
                  <span>Map Location</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 