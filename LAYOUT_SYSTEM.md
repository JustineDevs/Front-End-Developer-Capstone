# Little Lemon Responsive Layout System

## Overview

This document outlines the comprehensive responsive layout system implemented for the Little Lemon restaurant website. The system uses CSS Grid and Flexbox to create a responsive design that works across all device sizes.

## Layout System Features

### 1. Container System

The container system provides consistent max-widths and centering for different screen sizes:

```css
.container        /* max-width: 1200px */
.container-sm     /* max-width: 576px */
.container-md     /* max-width: 768px */
.container-lg     /* max-width: 992px */
.container-xl     /* max-width: 1200px */
.container-fluid  /* width: 100% */
```

### 2. CSS Grid System

The grid system provides responsive columns that automatically adjust based on screen size:

```css
.grid-1   /* 1 column */
.grid-2   /* 2 columns (responsive) */
.grid-3   /* 3 columns (responsive) */
.grid-4   /* 4 columns (responsive) */
.grid-5   /* 5 columns (responsive) */
.grid-6   /* 6 columns (responsive) */
.grid-12  /* 12 columns (responsive) */
```

**Responsive Behavior:**
- **Mobile (< 576px)**: All grids stack to 1 column
- **Small (576px+)**: 2 columns for grid-2 through grid-6
- **Medium (768px+)**: 3 columns for grid-3, grid-4, grid-5, grid-6
- **Large (992px+)**: Full column count as specified

### 3. Flexbox System

The flexbox system provides flexible layouts:

```css
.flex          /* display: flex */
.flex-col      /* flex-direction: column */
.flex-row      /* flex-direction: row */
.flex-wrap     /* flex-wrap: wrap */
.flex-nowrap   /* flex-wrap: nowrap */
```

**Alignment Classes:**
```css
.justify-start    /* justify-content: flex-start */
.justify-end      /* justify-content: flex-end */
.justify-center   /* justify-content: center */
.justify-between  /* justify-content: space-between */
.justify-around   /* justify-content: space-around */
.justify-evenly   /* justify-content: space-evenly */

.align-start      /* align-items: flex-start */
.align-end        /* align-items: flex-end */
.align-center     /* align-items: center */
.align-stretch    /* align-items: stretch */
.align-baseline   /* align-items: baseline */
```

**Flex Items:**
```css
.flex-1      /* flex: 1 */
.flex-auto   /* flex: auto */
.flex-initial /* flex: initial */
.flex-none   /* flex: none */
```

### 4. Spacing Utilities

Consistent spacing using a scale system:

```css
/* Gap Utilities */
.gap-0, .gap-1, .gap-2, .gap-3, .gap-4, .gap-5, .gap-6, .gap-8, .gap-10, .gap-12

/* Padding Utilities */
.p-0, .p-1, .p-2, .p-3, .p-4, .p-5, .p-6, .p-8, .p-10, .p-12

/* Margin Utilities */
.m-0, .m-1, .m-2, .m-3, .m-4, .m-5, .m-6, .m-8, .m-10, .m-12
```

### 5. Text Utilities

Text alignment and display utilities:

```css
.text-center    /* text-align: center */
.text-left      /* text-align: left */
.text-right     /* text-align: right */
.text-justify   /* text-align: justify */

.block          /* display: block */
.inline         /* display: inline */
.inline-block   /* display: inline-block */
.hidden         /* display: none */
```

## Responsive Breakpoints

The system uses a mobile-first approach with these breakpoints:

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

## Component-Specific Responsive Design

### Header Component
- **Mobile**: Smaller logo and text, reduced padding
- **Tablet**: Medium-sized elements
- **Desktop**: Full-sized elements with enhanced spacing

### Navigation Component
- **Mobile**: Hamburger menu with dropdown
- **Tablet**: Horizontal navigation with reduced spacing
- **Desktop**: Full horizontal navigation with hover effects

### Home Component
- **Hero Section**: Grid layout that stacks on mobile
- **Highlights**: Responsive grid with auto-fit
- **Testimonials**: Responsive grid with minimum width constraints
- **About**: Two-column layout that stacks on mobile

## Usage Examples

### Basic Grid Layout
```html
<div class="grid grid-3 gap-4">
  <div class="card">Item 1</div>
  <div class="card">Item 2</div>
  <div class="card">Item 3</div>
</div>
```

### Flexbox Layout
```html
<div class="flex flex-wrap gap-4 justify-center">
  <div class="flex-1 card">Flex Item 1</div>
  <div class="flex-1 card">Flex Item 2</div>
  <div class="flex-1 card">Flex Item 3</div>
</div>
```

### Container with Content
```html
<div class="container">
  <div class="grid grid-2 gap-6">
    <div class="content">Left Column</div>
    <div class="content">Right Column</div>
  </div>
</div>
```

## Testing the Layout System

Visit `/layout-test` to see a comprehensive demonstration of all layout features:

1. **Grid System Test**: Shows responsive grid behavior
2. **Flexbox System Test**: Demonstrates flexible layouts
3. **Container System Test**: Shows different container sizes
4. **Utilities Test**: Demonstrates text alignment and spacing
5. **Responsive Behavior**: Test on different screen sizes

## Best Practices

1. **Mobile-First**: Always start with mobile design and enhance for larger screens
2. **Use Utility Classes**: Leverage the utility classes for consistent spacing and alignment
3. **Test Responsively**: Always test layouts on multiple screen sizes
4. **Semantic HTML**: Use semantic HTML elements with CSS classes for styling
5. **Accessibility**: Ensure layouts work with screen readers and keyboard navigation

## Browser Support

The layout system supports all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Considerations

- CSS Grid and Flexbox are well-optimized in modern browsers
- Utility classes are lightweight and reusable
- Responsive images and media queries are optimized for performance
- Minimal JavaScript is required for responsive behavior

## Future Enhancements

Potential improvements for the layout system:
- CSS Custom Properties for dynamic theming
- Advanced grid features like masonry layouts
- Container queries for component-level responsiveness
- Enhanced animation and transition utilities 