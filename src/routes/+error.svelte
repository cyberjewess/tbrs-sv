<script lang="ts">
	import { page } from '$app/stores';

	// Get error details
	const { status, message } = $page.data;

	// Log error details for debugging
	console.log('Error page data:', { status, message });
	console.log('Page params:', $page.params);
	console.log('Page URL:', $page.url);

	// Handle development mode where status/message might be undefined
	const errorStatus = status || 404;
	const errorMessage = message || 'Page not found';
	const is404 = errorStatus === 404;

	// Get the pathname that caused the 404
	const pathname = $page.url.pathname.slice(1);
</script>

<div class="home">
	<h1 class="centered">Oy vey!</h1>

	{#if is404}
		<div class="centered">
			<div class="upcoming">
				<h2 class="centered">We don't have "{pathname}" here.</h2>
			</div>
		</div>
		<h4 class="centered">Let Esti know if it should be here!</h4>
	{:else}
		<div class="centered">
			<div class="upcoming">
				<h2 class="centered">Something went wrong</h2>
				<p class="centered">Error {errorStatus}: {errorMessage}</p>
			</div>
		</div>

		<h4 class="centered">If this keeps happening, let Esti know!</h4>
	{/if}
</div>
