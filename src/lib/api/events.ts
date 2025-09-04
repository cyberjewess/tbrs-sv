import type { Event } from '../types';

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

export async function getAllEvents(): Promise<Event[]> {
	const response = await fetch('/api/events');
	if (!response.ok) {
		throw new Error('Failed to fetch events');
	}
	return response.json();
}

export async function getUpcomingEvents(): Promise<Event[]> {
	const response = await fetch('/api/events?upcoming=true');
	if (!response.ok) {
		throw new Error('Failed to fetch upcoming events');
	}
	return response.json();
}

export async function addEvent(event: Omit<Event, 'id'>): Promise<void> {
	const response = await fetch('/api/events', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(event)
	});

	if (!response.ok) {
		throw new Error('Failed to add event');
	}
}

export async function updateEvent(id: number, event: Partial<Event>): Promise<void> {
	const response = await fetch(`/api/events?id=${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(event)
	});

	if (!response.ok) {
		throw new Error('Failed to update event');
	}
}

export async function deleteEvent(id: number): Promise<void> {
	const response = await fetch(`/api/events?id=${id}`, {
		method: 'DELETE'
	});

	if (!response.ok) {
		throw new Error('Failed to delete event');
	}
}
