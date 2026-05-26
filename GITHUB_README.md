# 🛋️ FurnishHub - Premium Furniture Rental Website

> A modern, fully-functional React + Vite website for furniture rental services targeting students and early career professionals.

[![React](https://img.shields.io/badge/React-18.2-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.3-purple?logo=vite)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)](https://www.javascript.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](#license)

## ✨ Features

### 🎯 Core Sections
- **Navigation Bar** - Sticky header with smooth scrolling
- **Hero Section** - Eye-catching banner with CTAs
- **Features Showcase** - 6 benefits highlighted
- **Categories** - 8 furniture categories
- **Products** - 8 items with dynamic filtering ⭐
- **Pricing** - 3 tiers with monthly/annual toggle ⭐
- **Testimonials** - 6 customer reviews
- **FAQ** - 8 questions in accordion format ⭐
- **Contact** - Form with validation
- **Footer** - Company info & links

### ⚡ Interactive Features
✅ **Product Filtering** - Click to filter by category  
✅ **Pricing Toggle** - Switch between monthly/annual billing  
✅ **FAQ Accordion** - Expand/collapse questions  
✅ **Smooth Navigation** - Jump to any section  
✅ **Contact Form** - Fully functional with validation  
✅ **Responsive Design** - Works on all devices  
✅ **Smooth Animations** - Professional transitions  

## 🚀 Quick Start

### Prerequisites
- Node.js v14+
- npm or yarn

### Installation

```bash
# Clone or download this repository
git clone https://github.com/yourusername/furnishhub.git
cd furniture-rental-site

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser! 🎉

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag & drop the 'dist' folder to Netlify
```

## 📁 Project Structure

```
furniture-rental-site/
├── src/
│   ├── components/              # React components (10 files)
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Categories.jsx
│   │   ├── Products.jsx        ⭐ With filtering
│   │   ├── Pricing.jsx         ⭐ With toggle
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx             ⭐ Accordion
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/                  # CSS files (5 files)
│   │   ├── global.css
│   │   ├── navbar.css
│   │   ├── hero-features.css
│   │   ├── products-pricing.css
│   │   └── testimonials-faq-footer.css
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # React entry point
├── index.html                   # HTML template
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
└── README.md                   # Documentation
```

## 🎨 Customization

### Change Colors
Edit `src/styles/global.css`:
```css
:root {
  --primary: #2563eb;        /* Main color */
  --secondary: #f59e0b;      /* Accent color */
  --text-dark: #1f2937;      /* Text color */
  /* ... more variables */
}
```

### Update Company Name
In `src/components/Navbar.jsx` and `src/components/Footer.jsx`:
```jsx
<div className="navbar-logo">
  <div className="navbar-logo-icon">YOUR_INITIALS</div>
  Your Company Name
</div>
```

### Add Products
Edit `src/components/Products.jsx`:
```jsx
const products = [
  {
    id: 1,
    name: 'Product Name',
    category: 'Category',
    image: '🛏️',
    price: 1299,
    period: '/month',
    description: 'Description',
    features: ['Feature 1', 'Feature 2'],
    badge: 'New'
  },
  // Add more...
];
```

### Update Pricing Plans
Edit `src/components/Pricing.jsx`:
```jsx
const plans = [
  {
    name: 'Plan Name',
    monthlyPrice: 1999,
    annualPrice: 19990,
    description: 'Plan description',
    features: ['Feature 1', 'Feature 2'],
    featured: false
  },
  // Add more...
];
```

## 💻 Technology Stack

- **React 18** - UI library
- **Vite 4** - Build tool & dev server
- **CSS3** - Styling & animations
- **JavaScript ES6+** - Programming language
- **HTML5** - Semantic markup

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎯 Product Data

### 8 Sample Products
- Queen Size Bed - ₹1,299/month
- Executive Study Desk - ₹799/month
- Modern L-Shaped Sofa - ₹2,499/month
- Wooden Dining Table - ₹1,599/month
- Office Chair Ergonomic - ₹599/month
- Wardrobe Cabinet - ₹899/month
- Corner Bookshelf - ₹499/month
- Nightstand Wooden - ₹299/month

### 3 Pricing Tiers
- **Starter** - ₹1,999/month (Up to 2 items)
- **Premium** - ₹4,999/month (Up to 5 items) ⭐ Most Popular
- **Enterprise** - ₹9,999/month (Unlimited items)

### 6 Customer Testimonials
All with 5-star ratings from various customer types:
- Engineering Student
- Young Professional
- College Graduate
- Design Student
- Software Engineer
- MBA Student

## 🔧 Available Scripts

```bash
# Development
npm run dev           # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Maintenance
npm install          # Install dependencies
npm update           # Update packages
```

## 📚 Documentation

- **README.md** - Full project documentation
- **QUICK_START.md** - 5-minute setup guide
- **FEATURES.md** - Detailed feature list
- **CUSTOMIZATION.md** - How to customize

## 🎨 Design Features

- ✅ Gradient backgrounds
- ✅ Smooth animations
- ✅ Mobile-first responsive design
- ✅ Accessibility-friendly
- ✅ Modern color scheme
- ✅ Professional typography

## 🌐 SEO Ready

- Semantic HTML structure
- Meta tags included
- Proper heading hierarchy
- Fast page load times
- Mobile responsive

## 📊 Performance

- Built with Vite for optimal speed
- No unnecessary dependencies
- CSS animations use GPU acceleration
- Optimized asset loading
- Lighthouse optimized

## 🚀 Deployment Checklist

- [ ] Customize company name and colors
- [ ] Update contact information
- [ ] Add your own products/prices
- [ ] Update testimonials
- [ ] Add company logo (optional)
- [ ] Test on mobile devices
- [ ] Build: `npm run build`
- [ ] Deploy to Vercel/Netlify
- [ ] Test in production
- [ ] Set up custom domain (optional)

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📝 License

MIT License - see LICENSE file for details

## 💬 Support

For questions or issues:
1. Check the documentation files
2. Review component comments
3. Check React/Vite documentation
4. Contact: support@furnishhub.com

## 🎉 Credits

Created as a complete furniture rental demo website template.

---

## 🌟 Show Your Support

If you found this helpful, please give it a ⭐ on GitHub!

## 📞 Contact & Links

- **Website**: furnishhub.com (when deployed)
- **Email**: support@furnishhub.com
- **Phone**: +91 9876 543 210

---

### 🎯 Next Steps

1. ✅ Extract the zip file
2. ✅ Run `npm install && npm run dev`
3. ✅ Customize for your needs
4. ✅ Deploy to production
5. ✅ Share with your client!

**Happy coding! 🚀**

---

*Last updated: May 17, 2024*
*Made with ❤️ for furniture rental agencies*
