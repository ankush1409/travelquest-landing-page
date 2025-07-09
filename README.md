# TravelQuest Landing Site

A modern, responsive landing site for TravelQuest - a gamified travel platform that turns every journey into an adventure.

## � Project Overview

This project has been converted from a static HTML/CSS/JS site to a dynamic React TypeScript application with routing capabilities. The site features:

- **Homepage**: Main landing page with hero section, features, and download CTAs
- **Explore Page**: Dedicated page showcasing the destination discovery feature

## 🚀 Features

### Explore Page (`/explore`)
The new Explore Page includes all requested sections:

1. **Hero Section**
   - Headline: "Your Passport to Discovery"
   - Subheadline: "Explore unique destinations, track your visits, and unlock fun facts and badges"
   - Animated entry with Framer Motion

2. **Featured Destinations Grid**
   - 6 destination cards with high-quality Unsplash images
   - Each card includes:
     - Destination name and image
     - Compelling tagline
     - Fun fact about the location
     - "View Details" button (non-functional as requested)

3. **How It Works Section**
   - 3-step process:
     - Step 1: Browse & Discover
     - Step 2: Complete Location Challenges
     - Step 3: Earn Travel Badges

4. **User Stories Carousel**
   - Interactive carousel with navigation
   - Real user testimonials with photos
   - Badge count display for each user
   - Smooth transitions and dot indicators

5. **Call-to-Action Section**
   - Download encouragement
   - App Store and Play Store badges
   - Consistent with main landing page styling

## 🛠 Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router DOM** for routing
- **Font Awesome** for icons
- **Poppins** font from Google Fonts

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   └── Navbar.tsx          # Navigation component
│   ├── pages/
│   │   ├── HomePage.tsx        # Main landing page
│   │   └── ExplorePage.tsx     # Explore places page
│   ├── App.tsx                 # Main app with routing
│   ├── main.tsx               # React entry point
│   └── index.css              # Global styles with Tailwind
├── public/
├── index.html                 # HTML template
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Design Features

### Responsive Design
- Mobile-first approach using Tailwind CSS
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Grid layouts that adapt to different screen sizes

### Animations
- **Framer Motion** animations throughout
- Fade-in effects with `whileInView` for scroll-triggered animations
- Staggered animations for grid items
- Smooth page transitions

### Color Scheme
- Primary: Blue (`#2563eb`)
- Secondary: Green (`#10b981`)
- Accent: Amber (`#f59e0b`)
- Consistent gradient backgrounds

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📱 Navigation

- **Home** (`/`) - Main landing page
- **Explore** (`/explore`) - Destination discovery page
- Links to other sections (Features, About, Download) within the homepage

## 🎯 Key Components

### ExplorePage.tsx
- **Featured Destinations**: 6 cards with Tokyo, Santorini, Machu Picchu, Reykjavik, Marrakech, and Banff
- **Interactive Carousel**: User stories with navigation controls
- **Responsive Grid**: Adapts from 1 column on mobile to 3 columns on desktop
- **Smooth Animations**: Fade-in effects as sections come into view

### Navbar.tsx
- **Fixed Navigation**: Stays at top during scroll
- **Mobile Menu**: Hamburger menu for mobile devices
- **React Router Integration**: Proper navigation between pages
- **Responsive Design**: Desktop and mobile layouts

## � Unique Features

1. **Smooth Scroll Animations**: Elements animate in as they enter the viewport
2. **Interactive Carousel**: User stories with manual navigation and auto-indicators
3. **Hover Effects**: Cards lift and scale on hover
4. **Image Optimization**: Unsplash images with proper sizing parameters
5. **Accessibility**: Semantic HTML and proper ARIA labels

## � Content Strategy

### Destinations Featured:
- **Tokyo, Japan**: "Neon lights meet ancient temples"
- **Santorini, Greece**: "Cliffside paradise with endless blue"
- **Machu Picchu, Peru**: "Lost city in the clouds"
- **Reykjavik, Iceland**: "Land of fire and ice"
- **Marrakech, Morocco**: "Pink city of spices and stories"
- **Banff, Canada**: "Rocky Mountain wilderness"

### User Testimonials:
- Diverse user base from different cities
- Focus on discovery, exploration, and competition
- Badge counts to show gamification success

## 🔧 Development

### Linting
```bash
npm run lint
```

### Type Checking
TypeScript is configured for strict type checking. The project uses:
- Strict mode enabled
- No unused locals/parameters
- JSX: react-jsx

## 📄 License

This project is for TravelQuest landing site purposes.

---

## 🗺️ Next Steps

- Add backend integration for dynamic destination data
- Implement actual routing for "View Details" buttons
- Add more interactive features to the carousel
- Integrate with actual app store links
- Add SEO optimization and meta tags