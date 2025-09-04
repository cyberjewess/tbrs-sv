<script lang="ts">
	import { getAllEvents, todayISO } from '$lib/api/events';
	import EventList from '$lib/EventList.svelte';
	import { onMount } from 'svelte';
	import type { Event } from '$lib/types';

	let events: Event[] = [];
	let loading = true;

	const today = todayISO();

	onMount(async () => {
		const startTime = Date.now();
		const minLoadingTime = 300; // Minimum 300ms loading time
		try {
			events = await getAllEvents();
		} catch (error) {
			console.error('Failed to load events:', error);
		} finally {
			const elapsed = Date.now() - startTime;
			if (elapsed < minLoadingTime) {
				await new Promise((resolve) => setTimeout(resolve, minLoadingTime - elapsed));
			}
			loading = false;
		}
	});

	let upcomingEvents: Event[] = [];
	let pastEvents: Event[] = [];

	$: upcomingEvents = events
		.filter((e) => e.date >= today)
		.sort((a, b) => b.date.localeCompare(a.date));
	$: pastEvents = events.filter((e) => e.date < today).sort((a, b) => b.date.localeCompare(a.date));
</script>

<h1>Upcoming</h1>
<div class="calendar-card">
	{#if loading}
		<p>Loading...</p>
	{:else}
		<EventList events={upcomingEvents} />
	{/if}
</div>

<h1>Past</h1>
<div class="calendar-card">
	{#if loading}
		<p>Loading...</p>
	{:else}
		<EventList events={pastEvents} />
	{/if}
</div>
