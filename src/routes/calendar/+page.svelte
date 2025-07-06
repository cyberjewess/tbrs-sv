<script lang="ts">
	import type { Event } from '$lib/types';
	import { events } from '$lib/data/events';
	import EventList from '$lib/EventList.svelte';

	// Helper to get today's date at midnight
	function todayISO(): string {
		const now = new Date();
		now.setHours(0, 0, 0, 0);
		return now.toISOString().slice(0, 10);
	}

	const today = todayISO();

	const upcomingEvents = events
		.filter((e) => e.date >= today)
		.sort((a, b) => b.date.localeCompare(a.date));
	const pastEvents = events
		.filter((e) => e.date < today)
		.sort((a, b) => b.date.localeCompare(a.date));
</script>

<h1>Upcoming</h1>
<div class="calendar-card">
	<EventList events={upcomingEvents} />
</div>

<h1>Past</h1>
<div class="calendar-card">
	<EventList events={pastEvents} />
</div>
