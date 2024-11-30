import { useReducer } from "react";
import {
	type ValidationConfiguration,
	validate,
} from "../validation-rule-types.ts";
import {
	type ValidationState,
	reduceValidationState,
} from "./validation-state.ts";

export const useValidationState = (configuration: ValidationConfiguration) => {
	const validateValue = validate(configuration);
	const initialState: ValidationState = {
		type: "initial",
		validationItems: configuration.rules.map((i) => ({
			message: i.message,
			mode: "normal",
		})),
		value: "",
		focused: false,
	};

	const [state, dispatch] = useReducer(
		reduceValidationState(validateValue),
		initialState,
	);

	const onValueChanged = (value: string): void => {
		dispatch({ type: "changed", value });
	};

	const onCTAClick = (): void => {
		dispatch({ type: "CTAClicked" });
	};

	const onFocused = (): void => {
		dispatch({ type: "focused" });
	};

	const onBlurred = (): void => {
		dispatch({ type: "blurred" });
	};

	return [state, onValueChanged, onCTAClick, onFocused, onBlurred] as const;
};
