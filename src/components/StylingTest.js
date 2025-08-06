import React from 'react';
import './StylingTest.css';

function StylingTest() {
  return (
    <div className="styling-test">
      <div className="container">
        <h1 className="text-center">HTML Element Styling Test</h1>
        
        {/* Typography Section */}
        <section className="test-section">
          <h2>Typography System</h2>
          
          <div className="typography-demo">
            <h1>Heading 1 - Main Title</h1>
            <h2>Heading 2 - Section Title</h2>
            <h3>Heading 3 - Subsection Title</h3>
            <h4>Heading 4 - Minor Title</h4>
            <h5>Heading 5 - Small Title</h5>
            <h6>Heading 6 - Tiny Title</h6>
            
            <p>This is a regular paragraph with <strong>bold text</strong> and <em>italic text</em>. It demonstrates the typography system with proper line height and spacing.</p>
            
            <p>Another paragraph to show spacing between elements. This includes <span className="text-secondary">colored spans</span> and <span className="text-muted">muted text</span>.</p>
          </div>
        </section>

        {/* Navigation Section */}
        <section className="test-section">
          <h2>Navigation Elements</h2>
          
          <nav className="demo-nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reservations">Reservations</a></li>
              <li><a href="#order">Order Online</a></li>
              <li><a href="#login">Login</a></li>
            </ul>
          </nav>
          
          <div className="list-demo">
            <h3>List Styles</h3>
            <ul>
              <li>Unordered list item 1</li>
              <li>Unordered list item 2</li>
              <li>Unordered list item 3</li>
            </ul>
            
            <ol>
              <li>Ordered list item 1</li>
              <li>Ordered list item 2</li>
              <li>Ordered list item 3</li>
            </ol>
          </div>
        </section>

        {/* Image Section */}
        <section className="test-section">
          <h2>Image Styles</h2>
          
          <div className="image-demo">
            <div className="image-grid">
              <div>
                <h4>Default Image</h4>
                <div className="image-placeholder">
                  <span>Default Image</span>
                </div>
              </div>
              
              <div>
                <h4>Rounded Image</h4>
                <div className="image-placeholder rounded">
                  <span>Rounded Image</span>
                </div>
              </div>
              
              <div>
                <h4>Circular Image</h4>
                <div className="image-placeholder circular">
                  <span>Circular</span>
                </div>
              </div>
              
              <div>
                <h4>No Shadow Image</h4>
                <div className="image-placeholder no-shadow">
                  <span>No Shadow</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Button Section */}
        <section className="test-section">
          <h2>Button Styles</h2>
          
          <div className="button-demo">
            <div className="button-group">
              <h4>Primary Buttons</h4>
              <button className="btn-primary">Primary Button</button>
              <button className="btn-primary btn-sm">Small Primary</button>
              <button className="btn-primary btn-lg">Large Primary</button>
            </div>
            
            <div className="button-group">
              <h4>Secondary Buttons</h4>
              <button className="btn-secondary">Secondary Button</button>
              <button className="btn-secondary btn-sm">Small Secondary</button>
              <button className="btn-secondary btn-lg">Large Secondary</button>
            </div>
            
            <div className="button-group">
              <h4>Outline Buttons</h4>
              <button className="btn-outline">Outline Button</button>
              <button className="btn-outline btn-sm">Small Outline</button>
              <button className="btn-outline btn-lg">Large Outline</button>
            </div>
          </div>
        </section>

        {/* Link Section */}
        <section className="test-section">
          <h2>Link Styles</h2>
          
          <div className="link-demo">
            <p>This is a <a href="#default">default link</a> with hover effects.</p>
            <p>This is a <a href="#primary" className="primary">primary link</a> with special styling.</p>
            <p>This is a <a href="#secondary" className="secondary">secondary link</a> with different styling.</p>
          </div>
        </section>

        {/* Form Section */}
        <section className="test-section">
          <h2>Form Elements</h2>
          
          <div className="form-demo">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Enter your message" rows="4"></textarea>
              </div>
              
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select id="category">
                  <option value="">Select a category</option>
                  <option value="general">General</option>
                  <option value="support">Support</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              
              <button type="submit" className="btn-primary">Submit Form</button>
            </form>
          </div>
        </section>

        {/* Card Section */}
        <section className="test-section">
          <h2>Card Styles</h2>
          
          <div className="card-demo">
            <div className="grid grid-3 gap-4">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Card Title 1</h3>
                </div>
                <div className="card-body">
                  <p>This is a basic card with header and body content. It demonstrates the card styling system.</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Card Title 2</h3>
                </div>
                <div className="card-body">
                  <p>Another card example showing consistent styling and hover effects.</p>
                </div>
              </div>
              
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Card Title 3</h3>
                </div>
                <div className="card-body">
                  <p>Third card to demonstrate the grid layout and responsive behavior.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Utility Classes Section */}
        <section className="test-section">
          <h2>Utility Classes</h2>
          
          <div className="utility-demo">
            <div className="grid grid-2 gap-4">
              <div>
                <h4>Text Colors</h4>
                <p className="text-primary">Primary text color</p>
                <p className="text-secondary">Secondary text color</p>
                <p className="text-muted">Muted text color</p>
                <p className="text-light bg-primary p-2 rounded">Light text on dark background</p>
              </div>
              
              <div>
                <h4>Background Colors</h4>
                <div className="bg-primary text-light p-2 rounded mb-2">Primary background</div>
                <div className="bg-secondary text-primary p-2 rounded mb-2">Secondary background</div>
                <div className="bg-accent p-2 rounded mb-2">Accent background</div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4>Border Radius & Shadows</h4>
              <div className="flex gap-4">
                <div className="bg-secondary p-3 rounded-sm">Small radius</div>
                <div className="bg-secondary p-3 rounded">Default radius</div>
                <div className="bg-secondary p-3 rounded-lg">Large radius</div>
                <div className="bg-secondary p-3 rounded-full">Full radius</div>
              </div>
              
              <div className="flex gap-4 mt-4">
                <div className="bg-light p-3 shadow-sm">Small shadow</div>
                <div className="bg-light p-3 shadow">Default shadow</div>
                <div className="bg-light p-3 shadow-lg">Large shadow</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default StylingTest; 