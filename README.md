# Resume Template

A professional, customizable resume website template with JSON-driven content and CLI scaffolding. Built with Node.js, HTML, CSS, and JavaScript. Perfect for hosting on GitHub Pages.

## 🚀 Features

- **JSON-Driven Configuration** - Define your resume once in `resume-data.json`, auto-generates beautiful HTML
- **CLI Scaffolding Tool** - Create new resume projects with `create-resume` command
- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Single Page Application** - Smooth scrolling navigation between sections
- **Interactive Elements** - Hover effects, scroll animations, and mobile menu
- **Customizable Themes** - Easy color customization via JSON config
- **Flexible Sections:**
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

## 🚀 Quick Start

### Option 1: Using the CLI Generator (Recommended)

Create a new resume project:
```bash
npx resume-template create
```

Follow the interactive prompts to set up your project. The CLI will:
1. Create a new project directory
2. Generate template files with your information
3. Set up all necessary configurations

### Option 2: Manual Setup

1. **Clone or navigate to the project directory:**
   ```bash
   cd resume-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Edit your resume data:**
   - Update `resume-data.json` with your personal information, experience, skills, etc.

4. **Build HTML from JSON:**
   ```bash
   npm run build
   ```

## 🎯 Usage

### Local Development

1. Update `resume-data.json` with your information
2. Build the resume:
   ```bash
   npm run build
   ```
3. Run the development server:
   ```bash
   npm start
   ```
4. Open your browser to:
   ```
   http://localhost:3000
   ```

### Development with Auto-Reload

For development with auto-reload (watches `resume-data.json` for changes):
```bash
npm run build:watch
```

This will rebuild your HTML whenever you save changes to `resume-data.json`.

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
resume-template/
├── public/
│   ├── index.html      # Generated HTML (auto-created from resume-data.json)
│   ├── styles.css      # Complete styling (reusable across projects)
│   └── script.js       # JavaScript for interactivity
├── bin/
│   └── create-resume.js    # CLI tool for scaffolding new projects
├── build-resume.js         # Build script (JSON → HTML)
├── resume-data.json        # Your resume data (single source of truth)
├── server.js               # Express server for local development
├── package.json            # Project dependencies
└── README.md               # This file
```

## 📝 JSON Resume Data Schema

The `resume-data.json` file is the single source of truth for your resume. Edit this file to update your resume content:

```json
{
  "name": "Your Name",
  "title": "Your Job Title",
  "subtitle": "Your Specializations",
  "description": "Brief intro",
  "email": "you@example.com",
  "social": {
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourprofile",
    "portfolio": "https://yourportfolio.com"
  },
  "summary": {
    "heading": "Professional Summary",
    "content": "Your professional summary...",
    "highlights": [
      {
        "icon": "briefcase",
        "title": "Specialization",
        "description": "Details about your specialization"
      }
    ],
    "certifications": ["Cert 1", "Cert 2"]
  },
  "experience": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "location": "City, Country",
      "duration": "Month Year - Present",
      "highlights": ["Achievement 1", "Achievement 2"],
      "technologies": ["Tech1", "Tech2"]
    }
  ],
  "skills": [
    {
      "category": "Languages",
      "items": ["Java", "Python", "Go"]
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Engineering",
      "field": "Computer Science",
      "institution": "University Name",
      "year": "2020"
    }
  ],
  "accomplishments": [
    {
      "title": "Award Name",
      "position": "Award Position",
      "description": "Award description",
      "icon": "🏆"
    }
  ],
  "theme": {
    "primaryColor": "#2563eb",
    "secondaryColor": "#1e40af",
    "accentColor": "#3b82f6"
  }
}
```

## 🎨 Customization

### Update Resume Content

Simply edit `resume-data.json`:
- Update personal information (name, email, social links)
- Add/modify work experience
- Update skills and certifications
- Add education and accomplishments
- All changes are reflected in the HTML after running `npm run build`

### Change Colors/Theme

Modify the `theme` object in `resume-data.json`:
```json
"theme": {
  "primaryColor": "#2563eb",
  "secondaryColor": "#1e40af",
  "accentColor": "#3b82f6"
}
```

Or override CSS variables in `public/styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    /* ... other variables */
}
```

### Advanced Styling

For additional styling customization, edit `public/styles.css`. The template uses CSS custom properties (variables) for easy theming.

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

## 📚 Examples

See `resume-data.json` in this repository for a complete example with all sections filled in.

## 🤝 Contributing

This template is open-source! Feel free to:
- Fork and customize for your own use
- Submit issues and feature requests
- Create pull requests with improvements

## 📄 License

MIT License - feel free to use this template for your own resume website.

## 👨‍💻 Template Creator

**Abhishek Patro**
- Email: patroabhishek12@gmail.com
- LinkedIn: [linkedin.com/in/abhishek-patro-8a3b401a4](https://www.linkedin.com/in/abhishek-patro-8a3b401a4)
- Portfolio: [bold.pro/my/ab-11121991](https://bold.pro/my/ab-11121991)
- GitHub: [github.com/springbootMicroservices2](https://github.com/springbootMicroservices2)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography inspiration
- GitHub Pages for free hosting
- All the users who help improve this template

---

**Built with ❤️ using Node.js & JavaScript**
