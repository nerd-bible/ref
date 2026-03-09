import * as Book from "./book.ts";

export type B = { book: Book.Id };
export type Bc = B & { chapter: number };
export type Bcv = Bc & { verse: number };
export type Cv = { chapter: number, verse: number };
// Parts are silly because parts usually aren't published.
// part?: "a" | "b" | "c" | ...;
// Words are silly for translations that get new versions... which should be
// all translations since language changes.
// word?: number;

const noCapture = (pattern: string) => pattern.replace(/\(/g, "(?:");

const book = `(${noCapture(Object.values(Book.regexes).map(r => r.source).join("|"))})`;
const chapter = `(\\d+)`;
const verse = `(\\d+)`;
export const patterns = { book, chapter, verse };

// TODO: chapter aware parsing (i.e. Romans 52 -> Romans 5:2)
const cDelim = "\\s*";
const vDelim = noCapture("\\s*((v(erse)?\\s*)|[:.]+)");
export const delimiters = { chapter: cDelim, verse: vDelim };

const bcv = new RegExp(
	`\\b${book}(?:${cDelim}${chapter}(?:${vDelim}${verse})?)?`,
	"i",
);
export function parseBcv(r: string): B | Bc | Bcv {
	const match = r.match(bcv);
	if (!match) throw Error(`Unparsable Bcv: ${r}`);

	const res: Partial<Bcv> = { book: Book.fromEnglish(match[1]) };
	if (match[2]) res.chapter = +match[2];
	if (match[3]) res.verse = +match[3];

	return res as Bcv;
}

const bcvStrict = new RegExp(
	`\\b${book}${cDelim}${chapter}${vDelim}${verse}`,
	"i",
);
export function parseBcvStrict(r: string): Bcv {
	const match = r.match(bcvStrict);
	if (!match) throw Error(`Unparsable strict Bcv: ${r}`);

	return {
		book: Book.fromEnglish(match[1]),
		chapter: +match[2],
		verse: +match[3],
	};
}

// TODO: type Range<T> = { from: T, to: T };
// 1cor 3:15-45
// 1cor 3:15a-45b
// 1cor3,9,12
// 1cor3:4,5,6
// 1cor3:4,5:5,6:1b
// 1cor 3-4
// 1cor3:4-9,12-15
// 1cor3:15#1-:14#5
// 1cor3-2cor4
