import "./App.css";
import { useState } from "react";
import { SignUpForm } from "./components/SignUpForm.tsx";

type SignUpUserData = {
	readonly email: string;
	readonly password: string;
};

function App() {
	const [signUpUserData, setSignUpUserData] = useState<
		SignUpUserData | undefined
	>(undefined);
	return (
		<>
			{signUpUserData === undefined && (
				<SignUpForm
					onSignUp={(email, password) => {
						setSignUpUserData({
							email,
							password,
						});
					}}
				/>
			)}
			{signUpUserData !== undefined && (
				<div className={"userDataContainer"}>
					<p>Sign up processing...</p>
					<p>Email: {signUpUserData.email}</p>
					<p>Password: {signUpUserData.password}</p>
				</div>
			)}
		</>
	);
}

export default App;
