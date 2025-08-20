<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		// Redirect to the new potluck route after a short delay
		setTimeout(() => {
			window.location.href = '/potluck';
		}, 2000);
	});
</script>

<div class="redirect-page">
	<h1>Route Deprecated</h1>
	<h3>This route has been moved to <a href="/potluck">/potluck</a></h3>
	<p>Redirecting you there in a moment...</p>
	<p>If you're not redirected automatically, <a href="/potluck">click here</a>.</p>
</div>
