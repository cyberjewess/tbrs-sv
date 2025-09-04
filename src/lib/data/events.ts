import type { Event } from '../types';

// Helper to get today's date at midnight
export function todayISO(): string {
	const now = new Date();
	now.setHours(0, 0, 0, 0);
	return now.toISOString().slice(0, 10);
}

export function toDate(s?: string): string {
	if (s === undefined) {
		return 'TBA';
	}
	const [y, m, d] = s.split('-').map((a) => Number.parseInt(a));
	const r = new Date(y, m - 1, d);
	return (
		'on ' +
		r.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	);
}

export const events: Event[] = [
	// Far future
	{ date: '9999-12-31', title: 'Moshiach arrives', isMystical: true, hideDate: true },
	{ date: '9999-12-30', title: '...', isMystical: true, hideDate: true },
	// Current events
	{ date: '2025-12-14', title: 'Erev Hanukkah' },
	{ date: '2025-10-14', title: 'Erev Simchat Torah' },
	{ date: '2025-10-13', title: 'Erev Shemini Atzeret' },
	{ date: '2025-10-10', title: 'Shabbos in the Sukkah @ Esti', isHeadline: true },
	{ date: '2025-10-06', title: 'Erev Sukkot' },
	{ date: '2025-10-05', title: 'Sukkah build', isHeadline: true },
	{ date: '2025-10-02', title: 'Yom Kippur services', isHeadline: true },
	{ date: '2025-10-01', title: 'Erev Yom Kippur' },
	{ date: '2025-09-28', title: 'Tashlich', isHeadline: true },
	{ date: '2025-09-23', title: 'Rosh Hashana feast @ Esti', isHeadline: true },
	{ date: '2025-09-22', title: 'Erev Rosh Hashana' },
	{ date: '2025-09-12', title: 'Shabbos @ Esti', isHeadline: true },
	{ date: '2025-08-30', title: 'Havdalah @ Irving Sq. Park', isHeadline: true },
	{ date: '2025-08-15', title: 'Shabbos @ Esti', isHeadline: true },
	{ date: '2025-08-09', title: "Tu B'Av" },
	{ date: '2025-08-02', title: "Erev Tisha B'Av" },
	{ date: '2025-07-11', title: 'Shabbos @ Esti', isHeadline: true },
	{ date: '2025-06-24', title: 'Election Day (update: Zohran won!)' },
	{ date: '2025-06-20', title: 'Shabbos @ Esti', isHeadline: true },
	{ date: '2025-06-14', title: 'Primary Early Voting begins' },
	{ date: '2025-06-01', title: 'Erev Shavuot' },
	{ date: '2025-05-18', title: 'TBRS for Zohran Canvassing' },
	{ date: '2025-05-16', title: 'Shabbos @ Esti', isHeadline: true },
	{ date: '2025-05-15', title: 'Lag BaOmer Jackson Heights (Contact: Sara F)' },
	{ date: '2025-04-18', title: 'Shabbos/Seder (!!) @ Esti', isHeadline: true },
	{ date: '2025-04-12', title: 'Pesach begins' },
	{ date: '2025-03-21', title: 'Shabbos @ Esti', isHeadline: true },
	{ date: '2025-03-15', title: 'Kemp Kinderland Purim carnival (Contact: Sandra)' },
	{
		date: '2025-03-13',
		title: 'Purim begins, JFREJ full megillah reading',
		externalLink:
			'https://www.jfrej.org/events/2025/01/jfrej-purim-project-%CC%B6e%CC%B6s%CC%B6t%CC%B6h%CC%B6e%CC%B6r%CC%B6-vashti'
	},
	{ date: '2025-02-21', title: 'Shabbos @ Esti', isHeadline: true },
	{ date: '2025-01-10', title: 'Shabbos @ Esti', isHeadline: true },
	// Ancient Past
	{ date: '0070-08-03', title: '...', isMystical: true, hideDate: true },
	{
		date: '0070-08-02',
		title: '9 Av 3830 ~ Destruction of the Second Temple',
		isMystical: true,
		hideDate: true,
		externalLink:
			'https://www.chabad.org/library/article_cdo/aid/2641925/jewish/Which-Year-Was-the-Second-Temple-Destroyed-69-CE-or-70-CE.htm'
	},
	{
		date: '0001-01-02',
		title: '9 Av 3338 ~ Destruction of the First Temple',
		isMystical: true,
		hideDate: true
	},
	{
		date: '0000-01-01',
		title: '1 Tishrei 1 ~ Creation of the Universe',
		isMystical: true,
		hideDate: true
	}
];
