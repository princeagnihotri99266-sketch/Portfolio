# Prince Agnihotri — Hardware & Network Engineer Portfolio

A clean, modern, responsive personal portfolio website built specifically for **GitHub Pages** using **semantic HTML5, modern CSS3, and Vanilla JavaScript (ES6+)** with zero build tools or external frameworks.

---

## Folder Structure (Ready to Deploy)

```text
portfolio/
├── index.html                                           # Main semantic HTML5 portfolio page
├── css/
│   └── style.css                                        # Responsive styles, CSS variables, Dark/Light themes
├── js/
│   └── script.js                                        # Theme toggle, mobile menu, scroll reveal, project modal
├── assets/
│   ├── images/
│   │   └── profile-placeholder.png                      # Your cropped portrait photo
│   └── documents/
│       ├── resume.pdf                                   # Your resume PDF (linked to Download Resume button)
│       ├── AI_Literacy_Certificate.pdf                  # IBM SkillsBuild AI Literacy certificate PDF
│       └── Career_Management_Essentials_Certificate.pdf # IBM SkillsBuild Career Management Essentials PDF
└── README.md                                            # Project overview and GitHub Pages deployment guide
```

---

## Step-by-Step GitHub Pages Deployment Guide

### Option A: Deploy via GitHub Web Interface (Easiest)

1. **Log in to GitHub** at [github.com](https://github.com) using your account (`princeagnihotri99266-sketch`).
2. Click the **`+`** icon in the top-right corner and select **New repository**.
3. Name the repository (for example, `portfolio` or `princeagnihotri99266-sketch.github.io`), keep it **Public**, and click **Create repository**.
4. On the repository page, click **uploading an existing file**.
5. Extract this ZIP archive on your computer, open the `portfolio/` folder, and drag **all contents** (`index.html`, `css/`, `js/`, `assets/`, `README.md`) into the GitHub upload area.
   - *Important:* Ensure `index.html` is at the **root** of the repository, not inside a nested `portfolio/` folder.
6. Scroll down, enter a commit message (e.g., `Deploy portfolio website`), and click **Commit changes**.
7. Go to your repository's **Settings** tab &rarr; **Pages** (in the left sidebar).
8. Under **Build and deployment** &rarr; **Source**, select **Deploy from a branch**.
9. Under **Branch**, choose **`main`** and **`/ (root)`**, then click **Save**.
10. Wait 1–2 minutes and refresh the **Pages** settings page—your live website URL will appear at the top (e.g., `https://princeagnihotri99266-sketch.github.io/portfolio/`).

### Option B: Deploy via Git CLI

```bash
cd portfolio
git init
git add .
git commit -m "Deploy portfolio website"
git branch -M main
git remote add origin https://github.com/princeagnihotri99266-sketch/portfolio.git
git push -u origin main
```

Then enable **Pages** in **Repository Settings &rarr; Pages &rarr; Branch: `main` / `(root)`**.
