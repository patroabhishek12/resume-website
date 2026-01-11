#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const resumeDataPath = process.argv[2] || './resume-data.json';
const outputPath = process.argv[3] || './public/index.html';

if (!fs.existsSync(resumeDataPath)) {
    console.error(`Error: Resume data file not found at ${resumeDataPath}`);
    process.exit(1);
}

const resumeData = JSON.parse(fs.readFileSync(resumeDataPath, 'utf-8'));

const generateHTML = (data) => {
    const {
        name,
        title,
        subtitle,
        description,
        email,
        social = {},
        summary = {},
        experience = [],
        skills = [],
        education = [],
        accomplishments = [],
        theme = {}
    } = data;

    const primaryColor = theme.primaryColor || '#2563eb';
    const secondaryColor = theme.secondaryColor || '#1e40af';
    const accentColor = theme.accentColor || '#3b82f6';

    const navSections = [
        'home', 
        summary.heading ? 'summary' : null,
        experience.length ? 'experience' : null,
        skills.length ? 'skills' : null,
        accomplishments.length ? 'accomplishments' : null,
        education.length ? 'education' : null,
        'contact'
    ].filter(Boolean);

    const navLinks = {
        home: 'Home',
        summary: 'About',
        experience: 'Experience',
        skills: 'Skills',
        accomplishments: 'Awards',
        education: 'Education',
        contact: 'Contact'
    };

    const generateNavMenu = () => {
        return navSections.map(section => 
            `<li><a href="#${section}">${navLinks[section]}</a></li>`
        ).join('\n                ');
    };

    const generateSocialLinks = () => {
        const links = [];
        if (email) links.push(`<a href="mailto:${email}" target="_blank" aria-label="Email"><i class="fas fa-envelope"></i></a>`);
        if (social.linkedin) links.push(`<a href="${social.linkedin}" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>`);
        if (social.portfolio) links.push(`<a href="${social.portfolio}" target="_blank" aria-label="Portfolio"><i class="fas fa-globe"></i></a>`);
        if (social.github) links.push(`<a href="${social.github}" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>`);
        return links.join('\n                    ');
    };

    const generateSummarySection = () => {
        if (!summary.content) return '';
        
        const highlights = (summary.highlights || []).map(h => `
                <div class="highlight-item">
                    <i class="fas fa-${h.icon}"></i>
                    <p><strong>${h.title}</strong> ${h.description}</p>
                </div>`).join('\n');

        const certs = (summary.certifications || []).map(c => 
            `<span class="cert-badge"><i class="fas fa-certificate"></i>${c}</span>`
        ).join('\n                    ');

        return `
    <!-- Professional Summary -->
    <section id="summary" class="section summary-section">
        <div class="container">
            <h2 class="section-title">${summary.heading || 'Professional Summary'}</h2>
            <div class="summary-content">
                <p>${summary.content}</p>
                <div class="summary-highlights">
                    ${highlights}
                </div>
                ${certs ? `<div class="certifications">\n                    ${certs}\n                </div>` : ''}
            </div>
        </div>
    </section>`;
    };

    const generateAccomplishmentsSection = () => {
        if (!accomplishments.length) return '';

        const cards = accomplishments.map(a => `
                <div class="accomplishment-card">
                    <div class="award-icon">${a.icon || '🏆'}</div>
                    <h3>${a.title}</h3>
                    ${a.position ? `<p class="award-position">${a.position}</p>` : ''}
                    <p>${a.description}</p>
                </div>`).join('\n');

        return `
    <!-- Accomplishments -->
    <section id="accomplishments" class="section accomplishments-section">
        <div class="container">
            <h2 class="section-title">Accomplishments & Awards</h2>
            <div class="accomplishments-grid">
                ${cards}
            </div>
        </div>
    </section>`;
    };

    const generateExperienceSection = () => {
        if (!experience.length) return '';

        const items = experience.map(exp => `
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-header">
                            <h3>${exp.title}</h3>
                            <span class="company">${exp.company}</span>
                            <span class="location">${exp.location}</span>
                            <span class="duration">${exp.duration}</span>
                        </div>
                        <ul class="timeline-details">
                            ${exp.highlights.map(h => `<li>${h}</li>`).join('\n                            ')}
                        </ul>
                        <div class="tech-tags">
                            ${exp.technologies.map(t => `<span>${t}</span>`).join('\n                            ')}
                        </div>
                    </div>
                </div>`).join('\n');

        return `
    <!-- Work Experience -->
    <section id="experience" class="section experience-section">
        <div class="container">
            <h2 class="section-title">Work Experience</h2>
            <div class="timeline">
                ${items}
            </div>
        </div>
    </section>`;
    };

    const generateSkillsSection = () => {
        if (!skills.length) return '';

        const categories = skills.map(skill => `
            <div class="skill-category">
                <h3>${skill.category}</h3>
                <div class="skill-items">
                    ${skill.items.map(item => `<div class="skill-item">${item}</div>`).join('\n                    ')}
                </div>
            </div>`).join('\n');

        return `
    <!-- Skills -->
    <section id="skills" class="section skills-section">
        <div class="container">
            <h2 class="section-title">Skills</h2>
            <div class="skills-grid">
                ${categories}
            </div>
        </div>
    </section>`;
    };

    const generateEducationSection = () => {
        if (!education.length) return '';

        const items = education.map(edu => `
                <div class="education-item">
                    <div class="education-header">
                        <h3>${edu.degree}</h3>
                        <span class="education-year">${edu.year}</span>
                    </div>
                    <p class="education-field">${edu.field}</p>
                    <p class="education-institution">${edu.institution}</p>
                    ${edu.details ? `<p class="education-details">${edu.details}</p>` : ''}
                </div>`).join('\n');

        return `
    <!-- Education -->
    <section id="education" class="section education-section">
        <div class="container">
            <h2 class="section-title">Education</h2>
            <div class="education-list">
                ${items}
            </div>
        </div>
    </section>`;
    };

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${name} - ${title}">
    <meta name="author" content="${name}">
    <title>${name} - ${title}</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary-color: ${primaryColor};
            --secondary-color: ${secondaryColor};
            --accent-color: ${accentColor};
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <div class="nav-brand">${name}</div>
            <ul class="nav-menu">
                ${generateNavMenu()}
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">${name}</h1>
                <h2 class="hero-subtitle">${title}</h2>
                <p class="hero-description">${subtitle}</p>
                <div class="hero-buttons">
                    <a href="#contact" class="btn btn-primary">Get In Touch</a>
                    ${experience.length ? '<a href="#experience" class="btn btn-secondary">View Work</a>' : ''}
                </div>
                <div class="social-links">
                    ${generateSocialLinks()}
                </div>
            </div>
        </div>
    </section>

    ${generateSummarySection()}
    ${generateAccomplishmentsSection()}
    ${generateExperienceSection()}
    ${generateSkillsSection()}
    ${generateEducationSection()}

    <!-- Contact Section -->
    <section id="contact" class="section contact-section">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-content">
                <p>Feel free to reach out to me via email or connect with me on social media.</p>
                <div class="contact-info">
                    ${email ? `<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>` : ''}
                    ${social.phone ? `<p><strong>Phone:</strong> ${social.phone}</p>` : ''}
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 ${name}. All rights reserved.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>`;

    return html;
};

try {
    const html = generateHTML(resumeData);
    fs.writeFileSync(outputPath, html, 'utf-8');
    console.log(`✓ Resume generated successfully: ${outputPath}`);
} catch (error) {
    console.error('Error generating resume:', error.message);
    process.exit(1);
}
