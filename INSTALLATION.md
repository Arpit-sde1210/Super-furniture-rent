# 📚 Installation & Setup Guide

## Table of Contents
1. [System Requirements](#system-requirements)
2. [Installation Steps](#installation-steps)
3. [Verification](#verification)
4. [Troubleshooting](#troubleshooting)
5. [Next Steps](#next-steps)

---

## ✅ System Requirements

### Required
- **Node.js** - v14.0 or higher ([Download](https://nodejs.org/))
- **npm** - v6.0 or higher (comes with Node.js)
- **Git** (optional, for version control)

### Recommended
- **VS Code** - Code editor ([Download](https://code.visualstudio.com/))
- **Terminal/Command Prompt** - For running commands

### Optional
- **GitHub** account (for version control)
- **Vercel/Netlify** account (for deployment)

---

## 🚀 Installation Steps

### Step 1: Check Node.js Installation

Open your terminal/command prompt and run:

```bash
node --version
npm --version
```

You should see version numbers like:
```
v18.16.0
9.6.7
```

If not, download and install Node.js from https://nodejs.org/

---

### Step 2: Extract the Project

**On Windows/Mac:**
- Right-click `furniture-rental-site.zip`
- Select "Extract All" or "Unzip"
- Choose your desired location

**On Linux:**
```bash
unzip furniture-rental-site.zip
```

This will create a folder: `furniture-rental-site/`

---

### Step 3: Navigate to Project Folder

```bash
cd furniture-rental-site
```

You should see files like:
- `package.json`
- `index.html`
- `vite.config.js`
- `src/` folder
- `README.md`

---

### Step 4: Install Dependencies

```bash
npm install
```

This will:
- Create a `node_modules` folder (takes 1-2 minutes)
- Install React, Vite, and other dependencies
- Create `package-lock.json`

**You should see:**
```
added 150+ packages
```

---

### Step 5: Start Development Server

```bash
npm run dev
```

You should see output like:
```
  VITE v4.3.9  ready in 123 ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

---

### Step 6: Open in Browser

Click the link or manually open:
```
http://localhost:3000
```

🎉 **You should see the fully functional website!**

---

## ✅ Verification

### Check Everything Works:

1. **Home Page Loads**
   - [ ] You see the hero section
   - [ ] Logo says "FurnishHub"
   - [ ] All text is visible

2. **Navigation Works**
   - [ ] Click navbar links (smooth scroll)
   - [ ] Mobile menu button appears on small screens
   - [ ] Links change color on hover

3. **Interactive Features**
   - [ ] Click product filter buttons → products change
   - [ ] Click pricing "Monthly/Annual" → prices update
   - [ ] Click FAQ questions → answers expand
   - [ ] Scroll animations work smoothly

4. **Forms Work**
   - [ ] Contact form accepts input
   - [ ] Submit button works
   - [ ] Success message appears

5. **Mobile Responsive**
   - [ ] Resize browser window → layout adapts
   - [ ] Mobile menu appears on small screens
   - [ ] All content is readable

---

## 🐛 Troubleshooting

### Problem: Port 3000 Already in Use

**Error:** `EADDRINUSE: address already in use :::3000`

**Solution:**
```bash
# Kill process on port 3000
npx kill-port 3000

# Then try again
npm run dev
```

**Alternative:** Change port in `vite.config.js`:
```js
server: {
  port: 3001  // Use different port
}
```

---

### Problem: "npm: command not found"

**Cause:** Node.js not installed

**Solution:**
1. Download Node.js from https://nodejs.org/
2. Install it
3. Restart terminal
4. Check: `node --version`

---

### Problem: Blank Page in Browser

**Solutions:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Check browser console for errors (F12)
3. Make sure `npm run dev` is still running
4. Try different port: Edit `vite.config.js`
5. Restart development server

---

### Problem: "Cannot find module 'react'"

**Cause:** Dependencies not installed

**Solution:**
```bash
# Delete node_modules
rm -rf node_modules

# Reinstall
npm install

# Start again
npm run dev
```

---

### Problem: Slow Initial Load

**Normal:** First load takes 2-5 seconds while Vite builds

**Solution:** It gets faster after first load (HMR magic!)

---

### Problem: Changes Not Showing Up

**Solution:**
1. Save the file (Ctrl+S or Cmd+S)
2. Check browser automatically reloads
3. If not, manually refresh (F5)
4. Clear cache if needed (Ctrl+Shift+Delete)

---

## 📦 Building for Production

When ready to deploy:

```bash
# Build optimized version
npm run build

# This creates a 'dist' folder with optimized code
```

The `dist` folder contains:
- Minified JavaScript
- Optimized CSS
- Compressed assets
- Ready for deployment!

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - 2 minutes)

```bash
npm install -g vercel
vercel
```

Then follow the prompts. Your site goes live instantly!

### Option 2: Netlify (3 minutes)

1. Run: `npm run build`
2. Go to https://netlify.com
3. Drag & drop the `dist` folder
4. Done! Site is live

### Option 3: GitHub Pages (5 minutes)

```bash
# Create GitHub repository
git init
git add .
git commit -m "Initial commit"
git push -u origin main

# Then connect to GitHub Pages in settings
```

### Option 4: Traditional Hosting (10 minutes)

1. Run: `npm run build`
2. Upload `dist` folder to your server
3. Point domain to server
4. Done!

---

## 📚 Development Workflow

### Daily Development Loop:

```bash
# 1. Start development server
npm run dev

# 2. Edit files in src/ folder
# Changes auto-reload in browser

# 3. When done:
# Press Ctrl+C to stop server
```

### File You'll Edit Most Often:

- `src/components/Products.jsx` - Add/remove products
- `src/components/Pricing.jsx` - Change pricing
- `src/styles/global.css` - Change colors
- `src/components/Footer.jsx` - Update contact info

---

## 🎨 Customization Checklist

After installation, customize:

- [ ] Change company name (Navbar, Footer)
- [ ] Update colors (global.css)
- [ ] Change products (Products.jsx)
- [ ] Update pricing (Pricing.jsx)
- [ ] Edit contact info (Contact.jsx, Footer.jsx)
- [ ] Add your phone/email
- [ ] Update testimonials (Testimonials.jsx)
- [ ] Change FAQ (FAQ.jsx)

---

## 📱 Testing Guide

### Desktop Testing:
- [ ] Windows: Chrome, Firefox, Edge
- [ ] Mac: Chrome, Safari, Firefox

### Mobile Testing:
1. On same network
2. Find your IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
3. On mobile, visit: `http://[YOUR_IP]:3000`
4. Test all features on phone

### Responsive Testing:
1. Open DevTools (F12)
2. Click device icon (top-left)
3. Test different sizes
4. Try landscape mode

---

## 🆘 Getting Help

### Check These First:
1. **README.md** - Full documentation
2. **FEATURES.md** - Feature explanations
3. **Browser Console** - Error messages (F12)
4. **Vite Docs** - https://vitejs.dev/
5. **React Docs** - https://react.dev/

### Common Issues:
- Port already in use → `npx kill-port 3000`
- Node not found → Reinstall Node.js
- Dependencies issue → `npm install` again
- Cache issue → Clear browser cache

---

## ✅ Success Checklist

- [ ] Node.js installed (`node --version` works)
- [ ] Project extracted from zip
- [ ] `npm install` completed successfully
- [ ] `npm run dev` runs without errors
- [ ] Website visible at http://localhost:3000
- [ ] All sections load properly
- [ ] Interactive features work (filtering, toggle, etc.)
- [ ] Mobile view works
- [ ] Can make edits and see live reload

**If all checked, you're ready to go! 🎉**

---

## 📊 Project Info

- **Total Files:** 21
- **Components:** 10
- **CSS Files:** 5
- **Total Code:** ~830 lines
- **Dependencies:** React 18, Vite 4
- **Build Time:** ~2 seconds
- **Dev Server:** Instant HMR

---

## 🚀 Next Steps

1. ✅ Complete installation
2. ✅ Verify everything works
3. ✅ Customize for your client
4. ✅ Test on mobile/desktop
5. ✅ Build: `npm run build`
6. ✅ Deploy to Vercel/Netlify
7. ✅ Share with client!

---

## 💬 Tips

- **Auto-save:** Enable in VS Code (File → Auto Save)
- **Multiple terminals:** Open new terminal in VS Code (Ctrl+`)
- **Hot reload:** Changes appear instantly in browser
- **Mobile preview:** Use mobile phone on same WiFi
- **Keep terminal open:** Dev server must keep running

---

## 🎓 Learning Resources

If you want to understand the code better:

- **React Basics:** https://react.dev/learn
- **CSS Guide:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **Vite Guide:** https://vitejs.dev/guide/
- **JavaScript:** https://javascript.info/

---

## 📞 Support

**Still stuck?** 
1. Check error message in browser console (F12)
2. Search the error online
3. Review the README files
4. Contact development team

---

**Happy development! 🚀**

Made with ❤️ for furniture rental agencies
