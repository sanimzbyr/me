# Zubair Hossain — Engineering & Technology Portfolio

A modern, responsive, high-performance personal portfolio website for **Zubair Hossain** (Mechatronics Engineer, RUET), themed with a refined **Solarized Light** aesthetic and engineered specifically for static hosting on **GitHub Pages**.

---

## 🧭 Overview & Philosophy

This portfolio is designed to communicate multidisciplinary engineering capability spanning:
- **Mechanical & Mechatronics Engineering**: CAD (Fusion 360), CFD (ANSYS CFX), FEA, 3D printing & functional prototyping.
- **Software Engineering & Backend Architecture**: C#, .NET / ASP.NET, Java, Spring Boot, PostgreSQL, RESTful APIs.
- **Applied Artificial Intelligence**: Modern LLMs, AI agents, NLP, and document/spreadsheet automation pipelines.
- **Product Development & Entrepreneurship**: Transitioning engineering concepts into practical, deployable systems.

The visual direction follows the classic **Solarized Light** palette (`#FDF6E3` base, `#073642`/`#586E75` dark readable text, `#268BD2` blue, `#2AA198` cyan, `#859900` green, and `#B58900` yellow accents) to create a clean, elegant, technical, and mature developer portfolio.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with Solarized Light theme tokens
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Feather SVG Icons
- **Deployment**: Static output (`dist/`) hosted on **GitHub Pages** via GitHub Actions
- **Backend / Database**: None (pure client-side static application)

---

## 📞 Contact Information

- **Email**: [sanimzbyr@gmail.com](mailto:sanimzbyr@gmail.com)
- **Phone**: [+8801302827082](tel:+8801302827082)
- **GitHub**: [https://github.com/sanimzbyr](https://github.com/sanimzbyr)
- **LinkedIn**: [https://www.linkedin.com/in/sanimzbyr/](https://www.linkedin.com/in/sanimzbyr/)

---

## 📁 Project Structure

```text
zubair-hossain-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Actions deployment to GitHub Pages
├── public/
│   ├── favicon.svg               # Solarized ZH monogram favicon
│   └── 404.html                  # GitHub Pages client-side fallback
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Sticky header with mobile drawer & status badge
│   │   │   └── Footer.tsx        # Engineering footer with technical specifications
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Hero introduction & systems convergence map
│   │   │   ├── About.tsx         # Grounded professional background & RUET profile
│   │   │   ├── Skills.tsx        # Categorized engineering & software toolkit
│   │   │   ├── FeaturedProject.tsx # In-depth VAWT H-Darrieus thesis showcase
│   │   │   ├── SoftwareAiProjects.tsx # Software & AI cards (with concept distinction)
│   │   │   ├── EngineeringProjects.tsx # CAD, CFD, FEA, and robotics domain cards
│   │   │   ├── Methodology.tsx   # "How I Build" (Understand, Model, Build, Test)
│   │   │   ├── Interests.tsx     # Current technical research & development areas
│   │   │   ├── Timeline.tsx      # Chronological engineering & learning milestones
│   │   │   ├── Education.tsx     # RUET B.Sc. credentials & coursework
│   │   │   ├── GitHubSection.tsx # Open-source repository showcases
│   │   │   └── Contact.tsx       # Prominent contact cards (Email, Phone, GitHub, LinkedIn)
│   │   └── ui/
│   │       ├── Badge.tsx         # Solarized technical badge component
│   │       ├── Icons.tsx         # Crisp SVG icons for GitHub, LinkedIn, and Phone
│   │       ├── ProjectCard.tsx   # Reusable project card component
│   │       └── SectionHeader.tsx # Standardized engineering section title component
│   ├── data/
│   │   └── portfolioData.ts      # Centralized data file (personal links & projects)
│   ├── App.tsx                   # Main layout container
│   ├── index.css                 # Base styling, technical grids & Solarized Light palette
│   └── main.tsx                  # React DOM mount point
├── index.html                    # SEO metadata, Open Graph tags & Google Fonts
├── package.json                  # Dependencies & build scripts
├── tsconfig.json                 # TypeScript strict configuration
└── vite.config.ts                # Vite config (base: './' for GitHub Pages compatibility)
```

---

## ⚡ Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🚀 GitHub Pages Deployment Guide

The repository includes a ready-to-use GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys your site automatically whenever you push to `main`.

### Step-by-Step Deployment:

1. **Create a GitHub Repository**:
   - Create a new public repository on GitHub (e.g., `portfolio` or `sanimzbyr.github.io`).

2. **Initialize Git & Push**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of personal portfolio in Solarized theme"
   git branch -M main
   git remote add origin https://github.com/sanimzbyr/<repo-name>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click **Settings** → **Pages** (under the "Code and automation" section).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.

4. **Verify Deployment**:
   - Navigate to the **Actions** tab of your repository.
   - The "Deploy to GitHub Pages" workflow will run and deploy your site.
   - Once completed, your site will be live at:
     ```text
     https://sanimzbyr.github.io/<repo-name>/
     ```
     *(Or `https://sanimzbyr.github.io` if your repo is named `sanimzbyr.github.io`)*.

---

## 🔒 Content Integrity & Authenticity

In alignment with professional engineering standards:
- All conceptual projects (e.g. *Financial AI Platform*, *AI Business Automation*) are explicitly marked as **Product Concept** rather than production software.
- The **VAWT Thesis Project** clearly delineates between numerical CFD simulations (ANSYS CFX) and physical experimental prototyping.
- Academic credentials display verified RUET degree details, with explicit placeholders (`[YOUR_...]`) for graduation year and CGPA.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to use it as a foundation for your personal portfolio.
