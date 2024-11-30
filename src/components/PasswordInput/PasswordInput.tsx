import type React from "react";
import { useState } from "react";
import styles from "./PasswordInput.module.css";

export type PasswordInputProps = {
	readonly value: string;
	readonly onChange: (value: string) => void;
	readonly onFocus?: () => void;
	readonly onBlur?: () => void;
};

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};
	return (
		<div className={styles.passwordInput}>
			<input
				placeholder="Create your password"
				type={isPasswordVisible ? "text" : "password"}
				value={props.value}
				onChange={(e) => props.onChange(e.target.value)}
				onFocus={() => props?.onFocus?.()}
				onBlur={() => props?.onBlur?.()}
			/>
			<button onClick={togglePasswordVisibility} type={"button"}>
				{isPasswordVisible ? "Hide" : "Show"}
			</button>
		</div>
	);
};
