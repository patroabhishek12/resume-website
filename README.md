# Abhishek Patro - Resume Website

A professional, responsive resume website built with Node.js, HTML, CSS, and JavaScript. Designed to be hosted on GitHub Pages.

## 🚀 Features

- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Single Page Application** - Smooth scrolling navigation between sections
- **Interactive Elements** - Hover effects, scroll animations, and mobile menu
- **Sections Include:**
  - Hero/Introduction
  - Professional Summary with Certifications
  - Awards & Accomplishments
  - Work Experience (Timeline view)
  - Technical Skills (Categorized)
  - Education
  - Contact Information

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- Git (for deployment to GitHub)

## 🛠️ Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd resume-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🎯 Usage

### Local Development

Run the development server:
```bash
npm start
```

Then open your browser and navigate to:
```
http://localhost:3000
```

### Development with Auto-Reload

For development with auto-reload (requires nodemon):
```bash
npm run dev
```

## 📦 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `<your-username>.github.io` (for user site) or any name (for project site)
3. Don't initialize with README, .gitignore, or license

### Step 2: Initialize Git and Push

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Resume website"

# Add your GitHub repository as remote
git remote add origin https://github.com/<your-username>/<repository-name>.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to GitHub Pages

```bash
# Deploy the public folder to gh-pages branch
npm run deploy
```

### Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under **Source**, select `gh-pages` branch
5. Click **Save**

Your site will be available at:
- User site: `https://<your-username>.github.io`
- Project site: `https://<your-username>.github.io/<repository-name>`

## 📁 Project Structure

```
resume-website/
├── public/
│   ├── index.html      # Main HTML file with resume content
│   ├── styles.css      # Complete styling
│   └── script.js       # JavaScript for interactivity
├── server.js           # Express server for local development
├── package.json        # Project dependencies
└── README.md          # This file
```

## 🎨 Customization

### Update Personal Information

Edit `public/index.html` and update:
- Name and title in the hero section
- Contact information
- Work experience details
- Skills and technologies
- Education details
- Social media links

### Change Colors/Theme

Edit `public/styles.css` and modify the CSS variables in the `:root` section:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    /* ... other variables */
}
```

### Modify Sections

You can add, remove, or reorder sections in `public/index.html`. Make sure to update the navigation menu accordingly.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Technologies Used

- **Backend:** Node.js, Express.js
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Icons:** Font Awesome 6
- **Deployment:** GitHub Pages
- **Package Manager:** npm

## 🤝 Contributing

This is a personal resume website. Feel free to fork and customize for your own use!

## 📄 License

MIT License - feel free to use this template for your own resume website.

## 👨‍💻 Author

**Abhishek Patro**
- Email: patroabhishek12@gmail.com
- LinkedIn: [linkedin.com/in/abhishek-patro-b85713153](https://www.linkedin.com/in/abhishek-patro-b85713153)
- Portfolio: [bold.pro/my/ab-11121991](https://bold.pro/my/ab-11121991)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography inspiration
- GitHub Pages for free hosting

---

**Built with ❤️ using Node.js**
