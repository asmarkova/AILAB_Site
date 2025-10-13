# AI LAB React Components Documentation

## Overview
This React application has been fully converted from the original HTML/CSS/JS structure. All components are functional components using React Hooks.

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx       - Navigation bar with mobile menu
│   ├── Hero.jsx            - Hero section with main title
│   ├── BigQuote.jsx        - Big quote section
│   ├── About.jsx           - About section with stats
│   ├── BentoInfo.jsx       - Bento grid info section
│   ├── TelegramBanner.jsx  - Telegram channel banner
│   ├── Services.jsx        - Services grid section
│   ├── AIAcademy.jsx       - AI Academy with slider
│   ├── Projects.jsx        - Projects/cases grid
│   ├── Team.jsx            - Team section with slider
│   ├── Partners.jsx        - Partners scrolling section
│   ├── CTA.jsx             - CTA section
│   └── Footer.jsx          - Footer component
├── hooks/
│   ├── useScrollEffect.js  - Scroll animations hook
│   └── useSlider.js        - Slider functionality hook
├── App.jsx                 - Main app component
└── styles.css             - Original styles (copied)
```

## Components Description

### 1. Navigation.jsx
- **Purpose**: Fixed navigation bar with mobile menu toggle
- **Features**:
  - Smooth scroll to sections
  - Background color change on scroll
  - Mobile hamburger menu
  - Language switcher (Ru/En)
- **State**: `isMenuOpen`, `navBg`

### 2. Hero.jsx
- **Purpose**: Main hero section with title and CTA
- **Features**:
  - Large title with multi-line layout
  - Smooth scroll to contact form
  - Purple gradient background effect

### 3. BigQuote.jsx
- **Purpose**: Display inspirational quote
- **Features**:
  - Centered large quote
  - Responsive typography

### 4. About.jsx
- **Purpose**: About section with company info
- **Features**:
  - Stats display (40+ projects, since 2023)
  - Company description
  - Highlighted quote
  - Three-column grid layout

### 5. BentoInfo.jsx
- **Purpose**: Bento-style grid with achievements
- **Features**:
  - Photo of founders
  - 700+ students stat
  - IT Park resident badge
  - PRO Business partnership
  - Top AI experts recognition
  - Interactive hover effects

### 6. TelegramBanner.jsx
- **Purpose**: Promote Telegram channel
- **Features**:
  - Founder photo
  - Channel description
  - CTA button

### 7. Services.jsx
- **Purpose**: Display service offerings
- **Features**:
  - Three service cards (AI Academy, AI Audit, AI Development)
  - Numbered cards with descriptions
  - Scroll animations via data-animate

### 8. AIAcademy.jsx
- **Purpose**: AI Academy section with image slider
- **Features**:
  - Custom slider using `useSlider` hook
  - Auto-play functionality (5s interval)
  - Pause on hover
  - Navigation arrows
  - 9 training images
- **Hooks Used**: `useSlider`

### 9. Projects.jsx
- **Purpose**: Display client case studies
- **Features**:
  - 6 case cards
  - Featured card highlight (IT Park)
  - Hover effects
  - Detailed project descriptions

### 10. Team.jsx
- **Purpose**: Team member slider
- **Features**:
  - Horizontal slider with 8 team members
  - Infinite loop effect
  - Navigation arrows
  - Smooth transitions
- **State**: `currentIndex`
- **Ref**: `sliderTrackRef`

### 11. Partners.jsx
- **Purpose**: Display partner logos
- **Features**:
  - Auto-scrolling animation
  - Seamless infinite loop
  - 7 partner logos
  - Links to partner websites

### 12. CTA.jsx
- **Purpose**: Call-to-action section
- **Features**:
  - Contact form invitation
  - Telegram link
  - Responsive layout

### 13. Footer.jsx
- **Purpose**: Site footer
- **Features**:
  - Company info and email
  - Navigation links
  - Social media links
  - Three-column layout

## Custom Hooks

### useScrollEffect.js
- **Purpose**: Intersection Observer for scroll animations
- **Features**:
  - Observes elements with `data-animate` attribute
  - Adds `animated` class when element enters viewport
  - Automatic cleanup on unmount

### useSlider.js
- **Purpose**: Reusable slider functionality
- **Parameters**:
  - `totalSlides` - Number of slides
  - `autoPlay` - Enable/disable auto-play (default: false)
  - `autoPlayInterval` - Auto-play interval in ms (default: 5000)
- **Returns**:
  - `currentIndex` - Current slide index
  - `goToNext` - Navigate to next slide
  - `goToPrev` - Navigate to previous slide
  - `goToSlide` - Navigate to specific slide
  - `pauseAutoPlay` - Pause auto-play
  - `resumeAutoPlay` - Resume auto-play

## Key Features Converted to React

1. **Mobile Menu Toggle**: Converted from vanilla JS event listeners to React state
2. **Smooth Scrolling**: Maintained with custom scroll functions
3. **Sliders**: Converted to React components with hooks
4. **Scroll Animations**: Using Intersection Observer in useScrollEffect hook
5. **Navigation Background**: Dynamic background change on scroll using useEffect

## Styling

The original `styles.css` has been copied to the React project and imported in `App.jsx`. All CSS classes remain the same, ensuring visual consistency.

## Running the Application

```bash
npm install
npm run dev
```

## Notes

- All image paths use absolute paths starting with `/` (e.g., `/Team/image.png`)
- Ensure all image assets are in the `public` folder
- All external links open in new tabs with `rel="noopener noreferrer"`
- Smooth scroll behavior is handled via JavaScript for better control
- All components are fully responsive
