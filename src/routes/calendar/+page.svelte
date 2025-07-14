<script lang="ts">
	import { events, todayISO } from '$lib/data/events';
	import EventList from '$lib/EventList.svelte';

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
