// TODO: add number of chapters for chapter-aware CV parsing
export type Detail = {
	/** Approximate date book author started writing book. */
	from?: string;
	/** Approximate date book author finished writing book. */
	to?: string;
};

/**
 * All supported books in popular canons.
 *
 * https://www.biblegateway.com/learn/bible-101/about-the-bible/when-was-the-bible-written/
 */
export const details = {
	gen: { from: "-1446", to: "-1406" } as Detail,
	exo: { from: "-1446", to: "-1406" } as Detail,
	lev: { from: "-1446", to: "-1406" } as Detail,
	num: { from: "-1446", to: "-1406" } as Detail,
	deu: { from: "-1446", to: "-1406" } as Detail,
	jos: { from: "-1400", to: "-1370" } as Detail,
	jdg: { from: "-1045", to: "-1000" } as Detail,
	rut: { from: "-1011", to: "-931" } as Detail,
	"1sa": { from: "-930", to: "-722" } as Detail,
	"2sa": { from: "-930", to: "-722" } as Detail,
	"1ki": { from: "-560", to: "-540" } as Detail,
	"2ki": { from: "-560", to: "-540" } as Detail,
	"1ch": { from: "-450", to: "-425" } as Detail,
	"2ch": { from: "-450", to: "-425" } as Detail,
	ezr: { from: "-440", to: "-430" } as Detail,
	neh: { from: "-430", to: "-400" } as Detail,
	est: { from: "-400" } as Detail,
	job: { from: "-1000", to: "-500" } as Detail,
	psa: { from: "-1400", to: "-500" } as Detail,
	pro: { from: "-950", to: "-700" } as Detail,
	ecc: { from: "-935" } as Detail,
	sng: { from: "-960", to: "-931" } as Detail,
	isa: { from: "-700", to: "-681" } as Detail,
	jer: { from: "-626", to: "-585" } as Detail,
	lam: { from: "-586" } as Detail,
	ezk: { from: "-593", to: "-571" } as Detail,
	dan: { from: "-530" } as Detail,
	hos: { from: "-750", to: "-715" } as Detail,
	jol: { from: "-500", to: "-450" } as Detail,
	amo: { from: "-760", to: "-750" } as Detail,
	oba: { from: "-580", to: "-560" } as Detail,
	jon: { from: "-790", to: "-760" } as Detail,
	mic: { from: "-735", to: "-700" } as Detail,
	nam: { from: "-663", to: "-612" } as Detail,
	hab: { from: "-612", to: "-589" } as Detail,
	zep: { from: "-640", to: "-609" } as Detail,
	hag: { from: "-520" } as Detail,
	zec: { from: "-520", to: "-480" } as Detail,
	mal: { from: "-440", to: "-430" } as Detail,
	mat: { from: "70" } as Detail,
	mrk: { from: "64", to: "70" } as Detail,
	luk: { from: "62", to: "90" } as Detail,
	jhn: { from: "90", to: "110" } as Detail,
	act: { from: "62", to: "90" } as Detail,
	rom: { from: "56", to: "57" } as Detail,
	"1co": { from: "53", to: "54" } as Detail,
	"2co": { from: "55", to: "56" } as Detail,
	gal: { from: "50", to: "56" } as Detail,
	eph: { from: "60", to: "62" } as Detail,
	php: { from: "54", to: "62" } as Detail,
	col: { from: "57", to: "62" } as Detail,
	"1th": { from: "50", to: "51" } as Detail,
	"2th": { from: "51", to: "52" } as Detail,
	"1ti": { from: "62", to: "64" } as Detail,
	"2ti": { from: "64", to: "67" } as Detail,
	tit: { from: "62", to: "64" } as Detail,
	phm: { from: "54", to: "62" } as Detail,
	heb: { from: "60", to: "95" } as Detail,
	jas: { from: "45", to: "62" } as Detail,
	"1pe": { from: "60", to: "65" } as Detail,
	"2pe": { from: "65", to: "68" } as Detail,
	"1jn": { from: "85", to: "100" } as Detail,
	"2jn": { from: "85", to: "100" } as Detail,
	"3jn": { from: "85", to: "100" } as Detail,
	jud: { from: "65", to: "80" } as Detail,
	rev: { from: "64", to: "65" } as Detail,
	// Disputed
	// tob: {} as Detail,
	// jdt: {} as Detail,
	// esg: {} as Detail,
	// wis: {} as Detail,
	// sir: {} as Detail,
	// bar: {} as Detail,
	// lje: {} as Detail,
	// s3y: {} as Detail,
	// sus: {} as Detail,
	// bel: {} as Detail,
	// "1ma": {} as Detail,
	// "2ma": {} as Detail,
	// "3ma": {} as Detail,
	// "4ma": {} as Detail,
	// "1es": {} as Detail,
	// "2es": {} as Detail,
	// man: {} as Detail,
	// ps2: {} as Detail,
	// oda: {} as Detail,
	// pss: {} as Detail,
	// eza: {} as Detail,
	// "5ez": {} as Detail,
	// "6ez": {} as Detail,
	// dag: {} as Detail,
	// ps3: {} as Detail,
	// "2ba": {} as Detail,
	// lba: {} as Detail,
	// jub: {} as Detail,
	// eno: {} as Detail,
	// "1mq": {} as Detail,
	// "2mq": {} as Detail,
	// "3mq": {} as Detail,
	// rep: {} as Detail,
	// "4ba": {} as Detail,
	// lao: {} as Detail,
} as const;

/**
 * [Lowercase Paratext ID](https://ubsicap.github.io/usfm/identification/books.html)
 */
export const ids = [
	"frt",
	"bak",
	"oth",
	"int",
	"cnc",
	"glo",
	"tdx",
	"ndx",
	...(Object.keys(details) as (keyof typeof details)[]),
] as const;
export type Id = (typeof ids)[number];

// TODO: Catch common spelling errors.
const paul = "letter\\s+(of|from)\\s+paul\\s+";
const paulTo = `${paul}to\\s+(the\\s+)?`;
const sam = "sa(muel)?";
const kin = "ki(ngs?)?";
const chr = "ch(ronicles?)?";
const jon = "j[oh]?n";
const cor = `(${paulTo})?cor(inthians?)?`;
const thes = `(${paulTo})?thes(salonians?)?`;
const tim = `(${paulTo})?tim(othy)?`;
const pet = "pe?te?r?";

const first = (book: string) => [
	`(1(st)?|first)\\s*(${book})`,
	`(${book})\\s+i`,
	`(${book})`,
];
const second = (book: string) => [
	`(2(nd)?|second)\\s*(${book})`,
	`(${book})\\s+ii`,
];
const third = (book: string) => [
	`(3(rd)?|third)\\s*(${book})`,
	`(${book})\\s+iii`,
];
const fourth = (book: string) => [
	`(4(th)?|fourth)\\s*(${book})`,
	`(${book})\\s+iv`,
];

export const patterns = {
	gen: "gen(esis)?",
	exo: "exo(dus)?",
	lev: "lev(iticus)?",
	num: "num(bers)?",
	deu: "deu(teronomy)?",
	jos: "jo?s(hua)?",
	jdg: "ju?dg(es)?",
	rut: "ru?t(h)?",
	"2sa": second(sam),
	"1sa": first(sam),
	"2ki": second(kin),
	"1ki": first(kin),
	"2ch": fourth(kin).concat(second(chr)),
	"1ch": third(kin).concat(first(chr)),
	ezr: "ezra?",
	neh: "neh(emiah)?",
	est: "est(her)?",
	job: "job",
	psa: "psa(lms?)?",
	pro: "pr(overbs?)?",
	ecc: ["ecc(lesiastes)?", "qoh(elet)?"],
	sng: ["song\\s+of\\s+(songs|solomon)", "canticle\\s+of\\s+canticles", "sng"],
	isa: "isa?i?ah?",
	jer: "jer(emiah)?",
	lam: "lam(entations?)?",
	ezk: "eze?k(iel)?",
	hos: "hos(ea)?",
	dan: "dan(iel)?",
	jol: "joe?l",
	amo: "amos?",
	oba: "oba(diah)?",
	jon: "jon(ah)?",
	mic: "mic(ah)?",
	nam: "na(hu)?m",
	hab: "hab(akkuk)?",
	zep: "zep(haniah)?",
	hag: "hag(gai)?",
	zec: "zec(hariah)?",
	mal: "mal(achi)?",
	// NT
	mat: "mat(thew)?",
	mrk: "ma?rk",
	luk: "luke?",
	"3jn": third(jon),
	"2jn": second(jon),
	"1jn": first(jon).slice(0, 2),
	jhn: jon,
	act: "acts?(\\s+of\\s+the\\s+apostles)?",
	rom: "rom(ans)?",
	"2co": second(cor).concat("2co"),
	"1co": first(cor).concat("1co"),
	gal: `(${paulTo})?gal(atians)?`,
	eph: `(${paulTo})?eph(esians)?`,
	php: ["philippians?", "php"],
	col: `(${paulTo})?col(ossians?)?`,
	"2th": second(thes).concat("2th"),
	"1th": first(thes).concat("1th"),
	"2ti": second(tim).concat("2ti"),
	"1ti": first(tim).concat("1ti"),
	tit: "tit(us)?",
	phm: "phl?m|philemon",
	heb: "heb(rews?)?",
	jas: "ja(me)?s",
	"2pe": second(pet).concat("2pe"),
	"1pe": first(pet).concat("1pe"),
	jud: "jude?",
	rev: "rev(elation)?",
} satisfies Partial<{ [book in Id]: string | string[] }>;

export const regexes = Object.entries(patterns).reduce(
	(acc, [book, pattern]) => {
		const arr = Array.isArray(pattern) ? pattern : [pattern];
		acc[book as Id] = new RegExp(arr.map((p) => `\\b${p}`).join("|"), "i");
		return acc;
	},
	{} as Partial<{ [book in Id]: RegExp }>,
);

export function fromEnglish(eng: string): Id {
	for (const k in regexes) if (eng.match(regexes[k as Id]!)) return k as Id;

	throw Error(`Invalid book ${eng}`);
}

/** If the book is considered written after 20 AD. */
export function isNewTestament(book: Id): boolean {
	switch (book) {
		case "mat":
		case "mrk":
		case "luk":
		case "act":
		case "rom":
		case "2co":
		case "1co":
		case "gal":
		case "eph":
		case "php":
		case "col":
		case "2th":
		case "1th":
		case "tit":
		case "2ti":
		case "1ti":
		case "phm":
		case "heb":
		case "jas":
		case "2pe":
		case "1pe":
		case "3jn":
		case "2jn":
		case "1jn":
		case "jhn":
		case "jud":
		case "rev":
			return true;
		default:
			return false;
	}
}
