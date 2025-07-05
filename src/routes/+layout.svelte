<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="navbar">
	<button><a href="/">Home</a></button>
	<button><a href="/archive/">Archive</a></button>
	<button><a href="/calendar/">Calendar</a></button>
	<button><a href="/nusach/">Nusach</a></button>
</div>

<main>
	{@render children()}
</main>
