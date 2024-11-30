import { describe, expect, it } from "vitest";
import {
	has8CharactersWithoutSpaces,
	hasDigit,
	hasLowerAndUppercaseLetters,
} from "./password-validation-rules.ts";

describe("PasswordInput", () => {
	it.each([
		["pass", false],
		["12345678", true],
		["pass word", false],
		["password", true],
		["longPassword", true],
		["long Password", false],
		["", false],
		["1", false],
		["a", false],
		["A", false],
		["aA1".repeat(30), false],
		["a".repeat(64), true],
		["a".repeat(65), false],
	])(
		'Length should be 8-64 characters and not contain spaces: "%s" -> %s',
		(value, result) => {
			expect(has8CharactersWithoutSpaces(value)).toBe(result);
		},
	);

	it.each([
		["pass", false],
		["12345678", false],
		["pass word", false],
		["1passW", true],
		["pass Word", true],
		["password", false],
		["longPassword", true],
		["", false],
		["1", false],
		["a", false],
		["A", false],
	])(
		'Password should have lower and upper case letters: "%s" -> %s',
		(value, result) => {
			expect(hasLowerAndUppercaseLetters(value)).toBe(result);
		},
	);

	it.each([
		["pass", false],
		["12345678", true],
		["pass word", false],
		["1passW", true],
		["pass Word", false],
		["password", false],
		["longPassword", false],
		["", false],
		["1", true],
		["a", false],
		["A", false],
	])('Password should have just one digit: "%s" -> %s', (value, result) => {
		expect(hasDigit(value)).toBe(result);
	});
});
