<script lang="ts">
	import '../app.css';

	let { children } = $props();

	const version = '1.0.25';
	console.log('Welcome to tbrs.nyc');
	console.log('v', version);
</script>

<div class="navbar">
	<a href="/" class="button">Home</a>
	<a href="/democracy/" class="button">Democracy</a>
	<a href="/calendar/" class="button">Calendar</a>
	<a href="/nusach/" class="button">Nusach</a>
	<a href="/archive/" class="button">Archive</a>
</div>

<main>
	<div class="content">
		{@render children()}
	</div>
</main>
