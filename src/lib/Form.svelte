<script lang="ts">
	import type { EventHandler } from 'svelte/elements';
	import { todayISO, addEvent } from '$lib/api/events';

	const extractFormData = (event: any) => {
		const data = new FormData(event.currentTarget);
		return Object.fromEntries(data.entries());
	};

	const onSubmit: EventHandler = (event) => {
		event.preventDefault();
		const formData = extractFormData(event);

		try {
			addEvent({
				date: formData.date as string,
				title: formData.title as string,
				isHeadline: false,
				isMystical: false,
				hideDate: false
			});
			alert('Event added successfully!');
			// Reset form
			(event.currentTarget as HTMLFormElement).reset();
		} catch (error) {
			console.error('Failed to add event:', error);
			alert('Failed to add event. Please try again.');
		}
	};

	let text = '...';
	const onClick = () => {
		text = '';
	};
</script>

<form onsubmit={onSubmit}>
	<input name="date" value={todayISO()} type="date" />
	<input name="title" value={text} onclick={onClick} type="text" />
	<button type="submit">Submit</button>
</form>
