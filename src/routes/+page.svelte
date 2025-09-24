<script lang="ts">
	import { getUpcomingEvents, toDate } from '$lib/api/events';
	import { onMount } from 'svelte';

	let upcomingEvents: Array<{ date: string; title: string; isHeadline?: boolean }> = [];
	let loading = true;

	console.log('ESTI 2');
	onMount(async () => {
		const startTime = Date.now();
		const minLoadingTime = 300; // Minimum 300ms loading time
		try {
			upcomingEvents = await getUpcomingEvents();
			upcomingEvents = upcomingEvents.sort((a, b) => b.date.localeCompare(a.date));
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
	let headlineEvent:
		| { date: string; title: string; description?: string; isHeadline?: boolean }
		| undefined;
	let otherEvent:
		| { date: string; title: string; description?: string; isHeadline?: boolean }
		| undefined;
	$: headlineEvent = upcomingEvents.filter((e) => e.isHeadline).pop();
	$: otherEvent = upcomingEvents.filter((e) => !e.isHeadline).pop();

	// Extract shabbos text because the isShabbos flag just makes it a top level event
	// It could be a Havdalah as on 8/30/25
	let headlineTitle: string;
	let headlineDescription: string;
	let headlineDate: string;
	$: headlineTitle = headlineEvent?.title ?? 'Error! Let Esti know';
	$: headlineDescription = headlineEvent?.description ?? 'Tell Esti to add an event description';
	$: headlineDate = toDate(headlineEvent?.date);

	let otherDate: string;
	$: otherDate = toDate(otherEvent?.date);
</script>

<div class="home">
	<h1>You are at the Bushwick Ridgewood Shul.</h1>

	<div class="upcoming">
		{#if loading}
			<h2>Loading...</h2>
		{:else}
			<h2>{headlineTitle} on {headlineDate}.</h2>
			<div class="event-links">
				<h3 class="event-link">
					<a target="_blank" href="https://tinyurl.com/azyk25"> Eilah Atah </a>
				</h3>
				<h3 class="event-link">
					<a target="_blank" href="/rsvp"> Sukkot Events 10/5-10/10 RSVP</a>
				</h3>
			</div>
			<h2>{headlineDescription}</h2>
			<div>
				{#if otherEvent}
					<h3 class="mystical">{otherEvent.title} {otherDate}</h3>
				{/if}
			</div>
		{/if}
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
