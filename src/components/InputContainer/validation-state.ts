import { absurd } from "../../common/absurd.ts";
import { type ValidationResults, isValid } from "../validation-rule-types.ts";

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

function calculateValidationItems(
	value: string,
	validationStateType: ValidationState["type"],
	validate: (val: string) => ValidationResults,
): ValidationItem[] {
	return validate(value).items.map((item) => ({
		message: item.rule.message,
		mode: item.isValid
			? "success"
			: validationStateType === "invalid"
				? "error"
				: "normal",
	}));
}

export const reduceValidationState =
	(validate: (val: string) => ValidationResults) =>
	(state: ValidationState, event: ValidationEvents): ValidationState => {
		switch (event.type) {
			case "changed":
				return {
					...state,
					type: "initial",
					validationItems: calculateValidationItems(
						event.value,
						"initial",
						validate,
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
						validate,
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
						validate,
					),
				};
			default:
				return absurd(event);
		}
	};
