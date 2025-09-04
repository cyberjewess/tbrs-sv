import type { Song } from '../types';
import { getDatabase } from './connection';

export function getAllSongs(): Song[] {
	const db = getDatabase();
	const stmt = db.prepare('SELECT * FROM songs ORDER BY category, title');
	const rows = stmt.all() as any[];

	return rows.map((row) => ({
		title: row.title,
		artist: row.artist,
		category: row.category as Song['category'],
		externalLink: row.externalLink
	}));
}

export function getSongsByCategory(category: Song['category']): Song[] {
	const db = getDatabase();
	const stmt = db.prepare('SELECT * FROM songs WHERE category = ? ORDER BY title');
	const rows = stmt.all(category) as any[];

	return rows.map((row) => ({
		title: row.title,
		artist: row.artist,
		category: row.category as Song['category'],
		externalLink: row.externalLink
	}));
}

export function addSong(song: Omit<Song, 'id'>): void {
	const db = getDatabase();
	const stmt = db.prepare(`
        INSERT INTO songs (title, artist, category, externalLink)
        VALUES (?, ?, ?, ?)
    `);

	stmt.run(song.title, song.artist || null, song.category, song.externalLink);
}

export function updateSong(id: number, song: Partial<Song>): void {
	const db = getDatabase();
	const stmt = db.prepare(`
        UPDATE songs 
        SET title = ?, artist = ?, category = ?, externalLink = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
    `);

	stmt.run(song.title, song.artist || null, song.category, song.externalLink, id);
}

export function deleteSong(id: number): void {
	const db = getDatabase();
	const stmt = db.prepare('DELETE FROM songs WHERE id = ?');
	stmt.run(id);
}
