# Midhunghosh P A: Data Analytics Portfolio

Static site (HTML, CSS, vanilla JS). No build step.

## Run locally
Open `index.html` in a browser, or from this folder run `python3 -m http.server 8000` and visit http://localhost:8000.

## Fill in your details
Edit the `CONFIG` block at the top of `js/script.js`:
- `email` and `linkedin`: your real contact details.
- `resumeReady`: set to `true` after saving your resume as `assets/resume/Midhunghosh_PA_Resume.pdf`.

Search `index.html` and `js/script.js` for text in `[square brackets]` and replace it: job titles and dates for each employer, certificate links, dataset source for OTT, and your own lessons learned.

## Add project screenshots
Save images in `assets/projects/` (use `.webp` or compressed `.jpg`), then replace the `[Placeholder]` blocks in the `PROJECTS` object in `js/script.js` with `<img src="assets/projects/yourfile.webp" alt="Describe the chart" loading="lazy">`.

## Contact form
It validates input but sends nothing. To receive messages, connect a form service (for example Formspree or Web3Forms) by setting the form's `action` and submitting with `fetch`.

## Publish on GitHub Pages
1. Create a repository (for example `portfolio`) and upload the contents of this folder so `index.html` is at the root.
2. In the repo, go to Settings > Pages.
3. Under Source, choose "Deploy from a branch", select `main` and `/ (root)`, then Save.
4. Your site appears at `https://midhunghosh.github.io/portfolio/` after a minute or two.

## Content sources
Gig economy findings come from that repository's notebook and presentation. The OTT project lists only what the Power BI template contains; add your verified findings once you confirm them.
