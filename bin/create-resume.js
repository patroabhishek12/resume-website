#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const prompt = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const createResumeTemplate = async () => {
    console.log('\n🚀 Welcome to Resume Template Generator!\n');
    console.log('This tool will create a new resume project with your information.\n');

    const projectName = await prompt('Project name (e.g., my-resume): ');
    const name = await prompt('Your full name: ');
    const title = await prompt('Your professional title (e.g., Senior Software Engineer): ');
    const subtitle = await prompt('Your specializations (e.g., Java Backend | Cloud): ');
    const email = await prompt('Your email: ');
    const linkedin = await prompt('LinkedIn profile URL (optional): ');
    const github = await prompt('GitHub profile URL (optional): ');
    const portfolio = await prompt('Portfolio URL (optional): ');

    rl.close();

    const projectPath = path.join(process.cwd(), projectName);

    if (fs.existsSync(projectPath)) {
        console.error(`\n✗ Error: Directory '${projectName}' already exists.`);
        process.exit(1);
    }

    // Create project structure
    console.log(`\n📁 Creating project structure...\n`);

    fs.mkdirSync(projectPath);
    fs.mkdirSync(path.join(projectPath, 'public'));

    // Copy template files (in a real scenario, these would be template files)
    const templateFiles = {
        'package.json': {
            "name": projectName,
            "version": "1.0.0",
            "description": `Resume website for ${name}`,
            "main": "server.js",
            "scripts": {
                "start": "node server.js",
                "dev": "nodemon server.js",
                "build": "node build-resume.js",
                "deploy": "npm run build && gh-pages -d public"
            },
            "keywords": ["resume", "portfolio"],
            "author": name,
            "license": "MIT",
            "dependencies": {
                "express": "^4.18.2"
            },
            "devDependencies": {
                "gh-pages": "^6.1.0",
                "nodemon": "^3.0.1"
            },
            "engines": {
                "node": ">=14.0.0"
            }
        },
        'resume-data.json': {
            name,
            title,
            subtitle,
            description: `Professional resume website for ${name}`,
            email,
            social: {
                linkedin: linkedin || '',
                github: github || '',
                portfolio: portfolio || ''
            },
            summary: {
                heading: "Professional Summary",
                content: "Add your professional summary here...",
                highlights: [
                    {
                        icon: "briefcase",
                        title: "Your Specialization",
                        description: "Add your specialization details"
                    }
                ],
                certifications: []
            },
            experience: [
                {
                    title: "Job Title",
                    company: "Company Name",
                    location: "City, Country",
                    duration: "Month Year - Present",
                    highlights: [
                        "Achievement or responsibility",
                        "Achievement or responsibility"
                    ],
                    technologies: ["Tech1", "Tech2"]
                }
            ],
            skills: [
                {
                    category: "Languages",
                    items: ["Language1", "Language2"]
                }
            ],
            education: [
                {
                    degree: "Bachelor of Engineering",
                    field: "Computer Science",
                    institution: "University Name",
                    year: "2020"
                }
            ],
            accomplishments: [],
            theme: {
                primaryColor: "#2563eb",
                secondaryColor: "#1e40af",
                accentColor: "#3b82f6"
            }
        },
        'server.js': `const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(\`Server running on http://localhost:\${PORT}\`);
});`,
        'build-resume.js': fs.readFileSync(path.join(__dirname, '..', 'build-resume.js'), 'utf-8'),
        '.gitignore': `node_modules
*.log
.DS_Store
dist
build
.env
.env.local`,
        'README.md': `# ${name}'s Resume Website

A professional resume website built with the Resume Template.

## Quick Start

1. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

2. Update your resume data in \`resume-data.json\`

3. Build and run locally:
   \`\`\`
   npm run build
   npm start
   \`\`\`

4. View at http://localhost:3000

## Customization

### Update Resume Content
Edit \`resume-data.json\` with your information:
- Personal details and contact info
- Professional summary
- Work experience
- Skills
- Education
- Awards and accomplishments

### Customize Theme
Modify the \`theme\` section in \`resume-data.json\`:
\`\`\`json
"theme": {
  "primaryColor": "#2563eb",
  "secondaryColor": "#1e40af",
  "accentColor": "#3b82f6"
}
\`\`\`

### Customize Styling
Edit \`public/styles.css\` for additional styling changes.

## Deployment

Deploy to GitHub Pages:
\`\`\`
npm run deploy
\`\`\`

Ensure your repository has a \`gh-pages\` branch configured.

## License

MIT
`
    };

    // Write files
    Object.entries(templateFiles).forEach(([filename, content]) => {
        const filePath = path.join(projectPath, filename);
        const fileContent = typeof content === 'string' ? content : JSON.stringify(content, null, 2);
        fs.writeFileSync(filePath, fileContent, 'utf-8');
    });

    // Copy CSS and JS from the template
    const cssSource = path.join(__dirname, '..', 'public', 'styles.css');
    const jsSource = path.join(__dirname, '..', 'public', 'script.js');
    
    if (fs.existsSync(cssSource)) {
        fs.copyFileSync(cssSource, path.join(projectPath, 'public', 'styles.css'));
    }
    
    if (fs.existsSync(jsSource)) {
        fs.copyFileSync(jsSource, path.join(projectPath, 'public', 'script.js'));
    }

    console.log('✓ Project created successfully!\n');
    console.log(`📂 Project location: ${projectPath}\n`);
    console.log('📝 Next steps:\n');
    console.log(`   1. cd ${projectName}`);
    console.log('   2. npm install');
    console.log('   3. Edit resume-data.json with your information');
    console.log('   4. npm run build');
    console.log('   5. npm start\n');
    console.log('🚀 Happy building!\n');
};

createResumeTemplate().catch((err) => {
    console.error('Error:', err.message);
    process.exit(1);
});
