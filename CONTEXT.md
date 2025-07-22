# Project Context: TBRS SvelteKit App

## Purpose & Audience

This is the digital home of the Bushwick Ridgewood Shul ([tbrs.nyc](https://www.tbrs.nyc)), an intergenerational, liberationist, anti-Zionist, anti-imperialist, anti-colonialist Jewish community. The site is a hub for event info, RSVPs, potluck planning, and community resources.

## Main Features

- **Dynamic Event List:** Upcoming and past events, including Shabbos, holidays, and community actions.
- **RSVP & Potluck:** Google Forms and Spreadsheets for event RSVPs and potluck coordination.
- **Nusach:** Community songbook with links to music and resources.
- **Democracy:** Community naming and voting features.
- **Archive:** Past events and resources.
- **Mobile-friendly:** Responsive design for all devices.

## Tech Stack

- **Framework:** SvelteKit (TypeScript)
- **Styling:** Custom CSS (see `src/app.css`)
- **Build Tool:** Vite
- **Containerization:** Docker, Docker Compose (optimized for Raspberry Pi)
- **Deployment:** Designed for self-hosting, with Cloudflare tunnel support

## Project Structure

- `src/routes/` — SvelteKit routes (pages)
  - `+layout.svelte` — Main layout, navbar, version, dev mode toggle
  - `+page.svelte` — Home page (community intro, upcoming events)
  - `archive/`, `calendar/`, `democracy/`, `nusach/`, `plan/`, `rsvp/`, `events/` — Feature pages
- `src/lib/` — Shared components and data
  - `data/events.ts` — Event data (future, past, mystical)
  - `data/songs.ts` — Songbook data
  - `types.ts` — Shared TypeScript types
  - `EventList.svelte`, `Form.svelte` — UI components
- `static/` — Static assets (icons, PDFs, manifest)
- `scripts/` — Utility scripts (version bump, dev mode toggle)
- `Dockerfile`, `docker-compose.yml` — Deployment config

## Coding & Design Conventions

- **Styling:** Custom CSS, bold color palette (inspired by Zohran for Mayor)
- **TypeScript:** Used throughout for type safety
- **Versioning:** Version is tracked in `src/routes/+layout.svelte` and bumped via `scripts/bump-version.sh`
- **Dev Mode:** Toggle with `scripts/toggle-dev.sh` (shows WIP features)
- **Forms:** Use Google Forms for user input (RSVP, song suggestions, etc.)
- **Data:** Events and songs are hardcoded in TypeScript files for now

## Gotchas & Special Notes

- **Deployment:** Optimized for Raspberry Pi, but can run anywhere Docker is available.
- **Cloudflare Tunnel:** Used for secure public access; requires a `TUNNEL_TOKEN` in `.env`.
- **Resource Limits:** Docker Compose sets conservative CPU/memory limits for Pi.
- **No backend database** (yet): All data is static or via Google Forms/Sheets.
- **Accessibility:** Not explicitly audited—consider improvements for a11y.
- **Colors:** Intentionally bold and high-contrast; see footnote on home page.

## Roadmap / Ongoing Work

- Dynamic event list (potentially with backend)
- RSVP backend (see `README.md`)
- Potluck dashboard
- User accounts/authentication (planned)
- More automation for event/song management

## Backend Migration Roadmap

The following tasks outline the migration from Google Forms/Sheets to a self-hosted backend:

1. **Design a backend data model** for events, RSVPs, and potluck contributions (replace Google Forms/Sheets).
2. **Implement an API** (REST or GraphQL) for event listing, RSVP submission, and potluck management.
3. **Create a database schema and set up persistence** (e.g., SQLite, Postgres, or another suitable DB).
4. **Update the SvelteKit frontend** to fetch events and submit RSVPs via the new backend API instead of Google Forms/Sheets.
5. **Add authentication and user management** for event submissions and RSVP tracking (optional, stretch goal).

## How to Contribute

- See `README.md` for dev setup.
- Use `npm run dev` to start locally.
- Use scripts in `scripts/` for versioning and dev toggles.
- PRs and issues welcome!
- **When you commit, run `make bump-patch` before pushing.** 