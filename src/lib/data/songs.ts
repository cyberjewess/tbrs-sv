import type { Song } from '../types';

export const songs: Song[] = [
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
