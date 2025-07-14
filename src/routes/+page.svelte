<script lang="ts">
	import { events } from '$lib/data/events';

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
	const nextShabbos = upcomingEvents.filter((e) => e.isShabbos).pop();
	const nextEvent = upcomingEvents.filter((e) => !e.isShabbos).pop();
	const toDate = (s?: string) => {
		if (s) {
			return (
				'on ' +
				new Date(s ?? '').toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})
			);
		}
		return 'TBA';
	};
	const shabbosDate = toDate(nextShabbos?.date);
	const eventDate = toDate(nextEvent?.date);
</script>

<div class="home">
	<h1>You are at the Bushwick / Ridgewood Shul.</h1>

	<div class="upcoming">
		<h2>Shabbos @ Esti on {shabbosDate}.</h2>
		<div class="event-links">
			<!---
			<h3 class="event-link">
				<a target="_blank" href="/rsvp"> RSVP Form </a>
			</h3>
			<h3 class="event-link">
				<a target="_blank" href="/plan"> Potluck Spreadsheet </a>
			</h3>
			--->
		</div>
		<h2>Services 6:30pm. Potluck dinner 8:00pm.</h2>
		<div>
			{#if nextEvent}
				<h3 class="mystical">{nextEvent.title} {eventDate}</h3>
			{/if}
		</div>
	</div>

	<div class="principles">
		<p>An intergenerational Jewish community.</p>
		<p>We are Liberationist Diasporist Anarchist <strong>dreamers.</strong></p>
		<p>We are Anti-Zionist Anti-Implerialist Anti-Colonialist <strong>fighters.</strong></p>
		<p>We do monthly trad-egal style Shabbos services <strong>with a potluck dinner.</strong></p>
		<p>In order to rest, renew, and connect.</p>
	</div>

	<div class="footnote">
		Yes, these colors are lifted straight off of the Zohran for Mayor website.
	</div>
</div>
