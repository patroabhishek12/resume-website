# Quick Start Guide

## 🚀 Get Your Resume Website Live in Minutes!

### Option 1: Deploy Directly to GitHub Pages (Recommended - No Node.js Required!)

If you just want to host the static website without running it locally:

1. **Install Git** (if not already installed):
   - Download from: https://git-scm.com/download/win
   - Install with default settings

2. **Create a GitHub account** (if you don't have one):
   - Go to: https://github.com/signup

3. **Create a new repository:**
   - Go to: https://github.com/new
   - Repository name: `<your-username>.github.io` or any name like `my-resume`
   - Keep it Public
   - Don't initialize with README
   - Click "Create repository"

4. **Open PowerShell in the project folder:**
   - Navigate to: `C:\Users\ADMIN\resume-website`
   - Right-click in the folder and select "Open in Terminal" or "Open PowerShell window here"

5. **Run these commands one by one:**

   ```powershell
   # Initialize git
   git init
   
   # Add all files
   git add .
   
   # Commit files
   git commit -m "Initial commit: My resume website"
   
   # Add your GitHub repository (REPLACE with your actual URL)
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   
   # Create and push gh-pages branch (for GitHub Pages)
   git checkout -b gh-pages
   git push -u origin gh-pages
   ```

6. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings**
   - Scroll to **Pages** (in the left sidebar)
   - Under **Branch**, select `gh-pages` and folder `/` (root)
   - Click **Save**
   - Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

7. **Important:** After pushing to gh-pages, copy only the `public` folder contents to the root:
   - In your repository on GitHub, you can either:
     - Use GitHub's web interface to move files from `public/` to root
     - Or update the GitHub Pages settings to use `/public` folder
     - Or in your local terminal:
   ```powershell
   git checkout gh-pages
   Copy-Item -Path public/* -Destination . -Recurse
   git add .
   git commit -m "Move public files to root"
   git push
   ```

---

### Option 2: Run Locally with Node.js

If you want to test the website locally before deploying:

1. **Install Node.js:**
   - Download from: https://nodejs.org/
   - Choose the LTS version (Long Term Support)
   - Run the installer with default settings
   - Restart your terminal/PowerShell after installation

2. **Verify installation:**
   ```powershell
   node --version
   npm --version
   ```

3. **Install project dependencies:**
   ```powershell
   cd C:\Users\ADMIN\resume-website
   npm install
   ```

4. **Start the development server:**
   ```powershell
   npm start
   ```

5. **Open your browser:**
   - Navigate to: http://localhost:3000
   - You should see your resume website!

6. **To stop the server:**
   - Press `Ctrl + C` in the terminal

---

## 📝 Customization Checklist

Before deploying, you may want to customize:

- [ ] Update GitHub link in `public/index.html` (line 55)
- [ ] Add your actual GitHub username
- [ ] Review all personal information
- [ ] Delete or update `public/CNAME` file (only needed for custom domains)
- [ ] Update profile photo (add an image and update hero section if desired)

---

## 🔧 Troubleshooting

### "npm is not recognized"
- Node.js is not installed. Follow Option 2 above.

### "git is not recognized"
- Git is not installed. Download from: https://git-scm.com/download/win

### Website not showing up on GitHub Pages
- Wait 2-5 minutes after enabling GitHub Pages
- Make sure the `index.html` is in the root of gh-pages branch
- Check the Pages settings in your repository

### Can't push to GitHub
- Make sure you've replaced YOUR-USERNAME and YOUR-REPO-NAME with actual values
- You may need to authenticate with GitHub (use a Personal Access Token)
- Follow GitHub's authentication guide: https://docs.github.com/en/authentication

---

## 🎯 Next Steps

1. ✅ Test the website locally (Option 2)
2. ✅ Deploy to GitHub Pages (Option 1)
3. 🔗 Share your resume website URL
4. 🎨 Customize colors and content as needed
5. 📱 Test on mobile devices

---

## 💡 Tips

- **For custom domain:** Update `public/CNAME` file with your domain
- **For SEO:** Update meta tags in `public/index.html`
- **For analytics:** Add Google Analytics code to `public/index.html`
- **For SSL:** GitHub Pages provides free SSL for `.github.io` domains

---

## 📧 Need Help?

If you encounter any issues:
1. Check the main README.md file
2. Search for your error message on Google
3. Check GitHub Pages documentation: https://pages.github.com/

---

**Good luck with your resume website! 🚀**
