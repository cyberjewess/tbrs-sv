import type { Event } from '../types';
import { getDatabase } from './connection';

type DbEventRow = {
	date: string;
	title: string;
	description?: string | null;
	isHeadline?: number | boolean | null;
	isMystical?: number | boolean | null;
	externalLink?: string | null;
	hideDate?: number | boolean | null;
};

export function todayISO(): string {
	const now = new Date();
	now.setHours(0, 0, 0, 0);
	return now.toISOString().slice(0, 10);
}

export function toDate(s?: string): string {
	if (s === undefined) {
		return 'TBA';
	}
	const [y, m, d] = s.split('-').map((a) => Number.parseInt(a));
	const r = new Date(y, m - 1, d);
	return (
		'on ' +
		r.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	);
}

export function getAllEvents(): Event[] {
	const db = getDatabase();
	const stmt = db.prepare('SELECT * FROM events ORDER BY date DESC');
	const rows = stmt.all() as DbEventRow[];

	return rows.map((row) => ({
		date: row.date,
		title: row.title,
		description: row.description ?? undefined,
		isHeadline: Boolean(row.isHeadline),
		isMystical: Boolean(row.isMystical),
		externalLink: row.externalLink ?? undefined,
		hideDate: Boolean(row.hideDate)
	}));
}

export function getUpcomingEvents(): Event[] {
	const today = todayISO();
	const db = getDatabase();
	const stmt = db.prepare('SELECT * FROM events WHERE date >= ? ORDER BY date ASC');
	const rows = stmt.all(today) as DbEventRow[];

	return rows.map((row) => ({
		date: row.date,
		title: row.title,
		description: row.description ?? undefined,
		isHeadline: Boolean(row.isHeadline),
		isMystical: Boolean(row.isMystical),
		externalLink: row.externalLink ?? undefined,
		hideDate: Boolean(row.hideDate)
	}));
}

export function addEvent(event: Omit<Event, 'id'>): void {
	const db = getDatabase();
	const stmt = db.prepare(`
        INSERT INTO events (date, title, description, isHeadline, isMystical, externalLink, hideDate)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

	stmt.run(
		event.date,
		event.title,
		event.description || null,
		event.isHeadline ? 1 : 0,
		event.isMystical ? 1 : 0,
		event.externalLink || null,
		event.hideDate ? 1 : 0
	);
}

export function updateEvent(id: number, event: Partial<Event>): void {
	const db = getDatabase();
	const stmt = db.prepare(`
        UPDATE events 
        SET date = ?, title = ?, description = ?, isHeadline = ?, isMystical = ?, externalLink = ?, hideDate = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
    `);

	stmt.run(
		event.date,
		event.title,
		event.description || null,
		event.isHeadline ? 1 : 0,
		event.isMystical ? 1 : 0,
		event.externalLink || null,
		event.hideDate ? 1 : 0,
		id
	);
}

export function deleteEvent(id: number): void {
	const db = getDatabase();
	const stmt = db.prepare('DELETE FROM events WHERE id = ?');
	stmt.run(id);
}
