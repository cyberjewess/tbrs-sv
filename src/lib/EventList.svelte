<script lang="ts">
	import type { Event } from '$lib/types';
	import { parse, format } from 'date-fns';

	export let events: Event[];

	// Format date for display (e.g., "Fri 7/11/25")
	function formatDate(dateStr: string): string {
		// Parse as local date (YYYY-MM-DD)
		const date = parse(dateStr, 'yyyy-MM-dd', new Date());
		return format(date, 'EEE M/d/yy'); // e.g., Sat 8/2/25
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
				<div class="event-title{event.isMystical ? ' mystical' : ''}">
					{#if event.externalLink}
						<a target="_blank" href={event.externalLink}>{event.title}</a>
					{:else if event.isShabbos}
						<strong>{event.title}</strong>
					{:else}
						{event.title}
					{/if}
				</div>
			</div>
		</li>
	{/each}
</ul>
