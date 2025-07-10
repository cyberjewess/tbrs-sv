<script lang="ts">
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
	const form = {
		link: 'https://forms.gle/78Dpnps5FQD985an7',
		display: 'Choose Our Name'
	};
</script>

<div class="vote-card">
	<ul>
		<li>
			<a href={form.link} class="button">
				<pre>{form.display}</pre>
			</a>
		</li>
	</ul>
</div>
