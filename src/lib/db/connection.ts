import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database will be stored in the data directory (mounted volume in Docker)
const dbPath = path.join(__dirname, '../../..', 'data', 'tbrs.db');

let db: Database.Database | null = null;

export function getDatabase(): Database.Database {
	if (!db) {
		db = new Database(dbPath);
		db.pragma('journal_mode = WAL'); // Better performance
		initializeTables(db);
	}
	return db;
}

export function closeDatabase(): void {
	if (db) {
		db.close();
		db = null;
	}
}

function initializeTables(db: Database.Database): void {
	// Events table
	db.exec(`
        CREATE TABLE IF NOT EXISTS events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT NOT NULL,
            title TEXT NOT NULL,
            description TEXT,
            isHeadline BOOLEAN DEFAULT 0,
            isMystical BOOLEAN DEFAULT 0,
            externalLink TEXT,
            hideDate BOOLEAN DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

	// Songs table
	db.exec(`
        CREATE TABLE IF NOT EXISTS songs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            artist TEXT,
            category TEXT NOT NULL CHECK (category IN ('kabbalat-shabbat', 'other-shabbat', 'nigunim', 'yiddish', 'other')),
            externalLink TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

	// Indexes for performance
	db.exec('CREATE INDEX IF NOT EXISTS idx_events_date ON events(date)');
	db.exec('CREATE INDEX IF NOT EXISTS idx_events_headline ON events(isHeadline)');
	db.exec('CREATE INDEX IF NOT EXISTS idx_songs_category ON songs(category)');
}
