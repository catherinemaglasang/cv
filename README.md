# Catherine Maglasang - Portfolio

Professional portfolio website built with [Astro](https://astro.build), showcasing my work as a Full-Stack Engineer.

## 📋 Prerequisites

Before you start, make sure you have these installed on your computer:

- **Node.js** (version 18 or higher)
  - Check if installed: `node --version`
  - Download from: https://nodejs.org/
- **npm** (comes with Node.js)
  - Check if installed: `npm --version`
- **Git** (for version control)
  - Check if installed: `git --version`

## 🚀 Getting Started

### 1. Clone the Repository

```bash
# If you haven't cloned yet
git clone https://github.com/catherinemaglasang/cv.git
cd cv

# Or if you're already in the directory
cd /Users/babita/Desktop/Workspace/catherinemaglasang.github.io
```

### 2. Install Dependencies

```bash
npm install
```

This will install Astro and all required packages (~329 packages). It might take a minute.

### 3. Start Development Server

```bash
npm run dev
```

This starts a local web server. You'll see output like:

```
┃ Local    http://localhost:4321/cv
```

**Open your browser** and go to: **http://localhost:4321/cv**

The page will automatically reload when you make changes to the code!

### 4. Stop the Server

Press **Ctrl + C** in the terminal to stop the server.

## 🧞 Available Commands

| Command | What It Does |
|---------|--------------|
| `npm install` | Install all dependencies (run this first!) |
| `npm run dev` | Start development server at http://localhost:4321/cv |
| `npm run build` | Build the site for production (creates `dist/` folder) |
| `npm run preview` | Preview the production build locally |

## 📁 Project Structure

```
cv/
├── src/                    # Your source code (edit these!)
│   ├── pages/              # Each file = a page on your site
│   │   └── index.astro     # Homepage → /cv/
│   ├── layouts/            # Page templates (reusable HTML structure)
│   │   └── BaseLayout.astro
│   ├── components/         # Reusable UI pieces
│   │   └── BackButton.astro
│   └── styles/             # CSS files
│       └── global.css
│
├── public/                 # Static files (copied as-is to output)
│   ├── catherine-photo.jpg
│   ├── cv.html            # Static HTML pages
│   ├── ebook.html
│   └── code-walkthrough.html
│
├── dist/                   # Built site (auto-generated, don't edit!)
├── node_modules/           # Dependencies (auto-generated, don't edit!)
│
├── package.json            # Project info & dependencies
├── astro.config.mjs        # Astro configuration
├── tsconfig.json           # TypeScript configuration
└── .gitignore             # Files to ignore in git
```

## ✏️ Making Changes

### Edit the Homepage

1. Open `src/pages/index.astro` in your code editor
2. Make your changes
3. Save the file
4. The browser will automatically reload!

### Edit Styles

1. Open `src/styles/global.css` or edit the `<style>` section in `.astro` files
2. Save
3. Changes appear instantly!

### Add a New Page

1. Create a new file in `src/pages/`, for example: `src/pages/about.astro`
2. This automatically creates a route: `http://localhost:4321/cv/about`

### Edit Components

1. Open `src/components/BackButton.astro`
2. Make changes
3. All pages using this component will update automatically!

## 🌐 Deploying to GitHub Pages

### Automatic Deployment (Recommended)

When you push to the `master` branch, GitHub Actions automatically builds and deploys your site.

**Just do:**
```bash
git add .
git commit -m "Your change description"
git push origin master
```

Wait 1-2 minutes, then your site will be live at:
**https://catherinemaglasang.github.io/cv/**

### Manual Deployment

If you prefer to build and push manually:

```bash
# Build the site
npm run build

# The built files are in dist/
# Push dist/ to GitHub (not recommended, use GitHub Actions instead)
```

## 🐛 Troubleshooting

### "command not found: npm"
- Node.js isn't installed. Download from https://nodejs.org/

### "Cannot find module"
- Run `npm install` to install dependencies

### Port 4321 already in use
- Another dev server is running
- Stop it with Ctrl+C or use: `npm run dev -- --port 3000`

### Changes not appearing
- Hard refresh the browser: **Ctrl+Shift+R** (Windows/Linux) or **Cmd+Shift+R** (Mac)
- Or clear browser cache

### Build errors
- Delete `node_modules/` and `dist/`
- Run `npm install` again
- Run `npm run build`

## 📚 Learning Astro

- **Astro Docs:** https://docs.astro.build/
- **Tutorial:** https://docs.astro.build/en/tutorial/0-introduction/
- **Astro Discord:** https://astro.build/chat

## 🛠️ Tech Stack

- **Framework:** Astro 4.15+
- **Language:** JavaScript/TypeScript
- **Styling:** Vanilla CSS (no frameworks)
- **Fonts:** Inter (Google Fonts)
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions

## 📝 Development Workflow

1. **Make changes** in `src/` folder
2. **Test locally** with `npm run dev`
3. **Commit changes** with git
4. **Push to GitHub** - site auto-deploys!

## 🔄 Converting Static HTML Pages to Astro

The CV, E-book, and Code Walkthrough pages are currently static HTML in `public/`. To convert them to Astro:

1. Create new `.astro` files in `src/pages/`
2. Move the HTML content
3. Extract CSS to `<style>` sections
4. Use layouts and components for reusable parts

(This can be done incrementally - the static HTML pages work fine for now!)

## ⚡ Performance Tips

- Astro automatically optimizes your site
- Images in `public/` are served as-is
- CSS is scoped to components (no conflicts!)
- Only JavaScript you explicitly add gets shipped to the browser

## 🤝 Contributing

This is a personal portfolio, but if you find bugs or have suggestions:
1. Open an issue on GitHub
2. Or email: cbmaglasang@gmail.com

---

**Built with ❤️ by Catherine Maglasang**

**Questions?** Email me at cbmaglasang@gmail.com
