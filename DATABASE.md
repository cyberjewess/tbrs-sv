# Database Setup

This project now uses SQLite instead of static TypeScript files for data storage. The database is only accessible on the server side through API endpoints.

## Setup

1. **Install dependencies** (already done):

   ```bash
   npm install better-sqlite3
   npm install --save-dev @types/better-sqlite3 tsx
   ```

2. **Run migration** to populate the database with existing data:
   ```bash
   npm run migrate
   ```

## Database Structure

### Events Table

- `id` - Primary key
- `date` - Event date (ISO format)
- `title` - Event title
- `description` - Optional event description
- `isHeadline` - Boolean flag for headline events
- `isMystical` - Boolean flag for mystical events
- `externalLink` - Optional external URL
- `hideDate` - Boolean flag to hide date display
- `created_at` - Timestamp when record was created
- `updated_at` - Timestamp when record was last updated

### Songs Table

- `id` - Primary key
- `title` - Song title
- `artist` - Optional artist name
- `category` - Song category (kabbalat-shabbat, other-shabbat, nigunim, yiddish, other)
- `externalLink` - External URL (YouTube, PDF, etc.)
- `created_at` - Timestamp when record was created
- `updated_at` - Timestamp when record was last updated

## Usage

### Adding Events

- Use the form at `/events` to add new events
- Events are automatically saved to the database

### Managing Events

- Visit `/admin` to view all events and delete them if needed
- The admin interface is only visible when `developerMode` is true in the layout

### Database Location

- Database file: `tbrs.db` (in project root)
- Automatically created on first run
- Added to `.gitignore` to avoid committing data

## Architecture

The application uses a client-server architecture:

- **Server Side**: Database operations using `better-sqlite3` in API endpoints
- **Client Side**: HTTP requests to API endpoints using fetch API
- **API Endpoints**: `/api/events` and `/api/songs` for all database operations

## API Endpoints

### Events (`/api/events`)

- `GET /api/events` - Get all events
- `GET /api/events?upcoming=true` - Get upcoming events
- `POST /api/events` - Add a new event
- `PUT /api/events?id={id}` - Update an existing event
- `DELETE /api/events?id={id}` - Delete an event

### Songs (`/api/songs`)

- `GET /api/songs` - Get all songs
- `GET /api/songs?category={category}` - Get songs by category
- `POST /api/songs` - Add a new song
- `PUT /api/songs?id={id}` - Update an existing song
- `DELETE /api/songs?id={id}` - Delete a song

## Client-Side Functions

### Events (`src/lib/api/events.ts`)

- `getAllEvents()` - Get all events via API
- `getUpcomingEvents()` - Get upcoming events via API
- `addEvent(event)` - Add a new event via API
- `updateEvent(id, event)` - Update an existing event via API
- `deleteEvent(id)` - Delete an event via API

### Songs (`src/lib/api/songs.ts`)

- `getAllSongs()` - Get all songs via API
- `getSongsByCategory(category)` - Get songs by category via API
- `addSong(song)` - Add a new song via API
- `updateSong(id, song)` - Update an existing song via API
- `deleteSong(id)` - Delete a song via API

## Migration

The migration script (`scripts/migrate-to-db.ts`) automatically:

1. Creates the database and tables
2. Populates them with data from the old static files
3. Maintains all existing data

## Benefits

- **Dynamic content**: Add/edit events without code changes
- **User contributions**: Community can add events through forms
- **Data persistence**: Proper storage and backup
- **Performance**: Indexed queries for fast data retrieval
- **Scalability**: Foundation for future features
