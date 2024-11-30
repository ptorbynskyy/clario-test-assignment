import "./App.css";
import { SignUpForm } from "./components/SignUpForm.tsx";

function App() {
	// TODO: Handle SignUp
	return (
		<>
			<SignUpForm initialEmailValue={""} onSignUp={() => {}} />
		</>
	);
}

export default App;
