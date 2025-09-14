<script lang="ts">
	import { onMount } from 'svelte';

	const link =
		'https://docs.google.com/spreadsheets/d/1Mx9EsLQdcULbUlTNp_NGBMHnYuM1Pze5-NqnhViULZM/edit?usp=sharing';

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
		<h3>Rosh Hashana Potluck Spreadsheet September 23</h3>
	</a>
</div>
