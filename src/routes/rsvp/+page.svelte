<script>
	import { onMount } from 'svelte';

	onMount(() => {
		// Redirect to Google Forms after a short delay
		setTimeout(() => {
			window.location.href = 'https://forms.gle/78dyQi6JWapuc8f37';
		}, 1000);
	});
</script>

<div class="redirect-page">
	<a class="redirect-link" target="_blank" href="https://forms.gle/78dyQi6JWapuc8f37">
		<h3>Click if not automatically redirected</h3>
		<h3>Shabbos RSVP July 11</h3>
	</a>
</div>
