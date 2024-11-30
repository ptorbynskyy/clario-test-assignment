import cs from "classnames";
import type React from "react";
import styles from "./EmailInput.module.css";

export interface EmailInputProps {
	readonly className?: string;

	readonly value: string;
	readonly onChange: (value: string) => void;
	readonly onFocus?: () => void;
	readonly onBlur?: () => void;
}

export const EmailInput: React.FC<EmailInputProps> = (props) => {
	return (
		<input
			className={cs(styles.emailInput, props.className)}
			placeholder="Enter your email address"
			type={"email"}
			value={props.value}
			onChange={(e) => props.onChange(e.currentTarget.value)}
			onFocus={() => props?.onFocus?.()}
			onBlur={() => props?.onBlur?.()}
		/>
	);
};
