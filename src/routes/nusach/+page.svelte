<script lang="ts">
	import type { Song } from '$lib/types';

	const songs: Song[] = [
		// Kabbalat Shabbat
		{
			title: 'Starter Pack Playlist',
			category: 'kabbalat-shabbat',
			externalLink:
				'https://youtube.com/playlist?list=PLRvPfQSPuBL9MnDQ23H1reE8LQfVS_BnS&si=bsZAz2S9AC18CL'
		},
		{
			title: "L'chu N'ran'na",
			artist: 'Joey Weisenberg',
			category: 'kabbalat-shabbat',
			externalLink: 'https://youtu.be/wHF-4ElIf_Q'
		},
		// Other Shabbat
		{
			title: 'Dror Yikra',
			artist: 'Joey Weisenberg',
			category: 'other-shabbat',
			externalLink:
				'https://www.youtube.com/watch?v=2yEgua8bgok&list=OLAK5uy_kaJSFWYhZ7MT-gQhgIOFI3srXzsbJg3nc&index=8'
		},
		// Nigunim
		{
			title: "Bina's Nigun",
			artist: 'Joey Weisenberg',
			category: 'nigunim',
			externalLink: 'https://youtu.be/DahnzUV1OUU?si=1Jx7jzamCf7fdB4f'
		},
		// Yiddish
		{
			title: 'Peysekh Lider',
			category: 'yiddish',
			externalLink:
				'https://defendinghistory.com/yiddish-passover-songs-versions-from-the-vilna-area?emci=38c7afbd-dd16-f011-8b3d-0022482a9fb7&emdi=56358e2b-ed16-f011-8b3d-0022482a9fb7&ceid=4563281'
		},
		// Other
		{
			title: 'Pesach Seder - Nirtzah',
			category: 'other',
			externalLink: './nirtzah.pdf'
		}
	];

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
