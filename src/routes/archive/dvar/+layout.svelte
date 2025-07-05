<script lang="ts">
	import { page } from '$app/stores';
	$: isIndex = $page.url.pathname === '/archive/dvar';
</script>

<div class="home">
	{#if !isIndex}
		<a class="archive-link" href="/archive/dvar/">Divrei Torah</a>
	{/if}
	<slot />
</div>
