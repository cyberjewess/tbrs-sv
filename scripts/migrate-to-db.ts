import { addEvent } from '../src/lib/db/events.js';
import { addSong } from '../src/lib/db/songs.js';
import { events } from '../src/lib/data/events.js';
import { songs } from '../src/lib/data/songs.js';
import { closeDatabase } from '../src/lib/db/connection.js';

console.log('Starting migration...');

try {
	// Migrate events
	console.log('Migrating events...');
	for (const event of events) {
		addEvent(event);
		console.log(`Added event: ${event.title}`);
	}

	// Migrate songs
	console.log('Migrating songs...');
	for (const song of songs) {
		addSong(song);
		console.log(`Added song: ${song.title}`);
	}

	console.log('Migration completed successfully!');
} catch (error) {
	console.error('Migration failed:', error);
} finally {
	closeDatabase();
}
