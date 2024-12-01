import cs from "classnames";
import type React from "react";
import type { ReactNode } from "react";
import styles from "./InputContainer.module.css";
import type { ValidationState } from "./validation-state.ts";

export interface InputContainerProps {
	readonly className?: string;
	readonly validationState: ValidationState;
	readonly disabled: boolean;
	readonly children: ReactNode;
}

export const InputContainer: React.FC<InputContainerProps> = (props) => {
	return (
		<div className={styles.container}>
			<div
				className={cs(
					styles.validationContainer,
					props.validationState.type === "initial" && styles.normal,
					props.validationState.type === "invalid" && styles.error,
					props.validationState.type === "valid" && styles.success,
					props.className,
				)}
			>
				{props.children}
			</div>
			<div className={styles.rules}>
				{props.validationState.validationItems.map((item) => (
					<p
						key={item.message}
						className={cs(
							styles.rule,
							item.mode === "normal" && styles.normal,
							item.mode === "error" && styles.error,
							item.mode === "success" && styles.success,
						)}
					>
						{item.message}
					</p>
				))}
			</div>
		</div>
	);
};
