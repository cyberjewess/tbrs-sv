<script lang="ts">
	import type { Event } from '$lib/types';

	export let events: Event[];

	// Format date for display (e.g., "Fri 7/11/25")
	function formatDate(dateStr: string): string {
		const date = new Date(dateStr);
		const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		const dayName = days[date.getDay()];
		const month = date.getMonth() + 1;
		const day = date.getDate();
		const year = date.getFullYear().toString().slice(-2);

		return `${dayName} ${month}/${day}/${year}`;
	}
</script>

<ul>
	{#each events as event}
		<li>
			<div class="event-item">
				{#if !event.hideDate}
					<div class="event-date{event.isMystical ? ' mystical' : ''}">
						{formatDate(event.date)}
					</div>
				{/if}
				{#if event.externalLink}
					<div class="event-title{event.isMystical ? ' mystical' : ''}">
						<a target="_blank" href={event.externalLink}>{event.title}</a>
					</div>
				{:else if event.isShabbos}
					<div class="event-title{event.isMystical ? ' mystical' : ''}">
						<strong>{event.title}</strong>
					</div>
				{:else}
					<div class="event-title{event.isMystical ? ' mystical' : ''}">{event.title}</div>
				{/if}
			</div>
		</li>
	{/each}
</ul>
