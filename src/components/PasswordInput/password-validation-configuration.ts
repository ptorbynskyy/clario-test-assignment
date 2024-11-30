import type { ValidationConfiguration } from "../validation-rule-types.ts";
import {
	has8CharactersWithoutSpaces,
	hasDigit,
	hasLowerAndUppercaseLetters,
} from "./password-validation-rules.ts";

export const passwordValidationConfiguration: ValidationConfiguration = {
	laterValidation: false,
	rules: [
		{
			message: "Has at least 8 characters (no spaces)",
			validate: (val: unknown): boolean =>
				has8CharactersWithoutSpaces(val as string),
		},
		{
			message: "Uppercase and lowercase letters",
			validate: hasLowerAndUppercaseLetters,
		},
		{
			message: "1 digit minimum",
			validate: hasDigit,
		},
	],
};
