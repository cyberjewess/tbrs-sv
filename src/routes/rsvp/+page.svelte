<script lang="ts">
	import { onMount } from 'svelte';

	const link = 'https://forms.gle/vq1xM7gqN3Lf8jpp9';

	onMount(() => {
		setTimeout(() => {
			window.location.href = link;
		}, 500);
	});
</script>

<div class="redirect-page">
	<a class="redirect-link" target="_blank" href={link}>
		<h3>Click if not automatically redirected</h3>
		<h3>Sukkot Events RSVP 10/5-10/10</h3>
	</a>
</div>
