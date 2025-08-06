# Little Lemon Restaurant Website

A modern, responsive React-based website for the Little Lemon Mediterranean restaurant. This project demonstrates front-end development skills including React, CSS Grid, responsive design, and interactive components.

## 🍋 Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Navigation**: Sticky navigation bar with mobile hamburger menu
- **Routing**: React Router for seamless page navigation
- **Interactive Components**: Dropdown menus, forms, and animated elements

### Pages & Components
- **Home Page**: Hero section, weekly specials, testimonials, and about section
- **About Page**: Restaurant story, team information, and awards
- **Menu Page**: Interactive menu with category filtering
- **Reservations**: Booking form with animated dropdown for occasions
- **Order Online**: Shopping cart functionality with checkout process
- **Login/Register**: User authentication with localStorage persistence

### Technical Features
- **State Management**: React hooks for component state
- **Form Handling**: Controlled components with validation
- **Local Storage**: Data persistence for reservations and orders
- **Accessibility**: ARIA labels, focus management, and keyboard navigation
- **Performance**: Optimized animations and responsive images

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd little-lemon
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (not recommended)

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Home.js            # Home page component
│   ├── About.js           # About page component
│   ├── Menu.js            # Menu page component
│   ├── Reservations.js    # Booking form component
│   ├── OrderOnline.js     # Online ordering component
│   ├── Login.js           # Authentication component
│   ├── Footer.js          # Footer component
│   └── *.css              # Component-specific styles
├── App.js                 # Main app component with routing
├── App.css               # Global styles
└── index.js              # App entry point
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#495E57` - Main brand color
- **Secondary Yellow**: `#F4CE14` - Accent color
- **Light Gray**: `#EDEFEE` - Background color
- **White**: `#FFFFFF` - Card backgrounds

### Typography
- **Font Family**: System fonts (San Francisco, Segoe UI, etc.)
- **Responsive**: Fluid typography using clamp()
- **Hierarchy**: Clear heading structure (h1-h3)

### Layout
- **Grid System**: CSS Grid for responsive layouts
- **Breakpoints**: Mobile-first with 768px and 1024px breakpoints
- **Spacing**: Consistent padding and margins throughout

## 🔧 Key Components

### Navigation Bar
- Sticky positioning
- Mobile hamburger menu
- Logo with diagonal lines design
- Smooth transitions

### Reservation Form
- Animated dropdown for occasions
- Form validation
- Local storage persistence
- Responsive design

### Menu System
- Category filtering
- Interactive cards
- Dietary information
- Order functionality

### Shopping Cart
- Add/remove items
- Quantity controls
- Total calculation
- Checkout process

## 📱 Responsive Design

The website is fully responsive with three main breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- High contrast mode support
- Reduced motion preferences

## 🧪 Testing

The project includes testing setup with:
- Jest for unit testing
- React Testing Library for component testing
- Accessibility testing capabilities

## 📦 Dependencies

### Core Dependencies
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-router-dom`: ^6.8.0

### Development Dependencies
- `@testing-library/react`: ^13.4.0
- `@testing-library/jest-dom`: ^5.16.5
- `@testing-library/user-event`: ^14.4.3

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Firebase**: Use Firebase Hosting

## 📋 Project Requirements Met

### Module 1: Starting the Project
- ✅ Development environment setup
- ✅ Git version control
- ✅ UX/UI planning and wireframing

### Module 2: Project Foundations
- ✅ Semantic HTML structure
- ✅ CSS styling with reusable grid system
- ✅ Component-based architecture

### Module 3: Project Functionality
- ✅ Table booking system with state management
- ✅ Form handling and user input
- ✅ Unit testing setup
- ✅ Local storage for data persistence

### Module 4: Graded Assessment
- ✅ Complete functional website
- ✅ Responsive design
- ✅ Interactive components
- ✅ Modern React practices

## 🎯 Learning Outcomes

This project demonstrates proficiency in:
- **React Development**: Hooks, components, routing
- **CSS Mastery**: Grid, Flexbox, animations, responsive design
- **JavaScript**: ES6+, async operations, state management
- **Web Accessibility**: ARIA, semantic HTML, keyboard navigation
- **User Experience**: Intuitive navigation, clear information hierarchy
- **Performance**: Optimized loading, smooth animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is created for educational purposes as part of the Front-End Developer Capstone course.

## 👨‍🍳 About Little Lemon

Little Lemon is a family-owned Mediterranean restaurant located in Chicago, Illinois. The restaurant specializes in traditional Mediterranean cuisine with a modern twist, offering authentic flavors and warm hospitality.

---

**Built with ❤️ and lots of 🍋 for the Front-End Developer Capstone Project**
