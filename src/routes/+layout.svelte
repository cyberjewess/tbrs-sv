<script lang="ts">
	import '../app.css';

	let { children } = $props();

	const version = '0.4.4';
	console.log('Welcome to tbrs.nyc');
	console.log('v', version);

	// Toggle developer mode
	const developerMode = false;
</script>

<div class="navbar">
	<a href="/" class="button">Home</a>
	<a href="/democracy/" class="button">Democracy</a>
	<a href="/calendar/" class="button">Calendar</a>
	<a href="/nusach/" class="button">Nusach</a>
	<a href="/archive/" class="button">Archive</a>
	{#if developerMode}
		<a href="/events/" class="button">Events WIP</a>
		<a href="/admin/" class="button">Admin</a>
	{/if}
</div>

<main>
	<div class="content">
		{@render children()}
	</div>
	<p style="font-size: 10px;">{version}</p>
</main>
