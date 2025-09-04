<script lang="ts">
	import { onMount } from 'svelte';
	import type { Event } from '$lib/types';
	import { getAllEvents, deleteEvent } from '$lib/api/events';

	let events: Event[] = [];
	let loading = true;

	onMount(async () => {
		try {
			events = await getAllEvents();
		} catch (error) {
			console.error('Failed to load events:', error);
		} finally {
			loading = false;
		}
	});

	async function handleDeleteEvent(id: number) {
		if (confirm('Are you sure you want to delete this event?')) {
			try {
				await deleteEvent(id);
				// Refresh the list
				events = await getAllEvents();
			} catch (error) {
				console.error('Failed to delete event:', error);
				alert('Failed to delete event');
			}
		}
	}
</script>

<div class="admin">
	<h1>Event Management</h1>

	<div class="actions">
		<a href="/events" class="btn">Add New Event</a>
	</div>

	{#if loading}
		<p>Loading events...</p>
	{:else if events.length === 0}
		<p>No events found.</p>
	{:else}
		<div class="events-list">
			{#each events as event, index}
				<div class="event-card">
					<div class="event-header">
						<h3>{event.title}</h3>
						<div class="event-meta">
							<span class="date">{event.date}</span>
							{#if event.isHeadline}
								<span class="badge headline">Headline</span>
							{/if}
							{#if event.isMystical}
								<span class="badge mystical">Mystical</span>
							{/if}
						</div>
					</div>
					{#if event.description}
						<p class="description">{event.description}</p>
					{/if}
					{#if event.externalLink}
						<a href={event.externalLink} target="_blank" class="external-link">External Link</a>
					{/if}
					<div class="event-actions">
						<button class="btn btn-danger" onclick={() => handleDeleteEvent(index)}>
							Delete
						</button>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.admin {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	.actions {
		margin-bottom: 2rem;
	}

	.btn {
		display: inline-block;
		padding: 0.5rem 1rem;
		background: #007bff;
		color: white;
		text-decoration: none;
		border-radius: 4px;
		border: none;
		cursor: pointer;
	}

	.btn-danger {
		background: #dc3545;
	}

	.events-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.event-card {
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 1rem;
		background: white;
	}

	.event-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 0.5rem;
	}

	.event-meta {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.date {
		font-size: 0.9rem;
		color: #666;
	}

	.badge {
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-size: 0.8rem;
		font-weight: bold;
	}

	.badge.headline {
		background: #28a745;
		color: white;
	}

	.badge.mystical {
		background: #6f42c1;
		color: white;
	}

	.description {
		margin: 0.5rem 0;
		color: #333;
	}

	.external-link {
		color: #007bff;
		text-decoration: none;
	}

	.external-link:hover {
		text-decoration: underline;
	}

	.event-actions {
		margin-top: 1rem;
		text-align: right;
	}
</style>
