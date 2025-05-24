# Unifize Assignment (React + Vite)
A small front-end project that recreates key pieces of Mercury bank’s web UI—sidebar navigation, top action bar, transaction table with grouped dates, filters, and avatars—using **React 18**, **Vite**, and **styled-components**.

---

## 🛠️ Tech Stack

* **Vite 5** — ultra-fast dev server & build
* **React 19** with functional components + hooks
* **styled-components 6** for scoped CSS and themeability
* **react-icons** (Hero Icons v2) for SVG glyphs
* **ESLint + Prettier** (optional, config provided)

---

## 💡 Technical Decisions

| Decision | Rationale |
|----------|-----------|
| **styled-components vs CSS Modules** | We needed run-time props (e.g. **`$isNewDate`**, **`$positive`**) to drive conditional styles like dynamic borders and colour themes. `styled-components` handles this cleanly with zero class-name juggling. |
| **Grid-based row borders** | Horizontal gaps were required between cells; a plain `border-bottom` would break at those gaps. Each row therefore renders a `::after` pseudo-element spanning `grid-column: 2 / -1`, producing a continuous line under columns 2–6 while leaving the date column clean. |
| **Vite public vs imported assets** | Icons used only once live in **`/public`** to avoid extra JavaScript. Re-used SVGs are imported so Vite can hash, tree-shake, or inline them. |
| **Transient props (`$prop` syntax)** | Boolean styling flags are prefixed with `$` to keep React from passing them to the DOM, eliminating “unknown prop” warnings. |


---

## ⚡ Getting Started

```bash
# 1. Clone
git clone https://github.com/anubhavRaj27/Unifize-assignment.git
cd Unifize-assignment

# 2. Install deps (Node ≥18)
npm install            # or pnpm install / yarn

# 3. Start dev server
npm run dev            # opens http://localhost:5173

# 4. Production build
npm run build          # outputs to dist/
npm run preview        # serve the build locally
