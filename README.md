# Allison Krinsky - Personal Brand Website

A modern, tab-based portfolio website built with React, Tailwind CSS, and Framer Motion. Designed to showcase your personal brand as a Product Manager at JPMorgan Chase and content creator empowering ambitious young women in tech.

## 🌟 Features

- **Tab-Based Navigation** - Clean, organized sections accessible via tabs (Home, About, Projects, Connect)
- **Modern Design** using Tailwind CSS with custom color palette
- **Smooth Animations** powered by Framer Motion
- **Mobile-First** responsive design
- **Fast Performance** optimized for quick load times
- **Accessible** following WCAG 2.1 AA standards
- **Auto-Deploy** to GitHub Pages via GitHub Actions

## 🚀 Quick Start

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173/` to view your site.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📦 Deployment to GitHub Pages

The site is configured to automatically deploy to GitHub Pages when you push to the `master` branch.

### Setup (First Time Only)

1. Go to your repository settings on GitHub
2. Navigate to **Pages** (under "Code and automation")
3. Under **Build and deployment**:
   - Source: Select "GitHub Actions"
4. That's it! The workflow will handle the rest.

### Deploy Changes

Simply commit and push your changes to the `master` branch:

```bash
git add .
git commit -m "Update website content"
git push origin master
```

The GitHub Actions workflow will automatically build and deploy your site within a few minutes.

## 🎨 Customization Guide

### Update Content

#### 1. Hero Section
Edit `/src/components/Hero.jsx`:
- Update headlines and subheadlines
- Replace emoji placeholder with actual photo (add image to `/public/images/`)
- Modify CTA button links

#### 2. About Section
Edit `/src/components/About.jsx`:
- Update bio text
- Modify values/key points
- Replace photo placeholder with actual image

#### 3. Projects Section
Edit `/src/components/Projects.jsx`:
- Add/remove/edit projects in the `projects` array
- Update categories, descriptions, and links
- Change project emojis

#### 4. Connect Section
Edit `/src/components/Connect.jsx`:
- Update social media links and handles
- Modify contact form email address
- Customize form fields

### Add Your Photos

1. Add your images to `/public/images/`
2. Update component image references:

```jsx
// In Hero.jsx, replace the emoji placeholder:
<img
  src="/images/hero-photo.jpg"
  alt="Allison Krinsky"
  className="w-full h-full object-cover"
/>
```

### Customize Colors

Edit `/tailwind.config.js` to change the color palette:

```javascript
colors: {
  'warm-black': '#1a1a1a',
  'soft-black': '#2d2d2d',
  'cream': '#f5f3f0',
  'taupe': '#b8a99a',
  'deep-burgundy': '#7c3a3a',
  'gold': '#d4af37',
}
```

### Modify Typography

Update font families in `/tailwind.config.js`:

```javascript
fontFamily: {
  'display': ['Montserrat', 'sans-serif'],
  'body': ['Inter', 'sans-serif'],
}
```

Don't forget to update the Google Fonts link in `/index.html` if you change fonts.

## 📁 Project Structure

```
/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── images/             # Add your images here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky navigation bar
│   │   ├── Hero.jsx        # Landing section
│   │   ├── About.jsx       # About me section
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── ProjectCard.jsx # Individual project card
│   │   ├── Connect.jsx     # Social links & contact form
│   │   └── Footer.jsx      # Footer with social links
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles & Tailwind
├── old-site/               # Backup of your old website
├── index.html              # HTML entry point
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🛠 Tech Stack

- **React 18** - UI framework
- **Vite 6** - Build tool
- **Tailwind CSS 3** - Styling
- **Framer Motion 11** - Animations
- **React Icons 5** - Icon library

## 🎯 Content Pillars

The site is organized around four content areas:

1. **👩🏽‍💼 Career & Corporate Life** - AI/ML product management & tech career
2. **👩🏽‍💻 Productivity & Upskilling** - Staying technical, learning strategies
3. **👸🏽 Balancing It All** - Work-life integration, intentional routines
4. **💁🏽‍♀️ Lifestyle** - Travel, aspirational but accessible content

## 📝 Next Steps

1. **Add Your Photos:**
   - Hero section professional photo
   - About section photo
   - Optional: Project thumbnails

2. **Customize Content:**
   - Update bio text to match your current experience
   - Add your actual projects and content
   - Update social media links

3. **Update Projects:**
   - Replace placeholder projects with your real content
   - Add links to your Instagram, LinkedIn posts, or other content

4. **Test Locally:**
   - Run `npm run dev` and review all sections
   - Test on mobile (Chrome DevTools)
   - Verify all links work

5. **Deploy:**
   - Push to GitHub
   - Verify GitHub Pages deployment succeeds
   - Visit your live site!

## 💡 Tips

- **Images:** Use high-quality, optimized images (compress before uploading)
- **Content:** Keep text concise and action-oriented
- **Mobile:** Always test on mobile - that's where most visitors browse
- **Performance:** Run Lighthouse audits to ensure fast load times

## 🤝 Support

For issues or questions:
- Check the [Vite documentation](https://vitejs.dev/)
- Review [React documentation](https://react.dev/)
- Consult [Tailwind CSS docs](https://tailwindcss.com/)

## 📄 License

© 2026 Allison Krinsky. All rights reserved.

---

Built with intention. 💜
