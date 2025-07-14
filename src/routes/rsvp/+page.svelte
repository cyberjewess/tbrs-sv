<script lang="ts">
	import { onMount } from 'svelte';

	const link = 'https://forms.gle/WLjQ3gB7wRzH48vg9';

	onMount(() => {
		setTimeout(() => {
			window.location.href = link;
		}, 500);
	});
</script>

<div class="redirect-page">
	<a class="redirect-link" target="_blank" href={link}>
		<h3>Click if not automatically redirected</h3>
		<h3>Shabbos RSVP August 15</h3>
	</a>
</div>
