<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="navbar">
	<a href="/" class="button">Home</a>
	<a href="/archive/" class="button">Archive</a>
	<a href="/calendar/" class="button">Calendar</a>
	<a href="/nusach/" class="button">Nusach</a>
</div>

<main>
	<div class="content">
		{@render children()}
	</div>
</main>
