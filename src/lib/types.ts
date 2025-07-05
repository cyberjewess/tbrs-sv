// Common types for the TBRS application

export interface Event {
	date: string; // ISO 8601 date string for sorting/comparison
	title: string;
	description?: string;
	isShabbos?: boolean;
	isMystical?: boolean;
	externalLink?: string;
	hideDate?: boolean; // For events like Moshiach, temples, creation
}

export interface Song {
	title: string;
	artist?: string;
	category: 'kabbalat-shabbat' | 'other-shabbat' | 'nigunim' | 'yiddish' | 'other';
	externalLink: string;
}
