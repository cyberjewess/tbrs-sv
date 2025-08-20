<script lang="ts">
	import { onMount } from 'svelte';

	const link =
		'https://docs.google.com/spreadsheets/d/1vDMRb8MIKSB56HxzfjWuAV0IgZWBG_Sj3NiMc83qN6I/edit?usp=sharing';

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
		<h3>Havdalah Potluck Spreadsheet August 30</h3>
	</a>
</div>
