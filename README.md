# Seyed Mesut Pourmohammadi Portfolio

A responsive, five-page engineering portfolio tailored to a construction professional with project management, site supervision, and quality-control experience. It uses plain HTML, CSS, and JavaScript, so there is no build step or package installation.

## Pages

- `index.html` — portfolio home
- `conatraction/index.html` — project management
- `mountaineering/index.html` — site supervision
- `rope-access/index.html` — quality control
- `contact/index.html` — contact and project inquiries

## Run

Open `index.html` in a browser. The page navigation, menu, responsive layouts, and page links work without a server. Photos are loaded from Unsplash and fonts from Google Fonts, so those visual assets require an internet connection.

## Publish with GitHub Pages

The `.github/workflows/pages.yml` workflow deploys the static website to GitHub Pages whenever changes are pushed to the `main` branch, or when the workflow is run manually. It publishes only the website HTML, CSS, and JavaScript files; the CV and other workspace files are excluded.

To publish the site:

1. Push this project to a GitHub repository on the `main` branch.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. Open the **Actions** tab and wait for **Deploy static website to GitHub Pages** to complete.
4. Visit the Pages URL shown in the workflow deployment.