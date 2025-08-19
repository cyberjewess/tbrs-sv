<script lang="ts">
	import { events, toDate, todayISO } from '$lib/data/events';

	const today = todayISO();

	const upcomingEvents = events
		.filter((e) => e.date >= today)
		.sort((a, b) => b.date.localeCompare(a.date));
	const nextShabbos = upcomingEvents.filter((e) => e.isShabbos).pop();
	const nextEvent = upcomingEvents.filter((e) => !e.isShabbos).pop();

	// Extract shabbos text because the isShabbos flag just makes it a top level event
	// It could be a Havdalah as on 8/30/25
	const shabbosText = nextShabbos?.title ?? "Error! Let Esti know" 
	const shabbosDate = toDate(nextShabbos?.date);

	const eventDate = toDate(nextEvent?.date);
</script>

<div class="home">
	<h1>You are at the Bushwick Ridgewood Shul.</h1>

	<div class="upcoming">
		<h2>{shabbosText} on {shabbosDate}.</h2>
		<div class="event-links">
			<h3 class="event-link">
				<a target="_blank" href="/rsvp"> RSVP Form </a>
			</h3>
			<h3 class="event-link">
				<a target="_blank" href="/plan"> Potluck Spreadsheet </a>
			</h3>
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
