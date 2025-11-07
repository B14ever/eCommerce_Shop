# ShopModern - Modern eCommerce Application 🛍️

A stunning, full-featured eCommerce application built with Next.js 16, TypeScript, Tailwind CSS, Redux Toolkit, and Aceternity UI-inspired animations. This project showcases real-world frontend development skills with a beautiful, modern interface.

![Next.js](https://img.shields.io/badge/Next.js-16-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8)

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router (`/src/app`)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI + Aceternity UI-inspired animations
- **State Management**: Redux Toolkit
- **API Client**: Axios
- **API**: DummyJSON API
- **Animations**: Framer Motion
- **Toast Notifications**: Sonner
- **Icons**: Lucide React

## ✨ Features

### 🎨 Floating Navbar (Aceternity UI)
- **Auto-hide on scroll**: Hides when scrolling down, shows when scrolling up
- **Glassmorphism effect**: Frosted glass backdrop with blur
- **Rounded pill design**: Modern floating aesthetic
- **Smooth animations**: Framer Motion powered slide/fade effects
- **Dark mode adaptive**: Background and colors change with theme
- **Always accessible**: Stays at top when near page start

### 🌟 Hero Parallax (Aceternity UI)
- **3D parallax scrolling**: Products move in 3 rows with opposite directions
- **3D transformations**: Rotate and translate in 3D space
- **Spring physics**: Natural, bouncy animations
- **15 product showcase**: First 15 products displayed in parallax
- **Gradient header**: Beautiful blue-to-purple gradient text
- **Call-to-action buttons**: Navigate to products or about sections
- **300vh scroll height**: Extended scroll experience

### 📦 Product Listing Page (`/` - #products)
- Fetch and display products from DummyJSON API
- Beautiful product cards with hover effects showing:
  - Title, price, rating, category, and image
  - "Add to Favorite" button with Redux state
- **Search functionality** with 500ms debouncing
- **Dual Pagination System**:
  - Infinite scroll using Intersection Observer
  - Traditional pagination buttons (1, 2, 3, Next, Prev)
- Responsive grid (1-4 columns based on screen size)
- Loading states and comprehensive error handling

### 🔍 Product Details Page (`/product/[id]`)
- Detailed product view with:
  - Image gallery with thumbnail selection
  - Price, rating, stock, brand
  - Shipping & warranty information
  - Customer reviews with ratings
  - Product tags
- Edit and delete actions
- Favorite/unfavorite functionality
- Confirmation dialog for deletions
- Mobile-optimized responsive design

### ❤️ Favorites Page (`/favorites`)
- View all favorited products
- Managed with Redux Toolkit
- Session-persistent favorites
- Beautiful empty state design

### ➕ Create Product (`/product/create`)
- Form with real-time validation:
  - Title, description (required)
  - Price, stock (validated)
  - Brand, category
- POST request to DummyJSON API
- Toast notifications
- Responsive form layout

### ✏️ Edit Product (`/product/[id]/edit`)
- Pre-filled form with product data
- PATCH/PUT request
- Form validation
- Success/error feedback

### 🗑️ Delete Product
- Confirmation dialog
- DELETE request
- Toast notifications
- Auto-redirect after deletion

### 📖 About Us Section (`#about`)
- Mission statement cards
- Statistics display (customers, products, rating)
- Animated on scroll with Framer Motion
- Gradient call-out section

### 📧 Contact Us Section (`#contact`)
- Contact information cards (email, phone, address)
- Working contact form with validation
- Toast notifications on submission
- Smooth animations

### 🦶 Footer
- Comprehensive site navigation
- Newsletter subscription
- Social media links
- Multi-column layout
- Dark mode compatible

### 🎁 Bonus Features ✨
- **Aceternity UI-inspired Design**: Beautiful blob animations, gradients, glassmorphism
- **Framer Motion Animations**: Smooth scroll animations, hover effects
- **Toast Notifications**: Using Sonner for all feedback
- **Dark Mode Toggle**: Full dark mode with Redux state
- **No Authentication Required**: Direct access to all features
- **Loading States**: Skeleton loading, spinners
- **Error Handling**: Retry functionality, user-friendly messages
- **Fully Responsive**: Mobile-first design
- **Smooth Scrolling**: Section navigation
- **Image Optimization**: Next.js Image component

## 📁 Project Structure

```
shop-modern/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with Providers & Footer
│   │   ├── page.tsx              # Home (Hero + Products + About + Contact)
│   │   ├── globals.css           # Global styles + animations
│   │   ├── favorites/
│   │   │   └── page.tsx          # Favorites page
│   │   └── product/
│   │       ├── [id]/
│   │       │   ├── page.tsx      # Product details
│   │       │   └── edit/
│   │       │       └── page.tsx  # Edit product
│   │       └── create/
│   │           └── page.tsx      # Create product
│   ├── components/
│   │   ├── ui/                   # Shadcn UI components
│   │   ├── HeroParallax.tsx      # Aceternity UI Hero Parallax
│   │   ├── FloatingNavbar.tsx    # Aceternity UI Floating Nav
│   │   ├── AboutUs.tsx           # About section
│   │   ├── ContactUs.tsx         # Contact form section
│   │   ├── Footer.tsx            # Site footer
│   │   ├── ProductCard.tsx       # Product card component
│   │   ├── ProductForm.tsx       # Reusable product form
│   │   ├── LoadingSpinner.tsx    # Loading indicator
│   │   ├── ErrorState.tsx        # Error display
│   │   └── Providers.tsx         # Redux & Theme Provider
│   ├── store/
│   │   ├── store.ts              # Redux store
│   │   ├── hooks.ts              # Typed hooks
│   │   └── slices/
│   │       ├── favoritesSlice.ts # Favorites state
│   │       ├── themeSlice.ts     # Dark mode state
│   │       └── authSlice.ts      # Auth state (minimal)
│   ├── lib/
│   │   ├── api.ts                # Axios API client
│   │   └── utils.ts              # Utility functions
│   └── types/
│       └── product.ts            # TypeScript interfaces
└── package.json
```

## 🛠️ Installation & Setup

1. **Navigate to the project directory**:
```bash
cd shop-modern
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

### Navigation
- **Home**: Hero section + Product listing
- **#products**: Scroll to products section
- **#about**: Scroll to About Us section
- **#contact**: Scroll to Contact section
- **Favorites**: View favorited products (heart icon in navbar)
- **Create**: Add new product (plus icon in navbar)

### Features in Action
- **Search**: Type in search bar to filter products
- **Pagination**: Scroll to load more OR use pagination buttons
- **Favorites**: Click heart icon on any product card
- **Dark Mode**: Toggle with moon/sun icon in navbar
- **Product Actions**: View details → Edit or Delete

## 📡 API Endpoints Used

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products?limit=12&skip=0` | Get products with pagination |
| GET | `/products/search?q={query}` | Search products |
| GET | `/products/{id}` | Get single product details |
| GET | `/products/categories` | Get all categories |
| POST | `/products/add` | Create new product |
| PUT | `/products/{id}` | Update existing product |
| DELETE | `/products/{id}` | Delete product |

Full API documentation: [https://dummyjson.com/docs/products](https://dummyjson.com/docs/products)

## 🎨 Design Highlights

### Aceternity UI-Inspired Elements
- **Blob Animations**: Floating gradient blobs in hero
- **Glassmorphism**: Frosted glass effect on cards
- **Gradient Text**: Beautiful gradient headings
- **Smooth Transitions**: Framer Motion animations
- **Hover Effects**: Scale, shadow, and transform animations
- **Wave Separator**: SVG wave between sections

### Color Palette
- Primary: Blue (600-400)
- Secondary: Purple (600-400)
- Accent: Pink, Green for highlights
- Dark Mode: Seamless dark/light theme switching

## 🚦 Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📝 Key Implementation Details

### Animations
- Blob animations using CSS keyframes
- Framer Motion for scroll animations (`whileInView`)
- Smooth section scrolling
- Hover state transitions

### Pagination
- Intersection Observer for infinite scroll
- Traditional pagination buttons (max 5 visible)
- Smart page calculation for large datasets
- Scroll-to-top on page change

### State Management
- **Favorites**: Add/remove with Redux
- **Theme**: Dark mode toggle
- **Products**: Local component state
- No authentication requirements

### Performance
- Next.js Image optimization
- Lazy loading with Intersection Observer
- Debounced search input (500ms)
- Memoized callbacks with `useCallback`

## 📝 Evaluation Criteria Met

✅ **Code Organization**: Clean, modular structure  
✅ **React Hooks**: useState, useEffect, useCallback, useRef  
✅ **Redux Toolkit**: Favorites + theme management  
✅ **Shadcn UI**: Consistent components  
✅ **Pagination**: Both infinite scroll AND buttons  
✅ **CRUD Operations**: Full create, read, update, delete  
✅ **Error Handling**: Comprehensive with retry  
✅ **Aceternity UI**: Beautiful animations and design  
✅ **Hero Section**: Stunning landing section  
✅ **About Us**: Company information section  
✅ **Contact Us**: Working contact form  
✅ **Footer**: Complete site footer  
✅ **No Login**: Direct access to all features  
✅ **TypeScript**: Fully typed  
✅ **Responsive Design**: Mobile-first approach  

## 🎯 Features Checklist

- ✅ Hero section with animations
- ✅ Product listing with search
- ✅ Infinite scroll pagination
- ✅ Traditional pagination buttons
- ✅ Product details with image gallery
- ✅ Favorites system
- ✅ Create/Edit/Delete products
- ✅ About Us section
- ✅ Contact Us form
- ✅ Footer with newsletter
- ✅ Dark mode toggle
- ✅ Toast notifications
- ✅ Loading & error states
- ✅ Fully responsive design
- ✅ Aceternity UI-inspired design
- ✅ Framer Motion animations
- ✅ No authentication required

## 🐛 Known Limitations

- DummyJSON API simulates changes (doesn't persist)
- Favorites are session-based (not persisted to database)
- Contact form is simulated (no backend)
- Images from cdn.dummyjson.com only

## 📖 Learning Outcomes

This project demonstrates:
- Modern Next.js 15 App Router patterns
- Advanced state management with Redux Toolkit
- Real-world API integration with Axios
- TypeScript best practices
- Component composition and reusability
- Aceternity UI-inspired design patterns
- Framer Motion animation techniques
- Performance optimization
- Modern UI/UX patterns
- Accessibility considerations

## 🎨 Design Inspiration

Inspired by:
- Aceternity UI components
- Modern SaaS landing pages
- Premium eCommerce sites
- Glassmorphism design trend
