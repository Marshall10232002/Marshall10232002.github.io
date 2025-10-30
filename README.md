Marshall’s Portfolio (GitHub Pages)

A clean, fast, single‑page portfolio showcasing projects, background, and contact info. Built with vanilla HTML/CSS/JS and deployed via GitHub Pages.

⸻

✨ Features
	•	Tab-style navigation (Projects / About / Contact) without page reloads
	•	Responsive grid for project cards (1‑column on mobile, 3‑column on desktop)
	•	Equal-height cards with images cropped via object-fit: cover
	•	Anchored CTA (“View Details”) pinned to the bottom of each card
	•	Lightweight (no frameworks) and easy to customize

⸻

🧱 Tech Stack
	•	HTML5 – markup and page structure (index.html)
	•	CSS3 – custom styling (style.css)
	•	JavaScript (ES6) – section switching and history handling (script.js)
	•	GitHub Pages – static hosting

⸻

📁 Repository Structure

Marshall10232002.github.io/
├── index.html          # Main single-page site
├── style.css           # Styles for layout, nav, cards, buttons
├── script.js           # Tab navigation, URL hash, history behavior
├── images/             # All images used by cards & profile
└── projects/           # Per‑project detail pages (e.g., Rocket.html)


⸻

🔎 How it Works
	•	Navigation:
	•	script.js registers click handlers for #projects, #about, #contact.
	•	It toggles the .active class on the matching .page-section.
	•	It updates the URL hash without scrolling, keeps history entries tidy, and disables the browser’s default anchor auto-scroll.
	•	Projects grid:
	•	Uses CSS Grid (.projects-grid) with 1 column on small screens and 3 on desktop.
	•	Cards are links (.card-link > .project-card) so the whole card is clickable.
	•	Card layout:
	•	Image has fixed aspect ratio + crop (aspect-ratio: 16/9; object-fit: cover;).
	•	.card-body is a flex column; the View Details button uses margin-top: auto so it sticks to the bottom regardless of text length.

⸻


▶️ Run Locally

You can open index.html directly in a browser, or serve it with a simple HTTP server for cleaner testing:

# Python 3
python -m http.server 8000
# then visit http://localhost:8000


⸻

➕ Add a New Project Card
	1.	Add assets to images/ (thumbnail, etc.).
	2.	Create a detail page in projects/ (copy an existing file like Rocket.html).
	3.	Add a card inside the #projects .projects-grid in index.html:

<a href="projects/your-project.html" class="card-link">
  <article class="project-card">
    <img src="images/your_image.jpg" alt="Your Project" />
    <div class="card-body">
      <h3>Your Project Title</h3>
      <p class="type">Category or Role</p>
      <p class="excerpt">One-sentence summary of what you built.</p>
      <div class="tag-row">
        <span class="tag">Tech 1</span><span class="tag">Tech 2</span>
      </div>
      <span class="btn">View Details</span>
    </div>
  </article>
</a>

Notes
	•	Keep titles concise.
	•	Use descriptive alt text on images for accessibility.
	•	If an image is missing, the card still reserves height so the grid stays aligned.

⸻

🎨 Customize
	•	Theme width: Controlled by the body { max-width: 1000px; } rule.
	•	Card image height: Controlled by .project-card img { height: 200px; }.
	•	Primary button style: .btn and .btn-outline in style.css.
	•	Nav active state: nav a:not(.brand).active.

⸻

♿ Accessibility & UX
	•	Clear focus states (inherits browser defaults) and large touch targets.
	•	Semantic HTML (<main>, <section>), descriptive alt attributes.
	•	Avoid empty links; the whole card uses a single <a> for clarity.

⸻

🚀 Deploy (GitHub Pages)
	1.	Push to the main (or master) branch of this repository named
Marshall10232002.github.io.
	2.	Pages auto‑builds and serves at https://Marshall10232002.github.io/.
	3.	If using a project subfolder repo name, enable Settings → Pages and select the branch + /root.

⸻

🧪 Known Nice-to-Haves (Backlog)
	•	Add per‑project pages for all cards
	•	Lazy‑load images for faster first paint
	•	SEO meta tags