# Little Lemon HTML Element Styling System

## Overview

This document outlines the comprehensive styling system implemented for all HTML elements in the Little Lemon restaurant website. The system provides consistent, accessible, and responsive styling for typography, navigation, images, buttons, forms, and other UI elements.

## Design System

### Color Palette
- **Primary**: `#495E57` (Dark Green)
- **Secondary**: `#F4CE14` (Yellow)
- **Accent**: `#EDEFEE` (Light Gray)
- **Text Dark**: `#495E57`
- **Text Light**: `#EDEFEE`
- **Muted**: `#666` (Gray)
- **White**: `#ffffff`

### Typography
- **Font Family**: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif
- **Base Font Size**: 16px (1rem)
- **Line Height**: 1.6
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

## HTML Element Styling

### 1. Typography Elements

#### Headings (h1, h2, h3, h4, h5, h6)
```css
h1 {
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #495E57;
}

h2 {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #495E57;
}

h3 {
  font-size: clamp(1.5rem, 4vw, 1.75rem);
  font-weight: 600;
  color: #495E57;
}
```

**Features:**
- Responsive font sizing using `clamp()`
- Consistent color scheme
- Proper letter spacing for readability
- Mobile-first responsive design

#### Paragraphs (p)
```css
p {
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  line-height: 1.6;
  color: #495E57;
  margin-bottom: 1rem;
  font-weight: 400;
}
```

#### Spans (span)
```css
span {
  font-size: inherit;
  color: inherit;
  font-weight: inherit;
}
```

#### Emphasis Elements
```css
em {
  font-style: italic;
  color: #495E57;
}

strong {
  font-weight: 700;
  color: #495E57;
}
```

### 2. Navigation Elements

#### Navigation Container (nav)
```css
nav {
  background-color: #EDEFEE;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

#### Navigation Lists (nav ul, nav li)
```css
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 2rem;
}

nav li {
  margin: 0;
  position: relative;
}
```

#### Navigation Links (nav a)
```css
nav a {
  text-decoration: none;
  color: #495E57;
  font-weight: 500;
  font-size: 1rem;
  padding: 1rem 0;
  display: block;
  transition: all 0.3s ease;
  position: relative;
}

nav a:hover {
  color: #F4CE14;
}

nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #F4CE14;
  transition: width 0.3s ease;
}

nav a:hover::after {
  width: 100%;
}
```

#### General Lists (ul, ol, li)
```css
ul, ol {
  margin: 0 0 1rem 0;
  padding-left: 1.5rem;
}

ul {
  list-style-type: disc;
}

ol {
  list-style-type: decimal;
}

li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
  color: #495E57;
}
```

### 3. Image Elements

#### Base Image Styles (img)
```css
img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

img:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

#### Image Variations
```css
img.rounded {
  border-radius: 12px;
}

img.circular {
  border-radius: 50%;
}

img.no-shadow {
  box-shadow: none;
}

img.no-shadow:hover {
  transform: none;
  box-shadow: none;
}
```

### 4. Button Elements

#### Base Button Styles (button)
```css
button {
  cursor: pointer;
  font-family: inherit;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  line-height: 1.5;
}
```

#### Button Variations
```css
/* Primary Button */
.btn-primary {
  background-color: #F4CE14;
  color: #495E57;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: 2px solid #F4CE14;
}

.btn-primary:hover {
  background-color: #EDEFEE;
  color: #495E57;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Secondary Button */
.btn-secondary {
  background-color: #495E57;
  color: #F4CE14;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: 2px solid #495E57;
}

/* Outline Button */
.btn-outline {
  background-color: transparent;
  color: #495E57;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: 2px solid #495E57;
}

/* Size Variations */
.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}
```

### 5. Link Elements

#### Base Link Styles (a)
```css
a {
  text-decoration: none;
  color: #495E57;
  transition: all 0.3s ease;
}

a:hover {
  color: #F4CE14;
}
```

#### Link Variations
```css
/* Primary Link */
a.primary {
  color: #F4CE14;
  font-weight: 600;
}

a.primary:hover {
  color: #EDEFEE;
}

/* Secondary Link */
a.secondary {
  color: #495E57;
  font-weight: 500;
}

a.secondary:hover {
  color: #F4CE14;
}
```

### 6. Form Elements

#### Form Inputs (input, textarea, select)
```css
input, textarea, select {
  font-family: inherit;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff;
  color: #495E57;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: #F4CE14;
  box-shadow: 0 0 0 3px rgba(244, 206, 20, 0.1);
}

input::placeholder, textarea::placeholder {
  color: #999;
  opacity: 1;
}
```

#### Form Labels (label)
```css
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #495E57;
  font-size: 0.9rem;
}
```

### 7. Card Elements

#### Base Card Styles (.card)
```css
.card {
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
```

#### Card Components
```css
.card-header {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #495E57;
  margin: 0;
}

.card-body {
  color: #666;
  line-height: 1.6;
}
```

## Utility Classes

### Text Colors
```css
.text-primary { color: #495E57; }
.text-secondary { color: #F4CE14; }
.text-accent { color: #EDEFEE; }
.text-muted { color: #666; }
.text-light { color: #ffffff; }
```

### Background Colors
```css
.bg-primary { background-color: #495E57; }
.bg-secondary { background-color: #F4CE14; }
.bg-accent { background-color: #EDEFEE; }
.bg-light { background-color: #ffffff; }
```

### Border Radius
```css
.rounded-sm { border-radius: 4px; }
.rounded { border-radius: 8px; }
.rounded-lg { border-radius: 12px; }
.rounded-full { border-radius: 50%; }
```

### Shadows
```css
.shadow-sm { box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); }
.shadow { box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); }
.shadow-lg { box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15); }
```

## Responsive Design

### Mobile-First Approach
The styling system uses a mobile-first approach with responsive breakpoints:

```css
/* Extra Small devices (phones, 576px and down) */
@media (max-width: 575.98px)

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px)

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px)

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px)

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px)
```

### Mobile Adjustments
```css
@media (max-width: 768px) {
  /* Typography adjustments for mobile */
  h1 { font-size: 2rem; }
  h2 { font-size: 1.75rem; }
  h3 { font-size: 1.5rem; }
  p { font-size: 0.9rem; }
  
  /* Navigation adjustments for mobile */
  nav ul {
    flex-direction: column;
    gap: 0;
  }
  
  nav li {
    width: 100%;
    border-bottom: 1px solid #ddd;
  }
  
  nav a {
    padding: 1rem 2rem;
    width: 100%;
    text-align: left;
  }
}
```

## Accessibility Features

### Focus States
```css
*:focus {
  outline: 2px solid var(--secondary-color);
  outline-offset: 2px;
}
```

### High Contrast Mode
```css
@media (prefers-contrast: high) {
  :root {
    --primary-color: #000000;
    --secondary-color: #ffffff;
    --accent-color: #cccccc;
  }
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Testing the Styling System

Visit `/styling-test` to see a comprehensive demonstration of all HTML element styling features:

1. **Typography System**: All heading levels, paragraphs, spans, emphasis
2. **Navigation Elements**: Navigation links, lists, hover effects
3. **Image Styles**: Default, rounded, circular, no-shadow variations
4. **Button Styles**: Primary, secondary, outline, size variations
5. **Link Styles**: Default, primary, secondary link variations
6. **Form Elements**: Inputs, textareas, selects, labels
7. **Card Styles**: Card components with hover effects
8. **Utility Classes**: Colors, backgrounds, borders, shadows

## Best Practices

1. **Consistent Spacing**: Use the spacing utility classes for consistent margins and padding
2. **Semantic HTML**: Use appropriate HTML elements for their semantic meaning
3. **Accessibility**: Ensure all interactive elements have proper focus states
4. **Responsive Design**: Test all elements across different screen sizes
5. **Performance**: Use CSS transitions for smooth animations
6. **Maintainability**: Use utility classes for common styling patterns

## Browser Support

The styling system supports all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Considerations

- CSS transitions are hardware-accelerated for smooth animations
- Utility classes are lightweight and reusable
- Responsive design uses efficient media queries
- Focus states and accessibility features are optimized for performance

## Future Enhancements

Potential improvements for the styling system:
- CSS Custom Properties for dynamic theming
- Advanced hover and focus states
- Enhanced animation utilities
- Component-specific styling variations
- Dark mode support 