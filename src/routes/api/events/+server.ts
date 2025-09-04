import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import {
	getAllEvents,
	getUpcomingEvents,
	addEvent,
	updateEvent,
	deleteEvent
} from '$lib/db/events';

export const GET: RequestHandler = async ({ url }) => {
	try {
		const upcoming = url.searchParams.get('upcoming') === 'true';
		const events = upcoming ? getUpcomingEvents() : getAllEvents();
		return json(events);
	} catch (error) {
		console.error('Failed to fetch events:', error);
		return json({ error: 'Failed to fetch events' }, { status: 500 });
	}
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const event = await request.json();
		addEvent(event);
		return json({ success: true });
	} catch (error) {
		console.error('Failed to add event:', error);
		return json({ error: 'Failed to add event' }, { status: 500 });
	}
};

export const PUT: RequestHandler = async ({ request, url }) => {
	try {
		const id = url.searchParams.get('id');
		if (!id) {
			return json({ error: 'Missing event ID' }, { status: 400 });
		}
		const event = await request.json();
		updateEvent(parseInt(id), event);
		return json({ success: true });
	} catch (error) {
		console.error('Failed to update event:', error);
		return json({ error: 'Failed to update event' }, { status: 500 });
	}
};

export const DELETE: RequestHandler = async ({ url }) => {
	try {
		const id = url.searchParams.get('id');
		if (!id) {
			return json({ error: 'Missing event ID' }, { status: 400 });
		}
		deleteEvent(parseInt(id));
		return json({ success: true });
	} catch (error) {
		console.error('Failed to delete event:', error);
		return json({ error: 'Failed to delete event' }, { status: 500 });
	}
};
