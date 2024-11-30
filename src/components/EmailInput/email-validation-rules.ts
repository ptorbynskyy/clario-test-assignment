const emailValidationPattern =
	// eslint-disable-next-line no-useless-escape
	/^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/;

export function emailHasValidFormat(email: string): boolean {
	return emailValidationPattern.test(email);
}
