<script>
	import { onMount } from 'svelte';

	onMount(() => {
		// Redirect to Google Spreadsheet after a short delay
		setTimeout(() => {
			window.location.href =
				'https://docs.google.com/spreadsheets/d/1PEzuOksZuw5YVHXDJf7OiwIw_MR50KEAxs-piA1-wvg/edit?usp=sharing';
		}, 1000);
	});
</script>

<div class="redirect-page">
	<a
		class="redirect-link text-tbrs-white font-sans text-6xl no-underline"
		target="_blank"
		href="https://docs.google.com/spreadsheets/d/1PEzuOksZuw5YVHXDJf7OiwIw_MR50KEAxs-piA1-wvg/edit?usp=sharing"
	>
		<h3>Click if not automatically redirected</h3>
		<h3>Shabbos Potluck Planning July 11</h3>
	</a>
</div>
