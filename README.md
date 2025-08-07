# Professional Portfolio Website

A sleek, modern, and responsive portfolio website designed to showcase your skills, experience, and projects to potential recruiters and employers.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: 
  - Smooth scrolling navigation
  - Project category tabs (SWE vs AI projects)
  - Contact form with validation
  - Hover effects and animations
- **Performance Optimized**: Fast loading with modern CSS and JavaScript
- **SEO Friendly**: Proper semantic HTML structure
- **Accessibility**: ARIA labels and keyboard navigation support

## 🎯 Sections Included

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Me**: Personal description with key statistics
3. **Experience**: Timeline-based work history
4. **Skills & Courses**: Categorized technical skills and certifications
5. **Projects**: Separate tabs for Software Engineering and AI projects
6. **Contact**: Contact form and social media links
7. **Footer**: Additional navigation and copyright

## 🚀 Quick Start

1. **Clone or Download**: Get the portfolio files
2. **Customize Content**: Update the placeholder content with your information
3. **Add Your Resume**: Place your resume PDF as `resume.pdf` in the root directory
4. **Deploy**: Upload to your hosting service

## 📝 Customization Guide

### Personal Information

**Update these sections in `index.html`:**

```html
<!-- Hero Section -->
<h1 class="hero-title">Hi, I'm <span class="gradient-text">Your Name</span></h1>
<p class="hero-subtitle">Software Engineer & AI Enthusiast</p>

<!-- Navigation Logo -->
<a href="#home">Your Name</a>

<!-- Contact Information -->
<span>your.email@example.com</span>
<span>+1 (555) 123-4567</span>
<span>Your City, State</span>

<!-- Social Media Links -->
<a href="https://github.com/yourusername" target="_blank">
<a href="https://linkedin.com/in/yourusername" target="_blank">
<a href="https://twitter.com/yourusername" target="_blank">
<a href="mailto:your.email@example.com">
```

### About Section

Replace the placeholder text in the about section with your own story, background, and career highlights.

### Experience Section

Update the timeline items with your actual work experience:

```html
<div class="timeline-content">
    <h3>Your Job Title</h3>
    <h4>Company Name</h4>
    <span class="timeline-date">Start Date - End Date</span>
    <ul>
        <li>Your achievement or responsibility</li>
        <li>Another achievement with metrics</li>
    </ul>
</div>
```

### Skills Section

Modify the skill categories and tags to match your expertise:

```html
<div class="skill-category">
    <h3>Category Name</h3>
    <div class="skills-list">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

### Projects Section

Update both SWE and AI project sections with your actual projects:

```html
<div class="project-card">
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description and key features</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="github-repo-url" target="_blank">
                <i class="fab fa-github"></i> Code
            </a>
            <a href="live-demo-url" target="_blank">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    </div>
</div>
```

## 🎨 Color Customization

To change the color scheme, modify the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;     /* Main brand color */
    --primary-dark: #4f46e5;      /* Darker shade */
    --secondary-color: #f59e0b;    /* Accent color */
    --accent-color: #10b981;       /* Success/highlight color */
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## 🔧 Technical Features

### JavaScript Functionality
- Mobile navigation toggle
- Smooth scrolling
- Project tab switching
- Contact form validation
- Scroll animations
- Custom cursor effects
- Loading animations

### CSS Features
- CSS Grid and Flexbox layouts
- Custom properties (CSS variables)
- Smooth transitions and animations
- Modern glassmorphism effects
- Responsive typography

## 🚀 Deployment Options

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to netlify.com
2. Or connect your GitHub repository
3. Your site will be deployed automatically

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### Traditional Hosting
Upload all files to your web hosting service's public directory (usually `public_html` or `www`).

## 📄 Resume Integration

1. Save your resume as `resume.pdf` in the root directory
2. The download button will automatically work
3. Alternatively, update the href in the resume download button:

```html
<a href="path/to/your/resume.pdf" class="btn btn-outline" download>
```

## 🔍 SEO Optimization

Don't forget to:
1. Update the `<title>` tag
2. Add meta descriptions
3. Include Open Graph tags for social sharing
4. Add a favicon

## 📞 Contact Form

The contact form includes:
- Client-side validation
- Success/error notifications
- Responsive design

To integrate with a backend service, modify the form submission in `script.js` or use services like:
- Formspree
- Netlify Forms
- EmailJS

## 🛠️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This portfolio template is free to use and modify for personal and commercial projects.

## 🤝 Support

If you need help customizing your portfolio or encounter any issues, feel free to reach out!

---

**Ready to impress recruiters? Customize this portfolio and make it yours!** 🚀
