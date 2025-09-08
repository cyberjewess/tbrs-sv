<script lang="ts">
	import { onMount } from 'svelte';

	const link = 'https://forms.gle/ryVZGeuik6YW5Y2E6';

	onMount(() => {
		setTimeout(() => {
			window.location.href = link;
		}, 500);
	});
</script>

<div class="redirect-page">
	<a class="redirect-link" target="_blank" href={link}>
		<h3>Click if not automatically redirected</h3>
		<h3>Rosh Hashana RSVP September 23</h3>
	</a>
</div>
