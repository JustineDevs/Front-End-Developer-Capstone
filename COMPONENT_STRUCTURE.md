# Little Lemon Component Structure

## Overview

This document outlines the component-based architecture implemented for the Little Lemon restaurant website. The application uses React components with React Router for navigation, following a modular and reusable design pattern.

## Component Hierarchy

### App Level Components
```
App
├── Header (Logo and branding)
├── Nav (Navigation menu)
├── Main (Main content area)
│   └── Routes (Page routing)
└── Footer (Site footer)
```

### Page Components
```
Homepage
├── CallToAction (Hero section)
├── Specials (Weekly specials)
├── CustomersSay (Testimonials)
└── Chicago (About section)

BookingPage
├── Booking Information
└── Reservation Form
```

## Component Details

### 1. App Component (`App.js`)
**Purpose**: Main application wrapper with routing setup
**Features**:
- React Router setup with `BrowserRouter`
- Route definitions for all pages
- Global layout structure

**Routes**:
- `/` - Homepage
- `/about` - About page
- `/menu` - Menu page
- `/reservations` - Reservations page
- `/booking` - Booking page
- `/order-online` - Order online page
- `/login` - Login page
- `/layout-test` - Layout testing page
- `/styling-test` - Styling testing page

### 2. Header Component (`Header.js`)
**Purpose**: Site branding and logo
**Features**:
- Little Lemon logo (SVG)
- Responsive design
- Brand colors and typography

### 3. Nav Component (`Nav.js`)
**Purpose**: Site navigation
**Features**:
- Responsive hamburger menu
- Link components for client-side routing
- Mobile-first design
- Hover effects and transitions

**Navigation Links**:
- Home
- About
- Menu
- Reservations
- Book Table
- Order Online
- Login

### 4. Main Component (`Main.js`)
**Purpose**: Main content wrapper
**Features**:
- Semantic HTML structure
- Flexbox layout
- Responsive padding and spacing

### 5. Homepage Component (`Homepage.js`)
**Purpose**: Main landing page
**Features**:
- Composed of multiple sub-components
- Responsive grid layout
- Call-to-action sections

**Sub-components**:
- CallToAction
- Specials
- CustomersSay
- Chicago

### 6. CallToAction Component (`CallToAction.js`)
**Purpose**: Hero section with main call-to-action
**Features**:
- Gradient background
- Restaurant description
- "Reserve a Table" button
- Responsive grid layout
- Image placeholder

### 7. Specials Component (`Specials.js`)
**Purpose**: Weekly specials showcase
**Features**:
- Dynamic data rendering
- Card-based layout
- "Order Online" link
- Hover effects on cards

**Data Structure**:
```javascript
const highlights = [
  {
    id: 1,
    name: "Greek Salad",
    description: "Fresh vegetables, olives, and feta cheese...",
    price: "$12.99",
    image: "greek-salad.jpg"
  },
  // ... more items
];
```

### 8. CustomersSay Component (`CustomersSay.js`)
**Purpose**: Customer testimonials section
**Features**:
- Star rating system
- Customer feedback display
- Responsive grid layout
- Glassmorphism design

**Data Structure**:
```javascript
const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    comment: "Amazing food and great atmosphere!"
  },
  // ... more testimonials
];
```

### 9. Chicago Component (`Chicago.js`)
**Purpose**: About section with restaurant story
**Features**:
- Two-column layout
- Restaurant history
- Image placeholders
- Responsive design

### 10. BookingPage Component (`BookingPage.js`)
**Purpose**: Table reservation system
**Features**:
- Comprehensive booking form
- Restaurant hours display
- Form validation
- Responsive layout

**Form Fields**:
- Full Name
- Email
- Phone Number
- Date
- Time
- Number of Guests
- Special Occasion
- Special Requests

## Routing System

### React Router Implementation
```javascript
<Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/about" element={<About />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="/reservations" element={<Reservations />} />
  <Route path="/booking" element={<BookingPage />} />
  <Route path="/order-online" element={<OrderOnline />} />
  <Route path="/login" element={<Login />} />
  <Route path="/layout-test" element={<LayoutTest />} />
  <Route path="/styling-test" element={<StylingTest />} />
</Routes>
```

### Navigation Links
All navigation links use React Router's `Link` component for client-side routing:
```javascript
<Link to="/booking" onClick={() => setIsMenuOpen(false)}>Book Table</Link>
```

## Component Reusability

### Design Patterns Used

1. **Composition Pattern**: Homepage is composed of smaller, focused components
2. **Container/Presentational Pattern**: Components are separated by concerns
3. **Props Pattern**: Data is passed down through props
4. **CSS Modules**: Each component has its own CSS file

### Reusable Components

1. **Button Components**: Primary, secondary, outline variants
2. **Card Components**: Consistent styling across sections
3. **Form Components**: Reusable form elements
4. **Image Components**: Placeholder and actual image handling

## Styling System

### CSS Architecture
- **Component-specific CSS**: Each component has its own CSS file
- **Global CSS**: App.css for global styles and utilities
- **Responsive Design**: Mobile-first approach
- **CSS Variables**: Consistent color palette and spacing

### Design System
- **Colors**: Primary (#495E57), Secondary (#F4CE14), Accent (#EDEFEE)
- **Typography**: Responsive font sizing with clamp()
- **Spacing**: Consistent padding and margins
- **Shadows**: Subtle depth and hover effects

## Responsive Design

### Breakpoints
- **Mobile**: < 576px
- **Small**: 576px - 767px
- **Medium**: 768px - 991px
- **Large**: 992px - 1199px
- **Extra Large**: 1200px+

### Mobile-First Approach
- All components start with mobile design
- Progressive enhancement for larger screens
- Touch-friendly interactions
- Optimized navigation for mobile

## Accessibility Features

### ARIA Labels
- Navigation menu toggle button
- Form labels and descriptions
- Image alt text placeholders

### Keyboard Navigation
- Focus states for all interactive elements
- Tab order optimization
- Skip links for main content

### Screen Reader Support
- Semantic HTML structure
- Proper heading hierarchy
- Descriptive link text

## Performance Considerations

### Code Splitting
- Components are lazy-loaded where appropriate
- Route-based code splitting ready

### Image Optimization
- Placeholder images for development
- Responsive image handling
- Lazy loading ready

### CSS Optimization
- Utility classes for common patterns
- Minimal CSS duplication
- Efficient selectors

## Testing Strategy

### Component Testing
- Individual component testing
- Props validation
- Event handling tests

### Integration Testing
- Navigation flow testing
- Form submission testing
- Responsive behavior testing

### Visual Testing
- Cross-browser compatibility
- Mobile device testing
- Accessibility testing

## Future Enhancements

### Planned Improvements
1. **State Management**: Redux or Context API for global state
2. **Form Validation**: Enhanced form validation with libraries
3. **Image Optimization**: WebP format and lazy loading
4. **PWA Features**: Service workers and offline support
5. **Animation**: Enhanced micro-interactions
6. **Internationalization**: Multi-language support

### Scalability Considerations
- Component library documentation
- Design system expansion
- Performance monitoring
- SEO optimization
- Analytics integration

## Best Practices

### Code Organization
1. **File Structure**: Components in dedicated folders
2. **Naming Conventions**: PascalCase for components
3. **Import Organization**: Grouped imports
4. **Commenting**: Clear component documentation

### Component Design
1. **Single Responsibility**: Each component has one purpose
2. **Props Interface**: Clear prop definitions
3. **Error Boundaries**: Graceful error handling
4. **Loading States**: User feedback during operations

### Performance
1. **Memoization**: React.memo for expensive components
2. **Bundle Size**: Code splitting and tree shaking
3. **Rendering Optimization**: Avoid unnecessary re-renders
4. **Asset Optimization**: Compressed images and fonts

This component structure provides a solid foundation for the Little Lemon website, ensuring maintainability, scalability, and excellent user experience across all devices. 