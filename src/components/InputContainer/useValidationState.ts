import { useReducer } from "react";
import type { ValidationConfiguration } from "../validation-rule-types.ts";
import {
	type ValidationState,
	getInitialState,
	reduceValidationState,
} from "./validation-state.ts";

export type ValidationStateHookResult = readonly [
	state: ValidationState,
	onValueChanged: (val: string) => void,
	onCTAClick: () => void,
	onFocused: () => void,
];

export const useValidationState = (
	configuration: ValidationConfiguration,
): ValidationStateHookResult => {
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

	return [state, onValueChanged, onCTAClick, onFocused] as const;
};
