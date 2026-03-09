import { test } from "node:test";
import { expect } from "expect";
import { details, fromEnglish } from "./book.ts";

test("tricky books", () => {
	expect(fromEnglish("1 Samuel")).toBe("1sa");
	expect(fromEnglish("Esther")).toBe("est");
	expect(fromEnglish("Song of Solomon")).toBe("sng");
	expect(fromEnglish("1 Corinthians")).toBe("1co");
	expect(fromEnglish("Corinthians")).toBe("1co");
	expect(fromEnglish("Collosions")).toBe("col");
});

test("maps back to self", () => {
	for (const p of Object.keys(details)) expect(fromEnglish(p)).toBe(p);
});

test("some long names", () => {
	expect(fromEnglish("first letter of paul to the corinthians")).toBe("1co");
	expect(fromEnglish("second letter of paul to the corinthians")).toBe("2co");
});
