# FLYY MEDIA Website

Starter website for FLYY MEDIA built with React + Vite. The site includes responsive sections for Home, Mission, Initiatives, What We Believe, Leadership, and Contact.

## Included brand assets
- `public/images/flyy-media-flat.png` — supplied flat logo
- `public/images/flyy-media-3d.png` — generated 3-D logo render

## Run locally (Windows / VS Code)
1. Install Node.js LTS if it is not already installed.
2. Extract this folder and open it in VS Code.
3. Open Terminal > New Terminal.
4. Run `npm install`
5. Run `npm run dev`
6. Open the local URL printed by Vite.

## Production build
Run `npm run build`. Vite writes the production website to `dist/`.

## Git / GitHub
```bash
git init
git add .
git commit -m "Initial FLYY MEDIA website"
```
Create an empty GitHub repository, then follow GitHub's instructions to add the remote and push.

## Cloudflare
This is a static Vite site. Build command: `npm run build`. Build output directory: `dist`. Import the GitHub repository into Cloudflare Pages, or use the current Cloudflare Workers static-assets deployment flow if that is your preferred setup. Add your domain after the first deployment and follow Cloudflare's DNS prompts.

## Before launch
- Replace placeholder images and copy as desired.
- Update the contact email and social URLs in `src/main.jsx`.
- The contact form currently validates in the browser and shows a demo success state; it does **not** send email yet. Connect FormSubmit, a serverless function, or another form service before launch.
- Confirm external image links and replace them with owned/licensed assets for production.
