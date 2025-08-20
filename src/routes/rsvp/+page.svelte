<script lang="ts">
	import { onMount } from 'svelte';

	const link =
		'https://docs.google.com/spreadsheets/d/1vDMRb8MIKSB56HxzfjWuAV0IgZWBG_Sj3NiMc83qN6I/edit?usp=sharing';

	onMount(() => {
		setTimeout(() => {
			window.location.href = link;
		}, 500);
	});
</script>

<div class="redirect-page">
	<a class="redirect-link" target="_blank" href={link}>
		<h3>Click if not automatically redirected</h3>
		<h3>Havdalah RSVP August 30</h3>
	</a>
</div>
