<script lang="ts">
	import type { EventHandler } from 'svelte/elements';
	import { todayISO } from '$lib/data/events';

	const extractFormData = (event) => {
		const data = new FormData(event.currentTarget);
		return Object.fromEntries(data.entries());
	};

	const onSubmit: EventHandler = (event) => {
		console.log(extractFormData(event));
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
