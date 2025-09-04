<script lang="ts">
	import { onMount } from 'svelte';

	const link =
		'https://docs.google.com/spreadsheets/d/1_PUO9lCUdxk2L6mG8cJ9VegkGY3eaAgwez3vy0KNX5E/edit?usp=sharing';

	onMount(() => {
		// Redirect to Google Spreadsheet after a short delay
		setTimeout(() => {
			window.location.href = link;
		}, 1000);
	});
</script>

<div class="redirect-page">
	<a
		class="redirect-link text-tbrs-white font-sans text-6xl no-underline"
		target="_blank"
		href={link}
	>
		<h3>Click if not automatically redirected</h3>
		<h3>Shabbos Potluck Spreadsheet September 12</h3>
	</a>
</div>
