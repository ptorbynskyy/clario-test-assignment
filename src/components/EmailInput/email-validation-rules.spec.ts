import { describe, expect, it } from "vitest";
import { emailHasValidFormat } from "./email-validation-rules.ts";

describe("EmailInput", () => {
	it.each([
		// Positive test cases
		["test@test.com", true],
		["user@example.com", true],
		["user.name+alias@example.co.uk", true],
		["user_name@example.org", true],
		["user-name@example.com", true],
		["user123@example.io", true],
		["user@subdomain.example.com", true],
		["firstname.lastname@example.com", true],
		["email@123.123.123.123", true],
		["1234567890@example.com", true],
		["email@domain-one.com", true],
		["_______@example.com", true],

		// Negative test cases
		["plainaddress", false],
		["@missingusername.com", false],
		["user@.com", false],
		["user@com", false],
		["user@domain..com", false],
		["user@domain.com.", false],
		["user@domain-.com", false],
		["user@-domain.com", false],
		["user@domain_com", false],
		["user@domain..com", false],
		["user@.domain.com", false],
		["user@domain,com", false],
	])('Should validate email: "%s" -> %s', (value, result) => {
		expect(emailHasValidFormat(value)).toBe(result);
	});
});
