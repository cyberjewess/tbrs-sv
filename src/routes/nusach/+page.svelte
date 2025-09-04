<script lang="ts">
	import type { Song } from '$lib/types';
	import { getAllSongs } from '$lib/api/songs';
	import { onMount } from 'svelte';

	let songs: Song[] = [];
	let loading = true;

	onMount(async () => {
		const startTime = Date.now();
		const minLoadingTime = 300; // Minimum 300ms loading time
		try {
			songs = await getAllSongs();
		} catch (error) {
			console.error('Failed to load songs:', error);
		} finally {
			const elapsed = Date.now() - startTime;
			if (elapsed < minLoadingTime) {
				await new Promise((resolve) => setTimeout(resolve, minLoadingTime - elapsed));
			}
			loading = false;
		}
	});

	function getSongsByCategory(category: Song['category']): Song[] {
		return songs.filter((song) => song.category === category);
	}

	const categories = [
		{ key: 'kabbalat-shabbat', title: 'Kabbalat Shabbat' },
		{ key: 'other-shabbat', title: 'Other Shabbat' },
		{ key: 'nigunim', title: 'Nigunim' },
		{ key: 'yiddish', title: 'Yiddish' },
		{ key: 'other', title: 'Other' }
	] as const;
</script>

<div class="home">
	<h1>Nusach</h1>
	<p>Nusach is the songs we sing, the tunes and melodies of our community.</p>

	<h2>
		Contribute ~ <a target="_blank" href="https://forms.gle/vUDa6tcdjm4b3Gop6"
			>Share a song to add here!</a
		>
	</h2>

	{#if loading}
		<p>Loading songs...</p>
	{:else}
		{#each categories as category, idx (category.key + ':' + idx)}
			<h2>{category.title}</h2>
			<ul>
				{#each getSongsByCategory(category.key) as song (song.title + ':' + (song.artist ?? ''))}
					<li>
						<a target="_blank" href={song.externalLink}>
							{song.title}{song.artist ? ` - ${song.artist}` : ''}
						</a>
					</li>
				{/each}
			</ul>
		{/each}
	{/if}
</div>
