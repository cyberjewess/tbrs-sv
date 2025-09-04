import type { Song } from '../types';

export async function getAllSongs(): Promise<Song[]> {
	const response = await fetch('/api/songs');
	if (!response.ok) {
		throw new Error('Failed to fetch songs');
	}
	return response.json();
}

export async function getSongsByCategory(category: Song['category']): Promise<Song[]> {
	const response = await fetch(`/api/songs?category=${category}`);
	if (!response.ok) {
		throw new Error('Failed to fetch songs by category');
	}
	return response.json();
}

export async function addSong(song: Omit<Song, 'id'>): Promise<void> {
	const response = await fetch('/api/songs', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(song)
	});

	if (!response.ok) {
		throw new Error('Failed to add song');
	}
}

export async function updateSong(id: number, song: Partial<Song>): Promise<void> {
	const response = await fetch(`/api/songs?id=${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(song)
	});

	if (!response.ok) {
		throw new Error('Failed to update song');
	}
}

export async function deleteSong(id: number): Promise<void> {
	const response = await fetch(`/api/songs?id=${id}`, {
		method: 'DELETE'
	});

	if (!response.ok) {
		throw new Error('Failed to delete song');
	}
}
