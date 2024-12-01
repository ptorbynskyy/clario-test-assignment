import cs from "classnames";
import type React from "react";
import { EmailInput } from "./EmailInput/EmailInput.tsx";
import { emailValidationConfiguration } from "./EmailInput/email-validation-configuration.ts";
import { InputContainer } from "./InputContainer/InputContainer.tsx";
import { useValidationState } from "./InputContainer/useValidationState.ts";
import { PasswordInput } from "./PasswordInput/PasswordInput.tsx";
import { passwordValidationConfiguration } from "./PasswordInput/password-validation-configuration.ts";
import { SignUpButton } from "./SignUpButton/SignUpButton.tsx";
import styles from "./SignupForm.module.css";

export interface SignUpFormProps {
	readonly className?: string;
	readonly onSignUp: (email: string, password: string) => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = (props) => {
	const [
		passwordState,
		onPasswordValueChanged,
		onPasswordCTAClicked,
		onPasswordFocused,
	] = useValidationState(passwordValidationConfiguration);

	const [emailState, onEmailValueChanged, onEmailCTAClicked, onEmailFocused] =
		useValidationState(emailValidationConfiguration);

	const onSignUpButtonClick = (): void => {
		onPasswordCTAClicked();
		onEmailCTAClicked();
		if (passwordState.valueIsValid && emailState.valueIsValid) {
			props.onSignUp(emailState.value, passwordState.value);
		}
	};

	return (
		<div className={cs(styles.container, props.className)}>
			<h1 className={styles.title}>Sign up</h1>
			<div className={styles.fields}>
				<InputContainer validationState={emailState}>
					<EmailInput
						value={emailState.value}
						onChange={onEmailValueChanged}
						onFocus={onEmailFocused}
					/>
				</InputContainer>
				<InputContainer validationState={passwordState}>
					<PasswordInput
						value={passwordState.value}
						onChange={onPasswordValueChanged}
						onFocus={onPasswordFocused}
					/>
				</InputContainer>
			</div>
			<SignUpButton
				onClick={onSignUpButtonClick}
				className={styles.signUpButton}
			/>
		</div>
	);
};
