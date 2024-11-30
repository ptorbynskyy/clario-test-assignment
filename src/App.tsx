import "./App.css";
import { SignUpForm } from "./components/SignUpForm.tsx";

function App() {
	return (
		<>
			<SignUpForm
				initialEmailValue={""}
				initialPasswordValue={""}
				onSignUp={() => {}}
			/>
		</>
	);
}

export default App;
