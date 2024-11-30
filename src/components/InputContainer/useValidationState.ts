import { useReducer } from "react";
import type { ValidationConfiguration } from "../validation-rule-types.ts";
import { getInitialState, reduceValidationState } from "./validation-state.ts";

export const useValidationState = (configuration: ValidationConfiguration) => {
	const [state, dispatch] = useReducer(
		reduceValidationState(configuration),
		getInitialState(configuration),
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
