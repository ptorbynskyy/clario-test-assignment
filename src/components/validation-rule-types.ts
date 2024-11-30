export type ValidationRule = {
	readonly message: string;
	readonly validate: (val: string) => boolean;
};

export type ValidationConfiguration = {
	readonly rules: readonly ValidationRule[];
};

export type ValidationResult = {
	readonly rule: ValidationRule;
	readonly isValid: boolean;
};

export type ValidationResults = {
	items: readonly ValidationResult[];
};

export const validate =
	(configuration: ValidationConfiguration) =>
	(val: string): ValidationResults => {
		return {
			items: configuration.rules.map((rule) => ({
				rule,
				isValid: rule.validate(val),
			})),
		};
	};

export const isValid = (results: ValidationResults): boolean => {
	return results.items.every((item) => item.isValid);
};
