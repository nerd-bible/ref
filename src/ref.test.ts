import { test } from "node:test";
import { expect } from "expect";
import { parseBcv } from "./ref.ts";

test("basic ref", () => {
	expect(parseBcv("1 corinthians")).toEqual({ book: "1co" });
	expect(parseBcv("1cor")).toEqual({ book: "1co" });
	expect(parseBcv("1cor2")).toEqual({ book: "1co", chapter: 2 });
	expect(parseBcv("1cor2:a")).toEqual({ book: "1co", chapter: 2 });
	expect(parseBcv("1cor2:3")).toEqual({
		book: "1co",
		chapter: 2,
		verse: 3,
	});
	expect(parseBcv("1cor2:3a")).toEqual({
		book: "1co",
		chapter: 2,
		verse: 3,
	});
	expect(parseBcv("1cor2:3#4")).toEqual({
		book: "1co",
		chapter: 2,
		verse: 3,
	});
});

test("weird delimiters", () => {
	expect(parseBcv("1cor2::::3")).toEqual({
		book: "1co",
		chapter: 2,
		verse: 3,
	});
	expect(parseBcv("1cor2v3")).toEqual({
		book: "1co",
		chapter: 2,
		verse: 3,
	});
	expect(parseBcv("1 cor 2 verse 3")).toEqual({
		book: "1co",
		chapter: 2,
		verse: 3,
	});
	expect(parseBcv("cor i 2.3")).toEqual({
		book: "1co",
		chapter: 2,
		verse: 3,
	});
});
