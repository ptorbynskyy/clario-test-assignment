import { absurd } from "../../common/absurd.ts";
import type {
	ValidationConfiguration,
	ValidationResults,
} from "../validation-rule-types.ts";

export type ValidationEvents =
	| {
			readonly type: "focused" | "blurred" | "CTAClicked";
	  }
	| {
			readonly type: "changed";
			readonly value: string;
	  };

export type ValidationItem = {
	readonly mode: "normal" | "error" | "success";
	readonly message: string;
};

export type ValidationState = {
	readonly type: "valid" | "invalid" | "initial";
	readonly validationItems: readonly ValidationItem[];
	readonly value: string;
	readonly focused: boolean;
};

export const getValidator =
	(configuration: ValidationConfiguration) =>
	(val: string): ValidationResults => {
		return {
			items: configuration.rules.map((rule) => ({
				rule,
				isValid: rule.validate(val),
			})),
		};
	};

const isValid = (results: ValidationResults): boolean => {
	return results.items.every((item) => item.isValid);
};

function calculateValidationItems(
	value: string,
	validationStateType: ValidationState["type"],
	configuration: ValidationConfiguration,
): ValidationItem[] {
	if (configuration.laterValidation && validationStateType === "initial") {
		return [];
	}

	const items = getValidator(configuration)(value).items.map(
		(item): ValidationItem => ({
			message: item.rule.message,
			mode: item.isValid
				? "success"
				: validationStateType === "invalid"
					? "error"
					: "normal",
		}),
	);

	const hasErrors = items.some((i) => i.mode === "error");

	if (!hasErrors && configuration.laterValidation) {
		return [];
	}

	return items;
}

export const getInitialState = (
	configuration: ValidationConfiguration,
): ValidationState => {
	return {
		type: "initial",
		validationItems: configuration.laterValidation
			? []
			: configuration.rules.map((i) => ({
					message: i.message,
					mode: "normal",
				})),
		value: "",
		focused: false,
	};
};

export const reduceValidationState =
	(configuration: ValidationConfiguration) =>
	(state: ValidationState, event: ValidationEvents): ValidationState => {
		const validate = getValidator(configuration);
		switch (event.type) {
			case "changed":
				return {
					...state,
					type: "initial",
					validationItems: calculateValidationItems(
						event.value,
						"initial",
						configuration,
					),
					value: event.value,
				};
			case "blurred": // TODO: May be don't need
				return { ...state, focused: false };
			case "CTAClicked": {
				const type = isValid(validate(state.value)) ? "valid" : "invalid";
				return {
					...state,
					type,
					validationItems: calculateValidationItems(
						state.value,
						type,
						configuration,
					),
				};
			}
			case "focused":
				return {
					...state,
					type: "initial",
					focused: true,
					validationItems: calculateValidationItems(
						state.value,
						"initial",
						configuration,
					),
				};
			default:
				return absurd(event);
		}
	};
