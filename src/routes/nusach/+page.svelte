<script lang="ts">
	import type { Song } from '$lib/types';
	import { songs } from '$lib/data/songs';

	const categories = [
		{ key: 'kabbalat-shabbat', title: 'Kabbalat Shabbat' },
		{ key: 'other-shabbat', title: 'Other Shabbat' },
		{ key: 'nigunim', title: 'Nigunim' },
		{ key: 'yiddish', title: 'Yiddish' },
		{ key: 'other', title: 'Other' }
	] as const;

	function getSongsByCategory(category: Song['category']): Song[] {
		return songs.filter((song) => song.category === category);
	}
</script>

<div class="home">
	<h1>Nusach</h1>
	<p>Nusach is the songs we sing, the tunes and melodies of our community.</p>

	<h2>
		Contribute ~ <a target="_blank" href="https://forms.gle/vUDa6tcdjm4b3Gop6"
			>Share a song to add here!</a
		>
	</h2>

	{#each categories as category}
		<h2>{category.title}</h2>
		<ul>
			{#each getSongsByCategory(category.key) as song}
				<li>
					<a target="_blank" href={song.externalLink}>
						{song.title}{song.artist ? ` - ${song.artist}` : ''}
					</a>
				</li>
			{/each}
		</ul>
	{/each}
</div>
