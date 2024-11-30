import type React from "react";
import { EmailInput } from "./EmailInput/EmailInput.tsx";
import { emailValidationConfiguration } from "./EmailInput/email-validation-configuration.ts";
import { InputContainer } from "./InputContainer/InputContainer.tsx";
import { useValidationState } from "./InputContainer/useValidationState.ts";
import { PasswordInput } from "./PasswordInput/PasswordInput.tsx";
import { passwordValidationConfiguration } from "./PasswordInput/password-validation-configuration.ts";
import { SignUpButton } from "./SignUpButton/SignUpButton.tsx";

export interface SignUpFormProps {
	readonly className?: string;

	readonly initialEmailValue: string; // TODO: Handle initial value
	readonly onSignUp: (email: string, password: string) => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = () => {
	const [
		passwordState,
		onPasswordValueChanged,
		forcePasswordValidate,
		onPasswordFocused,
		onPasswordBlur,
	] = useValidationState(passwordValidationConfiguration);

	const [
		emailState,
		onEmailValueChanged,
		forceEmailValidate,
		onEmailFocused,
		onEmailBlur,
	] = useValidationState(emailValidationConfiguration);

	const onSignUpButtonClick = (): void => {
		forcePasswordValidate();
		forceEmailValidate();
	};

	return (
		<div>
			<h1>Sign Up</h1>
			<InputContainer validationState={emailState} disabled={false}>
				<EmailInput
					value={emailState.value}
					onChange={onEmailValueChanged}
					onFocus={onEmailFocused}
					onBlur={onEmailBlur}
				/>
			</InputContainer>
			<InputContainer validationState={passwordState} disabled={false}>
				<PasswordInput
					value={passwordState.value}
					onChange={onPasswordValueChanged}
					onFocus={onPasswordFocused}
					onBlur={onPasswordBlur}
				/>
			</InputContainer>
			<SignUpButton onClick={onSignUpButtonClick} />
		</div>
	);
};
