import React from 'react';
import './LayoutTest.css';

function LayoutTest() {
  return (
    <div className="layout-test">
      <div className="container">
        <h1 className="text-center">Responsive Layout Test</h1>
        
        {/* Grid System Test */}
        <section className="grid-test">
          <h2>CSS Grid System</h2>
          <div className="grid grid-3 gap-4">
            <div className="test-card">
              <h3>Grid Item 1</h3>
              <p>This demonstrates the responsive grid system. On mobile, this will stack vertically.</p>
            </div>
            <div className="test-card">
              <h3>Grid Item 2</h3>
              <p>On tablets, this will show 2 columns. On desktop, it will show 3 columns.</p>
            </div>
            <div className="test-card">
              <h3>Grid Item 3</h3>
              <p>The grid automatically adjusts based on screen size using CSS Grid.</p>
            </div>
          </div>
        </section>

        {/* Flexbox System Test */}
        <section className="flex-test">
          <h2>Flexbox System</h2>
          <div className="flex flex-wrap gap-4">
            <div className="test-card flex-1">
              <h3>Flex Item 1</h3>
              <p>This uses flexbox with flex-1 to take equal space.</p>
            </div>
            <div className="test-card flex-1">
              <h3>Flex Item 2</h3>
              <p>Flexbox provides flexible layouts that adapt to content.</p>
            </div>
            <div className="test-card flex-1">
              <h3>Flex Item 3</h3>
              <p>Items will wrap to new lines on smaller screens.</p>
            </div>
          </div>
        </section>

        {/* Container System Test */}
        <section className="container-test">
          <h2>Container System</h2>
          <div className="container-sm">
            <div className="test-card">
              <h3>Small Container</h3>
              <p>This container has a max-width of 576px and centers content.</p>
            </div>
          </div>
          <div className="container-md">
            <div className="test-card">
              <h3>Medium Container</h3>
              <p>This container has a max-width of 768px for tablet layouts.</p>
            </div>
          </div>
          <div className="container-lg">
            <div className="test-card">
              <h3>Large Container</h3>
              <p>This container has a max-width of 992px for desktop layouts.</p>
            </div>
          </div>
        </section>

        {/* Responsive Utilities Test */}
        <section className="utilities-test">
          <h2>Responsive Utilities</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="test-card text-center">
              <h3>Centered Text</h3>
              <p>This text is centered using the text-center utility class.</p>
            </div>
            <div className="test-card text-left">
              <h3>Left Aligned</h3>
              <p>This text is left-aligned using the text-left utility class.</p>
            </div>
            <div className="test-card text-right">
              <h3>Right Aligned</h3>
              <p>This text is right-aligned using the text-right utility class.</p>
            </div>
          </div>
        </section>

        {/* Spacing Utilities Test */}
        <section className="spacing-test">
          <h2>Spacing Utilities</h2>
          <div className="grid grid-2 gap-8">
            <div className="test-card p-4">
              <h3>Padding Test</h3>
              <p>This card uses p-4 for padding (1rem on all sides).</p>
            </div>
            <div className="test-card m-4">
              <h3>Margin Test</h3>
              <p>This card uses m-4 for margin (1rem on all sides).</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LayoutTest; 