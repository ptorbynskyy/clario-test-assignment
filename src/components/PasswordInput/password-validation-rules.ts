const rgLengthMoreThan8NonSpaceLetters: RegExp = /^\S{8,64}$/;
export function has8CharactersWithoutSpaces(password: string): boolean {
	return rgLengthMoreThan8NonSpaceLetters.test(password);
}

const rgHasUppercaseAndLowercaseLetters = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
export function hasLowerAndUppercaseLetters(password: string): boolean {
	return rgHasUppercaseAndLowercaseLetters.test(password);
}

const rgHasDigit = /^(?=.*\d).+/;
export function hasDigit(password: string): boolean {
	return rgHasDigit.test(password);
}
