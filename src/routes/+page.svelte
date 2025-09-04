<script lang="ts">
	import { getUpcomingEvents, toDate, todayISO } from '$lib/api/events';
	import { onMount } from 'svelte';

	const today = todayISO();
	let upcomingEvents: any[] = [];
	let loading = true;

	onMount(async () => {
		try {
			upcomingEvents = await getUpcomingEvents();
			upcomingEvents = upcomingEvents.sort((a, b) => b.date.localeCompare(a.date));
		} catch (error) {
			console.error('Failed to load events:', error);
		} finally {
			loading = false;
		}
	});
	const headlineEvent = upcomingEvents.filter((e) => e.isHeadline).pop();
	const otherEvent = upcomingEvents.filter((e) => !e.isHeadline).pop();

	// Extract shabbos text because the isShabbos flag just makes it a top level event
	// It could be a Havdalah as on 8/30/25
	const headlineText = headlineEvent?.title ?? 'Error! Let Esti know';
	const headlineDate = toDate(headlineEvent?.date);

	const otherDate = toDate(otherEvent?.date);
</script>

<div class="home">
	<h1>You are at the Bushwick Ridgewood Shul.</h1>

	<div class="upcoming">
		<h2>{headlineText} on {headlineDate}.</h2>
		<div class="event-links">
			<h3 class="event-link">
				<a target="_blank" href="/rsvp"> RSVP Form </a>
			</h3>
			<h3 class="event-link">
				<a target="_blank" href="/potluck"> Potluck Spreadsheet </a>
			</h3>
		</div>
		<h2>Eating, learning, and singing beginning at 6:30pm. Shabbat ends at 8:13pm.</h2>
		<div>
			{#if otherEvent}
				<h3 class="mystical">{otherEvent.title} {otherDate}</h3>
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
