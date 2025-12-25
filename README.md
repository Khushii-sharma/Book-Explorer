# Book Explorer

A responsive, image-first Book Explorer web app powered by the Open Library API.
Explore thousands of books with infinite scrolling, and quick search filters.


The project is made using **Next.js (App Router)**, **Tailwind CSS**, and **Shadcn UI**, fetching data from the **Open Library public API**.


---

## How to Run the Project

### Step 1: Install dependencies
```bash
npm install
```

### Step 2: Start development server
```bash
npm run dev
```

The app will be available at:
`http://localhost:3000/library`

## Libraries Used:
- **Next.js (App Router)** - React framework for server-rendered apps
- **React** - for building UI components
- **Tailwind CSS** - utility-first styling framework
- **Shadcn/UI** - prebuilt React components (Card, Button, Badge, Input, Skeleton)
- **Lucide React** - modern icon library (Search, ArrowUp, X)
- **TanStack Query** - for data fetching and caching (infinite scroll)
- **Open Library API** - public book API (no API key required)


## How App Works:
- On initial load, the app fetches books using the default query “science”.
- Users can type in the search bar to look for books on any topic.
- Clicking on a subject chip automatically updates the search query.
- Books are displayed as cards showing:
    - Book cover
    - Title
    - Author(s)
    - First publish year
    - Subject tags
- If a book cover is unavailable, a 404-style placeholder is shown.
- After scrolling down, a Back to Top floating button appears for easy navigation.


## Improvements Planned:
- Dark/Light theme toggle (currently pending due to hydration issue)
- Virtualized grid for handling 1000+ items
- Client-side sorting (by year / relevance)


### Author:
Khushi | sharmakhushi1501@gmail.com
