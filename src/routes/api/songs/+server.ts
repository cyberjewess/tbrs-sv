import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Song } from '$lib/types';
import { getAllSongs, getSongsByCategory, addSong, updateSong, deleteSong } from '$lib/db/songs';

export const GET: RequestHandler = async ({ url }) => {
	try {
		const category = url.searchParams.get('category');
		const songs = category ? getSongsByCategory(category as Song['category']) : getAllSongs();
		return json(songs);
	} catch (error) {
		console.error('Failed to fetch songs:', error);
		return json({ error: 'Failed to fetch songs' }, { status: 500 });
	}
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const song = await request.json();
		addSong(song);
		return json({ success: true });
	} catch (error) {
		console.error('Failed to add song:', error);
		return json({ error: 'Failed to add song' }, { status: 500 });
	}
};

export const PUT: RequestHandler = async ({ request, url }) => {
	try {
		const id = url.searchParams.get('id');
		if (!id) {
			return json({ error: 'Missing song ID' }, { status: 400 });
		}
		const song = await request.json();
		updateSong(parseInt(id), song);
		return json({ success: true });
	} catch (error) {
		console.error('Failed to update song:', error);
		return json({ error: 'Failed to update song' }, { status: 500 });
	}
};

export const DELETE: RequestHandler = async ({ url }) => {
	try {
		const id = url.searchParams.get('id');
		if (!id) {
			return json({ error: 'Missing song ID' }, { status: 400 });
		}
		deleteSong(parseInt(id));
		return json({ success: true });
	} catch (error) {
		console.error('Failed to delete song:', error);
		return json({ error: 'Failed to delete song' }, { status: 500 });
	}
};
