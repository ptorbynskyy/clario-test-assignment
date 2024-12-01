import type { ValidationConfiguration } from "../validation-rule-types.ts";
import { emailHasValidFormat } from "./email-validation-rules.ts";

export const emailValidationConfiguration: ValidationConfiguration = {
	laterValidation: true,
	rules: [
		{
			message: "Invalid email",
			validate: emailHasValidFormat,
		},
	],
};
