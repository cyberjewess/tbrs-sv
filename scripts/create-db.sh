#!/usr/bin/env bash
# init_db.sh — create SQLite schema for TBRS
# usage: ./init_db.sh [data/tbrs.db]

set -euo pipefail

DB="${1:-data/tbrs.db}"
mkdir -p "$(dirname "$DB")"

sqlite3 "$DB" <<'SQL'
PRAGMA journal_mode=WAL;
PRAGMA foreign_keys=ON;

-- EVENTS
CREATE TABLE IF NOT EXISTS events (
  id           INTEGER PRIMARY KEY,
  date         TEXT NOT NULL,             -- ISO date string (e.g., 2025-09-24 or 2025-09-24T18:00:00Z)
  title        TEXT NOT NULL,
  description  TEXT,                       -- optional
  isHeadline   INTEGER NOT NULL DEFAULT 0 CHECK (isHeadline IN (0,1)),
  isMystical   INTEGER NOT NULL DEFAULT 0 CHECK (isMystical IN (0,1)),
  externalLink TEXT,                       -- optional URL
  hideDate     INTEGER NOT NULL DEFAULT 0 CHECK (hideDate IN (0,1)),
  created_at   TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  updated_at   TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP)
);

-- Update updated_at automatically on row changes
CREATE TRIGGER IF NOT EXISTS trg_events_updated_at
AFTER UPDATE ON events
FOR EACH ROW
BEGIN
  UPDATE events SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;

-- Useful indexes
CREATE INDEX IF NOT EXISTS idx_events_date ON events(date);
CREATE INDEX IF NOT EXISTS idx_events_headline ON events(isHeadline);
CREATE INDEX IF NOT EXISTS idx_events_mystical ON events(isMystical);

-- SONGS
CREATE TABLE IF NOT EXISTS songs (
  id           INTEGER PRIMARY KEY,
  title        TEXT NOT NULL,
  artist       TEXT, -- optional
  category     TEXT NOT NULL CHECK (category IN (
                    'kabbalat-shabbat','other-shabbat','nigunim','yiddish','other')),
  externalLink TEXT, -- optional URL (YouTube, PDF, etc.)
  created_at   TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP),
  updated_at   TEXT NOT NULL DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TRIGGER IF NOT EXISTS trg_songs_updated_at
AFTER UPDATE ON songs
FOR EACH ROW
BEGIN
  UPDATE songs SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;

-- Useful indexes
CREATE INDEX IF NOT EXISTS idx_songs_category ON songs(category);
CREATE INDEX IF NOT EXISTS idx_songs_title ON songs(title);

SQL

echo "Database initialized at: $DB"
