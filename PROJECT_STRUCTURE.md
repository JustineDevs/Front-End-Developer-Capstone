# Little Lemon Restaurant - Project Structure

## 📁 Organized Directory Structure

This document outlines the well-organized file structure of the Little Lemon restaurant website, designed for maintainability, scalability, and professional development practices.

## 🏗️ Root Directory

```
little-lemon/
├── public/                 # Static assets and HTML template
├── src/                    # Source code
├── node_modules/           # Dependencies
├── package.json           # Project configuration
├── package-lock.json      # Dependency lock file
├── README.md              # Project documentation
├── .gitignore             # Git ignore rules
├── COMPONENT_STRUCTURE.md # Component documentation
├── LAYOUT_SYSTEM.md       # Layout system documentation
├── STYLING_SYSTEM.md      # Styling system documentation
└── PROJECT_STRUCTURE.md   # This file
```

## 📂 Source Code Organization (`src/`)

### 🎨 Components (`src/components/`)

#### 📐 Layout Components (`src/components/layout/`)
**Purpose**: Core layout and navigation components that define the overall structure.

```
layout/
├── Header.js              # Main header with logo and branding
├── Header.css             # Header styling
├── Nav.js                 # Navigation menu component
├── Nav.css                # Navigation styling
├── Footer.js              # Footer with contact info and links
├── Footer.css             # Footer styling
├── Main.js                # Main content wrapper
└── Main.css               # Main wrapper styling
```

#### 📝 Form Components (`src/components/forms/`)
**Purpose**: Reusable form components with validation and user interaction.

```
forms/
├── BookingForm.js         # Restaurant reservation form
├── BookingForm.css        # Booking form styling
├── BookingForm.test.js    # Booking form unit tests
├── Login.js               # User authentication form
├── Login.css              # Login form styling
└── Login.test.js          # Login form unit tests
```

#### 📄 Page Components (`src/components/pages/`)
**Purpose**: Main page components that represent different routes.

```
pages/
├── Homepage.js            # Landing page with hero and content
├── Homepage.css           # Homepage styling
├── Home.js                # Alternative home component
├── Home.css               # Home component styling
├── About.js               # About us page
├── About.css              # About page styling
├── Menu.js                # Restaurant menu page
├── Menu.css               # Menu page styling
├── OrderOnline.js         # Online ordering system
├── OrderOnline.css        # Order online styling
├── Reservations.js        # Reservation page
└── Reservations.css       # Reservations styling
```

#### 🎯 Booking Components (`src/components/booking/`)
**Purpose**: Specialized components for the reservation system.

```
booking/
├── BookingPage.js         # Main booking page wrapper
├── BookingPage.css        # Booking page styling
├── BookingSlots.js        # Available time slots component
├── BookingSlots.css       # Time slots styling
├── BookingSlot.js         # Individual time slot component
├── BookingSlot.css        # Slot styling
├── ConfirmedBooking.js    # Booking confirmation page
└── ConfirmedBooking.css   # Confirmation styling
```

#### 🎨 UI Components (`src/components/ui/`)
**Purpose**: Reusable UI components and test components.

```
ui/
├── CallToAction.js        # Call-to-action component
├── CallToAction.css       # CTA styling
├── Specials.js            # Special offers component
├── Specials.css           # Specials styling
├── CustomersSay.js        # Customer testimonials
├── CustomersSay.css       # Testimonials styling
├── Chicago.js             # Chicago location component
├── Chicago.css            # Chicago styling
├── LayoutTest.js          # Layout testing component
├── LayoutTest.css         # Layout test styling
├── StylingTest.js         # Styling testing component
└── StylingTest.css        # Styling test styling
```

### 🎨 Styles (`src/styles/`)
**Purpose**: Global styles and theme configuration.

```
styles/
├── App.css                # Main application styles
└── index.css              # Global styles and CSS reset
```

### 🎯 Assets (`src/assets/`)
**Purpose**: Static assets like images, icons, and media files.

```
assets/
├── images/                # Image files
│   ├── restaurant-interior.jpg
│   ├── food-items/
│   └── team-photos/
└── icons/                 # Icon files
    ├── logo.svg           # Main logo
    └── favicon.ico        # Browser favicon
```

### 🔧 Utilities (`src/utils/`)
**Purpose**: Helper functions, API calls, and business logic.

```
utils/
├── api/                   # API and data management
│   ├── bookingReducer.js  # Booking state management
│   └── bookingReducer.test.js # Reducer tests
├── validation/            # Form validation utilities
└── helpers/               # General helper functions
```

### 🎣 Hooks (`src/hooks/`)
**Purpose**: Custom React hooks for reusable logic.

```
hooks/
├── useBooking.js          # Booking form logic
├── useAuth.js             # Authentication logic
└── useLocalStorage.js     # Local storage management
```

### 🌐 Context (`src/context/`)
**Purpose**: React context providers for global state.

```
context/
├── BookingContext.js      # Booking state context
├── AuthContext.js         # Authentication context
└── ThemeContext.js        # Theme management context
```

### 📝 Types (`src/types/`)
**Purpose**: TypeScript type definitions (if using TypeScript).

```
types/
├── booking.ts             # Booking-related types
├── user.ts                # User-related types
└── api.ts                 # API response types
```

## 🏗️ Public Assets (`public/`)

```
public/
├── index.html             # Main HTML template
├── favicon.ico            # Browser favicon
├── logo192.png            # App logo (192px)
├── logo512.png            # App logo (512px)
├── manifest.json          # PWA manifest
├── robots.txt             # SEO robots file
├── little-lemon-og.svg    # Open Graph image
└── meta-test.html         # Meta tag testing
```

## 🎯 Component Categories Explained

### 📐 Layout Components
- **Header**: Branding, logo, and main navigation
- **Nav**: Primary navigation menu with responsive design
- **Footer**: Contact information, social links, and site links
- **Main**: Content wrapper for consistent layout

### 📝 Form Components
- **BookingForm**: Advanced reservation form with Material-UI
- **Login**: User authentication with validation
- **Features**: Form validation, error handling, accessibility

### 📄 Page Components
- **Homepage**: Landing page with hero section and content
- **About**: Company story and team information
- **Menu**: Restaurant menu with categories and items
- **OrderOnline**: E-commerce ordering system
- **Reservations**: Table booking interface

### 🎯 Booking Components
- **BookingPage**: Main reservation page wrapper
- **BookingSlots**: Available time slot selection
- **BookingSlot**: Individual time slot component
- **ConfirmedBooking**: Success confirmation page

### 🎨 UI Components
- **CallToAction**: Promotional buttons and links
- **Specials**: Featured menu items
- **CustomersSay**: Customer testimonials
- **Chicago**: Location-specific content
- **Test Components**: Layout and styling test components

## 🔧 Development Benefits

### ✅ **Maintainability**
- Clear separation of concerns
- Easy to locate specific functionality
- Consistent file naming conventions

### ✅ **Scalability**
- Modular component structure
- Reusable components across pages
- Easy to add new features

### ✅ **Professional Standards**
- Industry-standard organization
- Clear documentation
- Test coverage for critical components

### ✅ **Team Collaboration**
- Intuitive file structure
- Clear component responsibilities
- Easy onboarding for new developers

## 🚀 Getting Started

1. **Navigate to the project**: `cd little-lemon`
2. **Install dependencies**: `npm install`
3. **Start development server**: `npm start`
4. **Run tests**: `npm test`
5. **Build for production**: `npm run build`

## 📋 File Naming Conventions

- **Components**: PascalCase (e.g., `BookingForm.js`)
- **CSS Files**: PascalCase (e.g., `BookingForm.css`)
- **Test Files**: Component name + `.test.js` (e.g., `BookingForm.test.js`)
- **Utilities**: camelCase (e.g., `bookingReducer.js`)
- **Directories**: kebab-case (e.g., `order-online/`)

## 🎯 Component Import Examples

```javascript
// Layout components
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

// Form components
import BookingForm from './components/forms/BookingForm';
import Login from './components/forms/Login';

// Page components
import Homepage from './components/pages/Homepage';
import About from './components/pages/About';

// Booking components
import BookingPage from './components/booking/BookingPage';
import ConfirmedBooking from './components/booking/ConfirmedBooking';

// UI components
import CallToAction from './components/ui/CallToAction';
import Specials from './components/ui/Specials';
```

This organized structure ensures the Little Lemon website is maintainable, scalable, and follows professional development practices! 🍋✨ 