export type ValidationRule = {
	readonly message: string;
	readonly validate: (val: string) => boolean;
};

export type ValidationConfiguration = {
	readonly rules: readonly ValidationRule[];
	readonly laterValidation: boolean;
};

export type ValidationResult = {
	readonly rule: ValidationRule;
	readonly isValid: boolean;
};

export type ValidationResults = {
	items: readonly ValidationResult[];
};
