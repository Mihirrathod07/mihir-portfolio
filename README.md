# Mihir Rathod — Portfolio (React + Vite)

Terminal / hacker-themed cybersecurity portfolio, built with React and Vite.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Folder structure

```
mihir-portfolio/
├── index.html              # Vite entry HTML
├── package.json
├── vite.config.js
├── public/
│   ├── assets/              # put Mihirrathod_Resume.pdf here
│   └── certificates/        # put your cert PDFs here
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css             # design tokens + all styles
    └── components/
        ├── MatrixRain.jsx
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Terminal.jsx      # interactive command-line
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Certifications.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Adding your files

- Drop your resume PDF into `public/assets/Mihirrathod_Resume.pdf`
- Drop certificate PDFs into `public/certificates/`
- Edit content directly inside each component file in `src/components/`

## Deploy

Works out of the box on Vercel, Netlify, or Render (static site, build command `npm run build`, output directory `dist`).
