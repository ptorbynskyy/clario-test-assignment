import type { ValidationConfiguration } from "../validation-rule-types.ts";
import { emailHasValidFormat } from "./email-validation-rules.ts";

export const emailValidationConfiguration: ValidationConfiguration = {
	rules: [
		{
			message: "Error",
			validate: emailHasValidFormat,
		},
	],
};
