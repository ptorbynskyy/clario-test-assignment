import cs from "classnames";
import type React from "react";
import styles from "./SignUpButton.module.css";

export interface SignUpButtonProps {
	readonly className?: string;
	readonly onClick: () => void;
}

export const SignUpButton: React.FC<SignUpButtonProps> = (props) => {
	return (
		<button
			className={cs(styles.signUpButton, props.className)}
			type={"button"}
			onClick={() => props.onClick()}
		>
			Sign Up
		</button>
	);
};
