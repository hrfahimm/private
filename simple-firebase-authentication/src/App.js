import {useState} from "react";
import "./App.css";
import initializeAuthentication from "./FireBase/firebase.initializa";

import {
	getAuth,
	signInWithPopup,
	signOut,
	GoogleAuthProvider,
	GithubAuthProvider,
} from "firebase/auth";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function App() {
	const [user, setUser] = useState({});
	const auth = getAuth();
	const handleGooglrSignIn = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const {displayName, email, photoURL} = result.user;
				const loggedInUser = {
					name: displayName,
					email: email,
					photo: photoURL,
				};
				setUser(loggedInUser);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
	const handleGithubSignIn = () => {
		signInWithPopup(auth, githubProvider)
			.then((result) => {
				// const user = result.user;
				// console.log(user);
				const {displayName, providerId, photoURL} = result.user;
				const loggedInUser = {
					name: displayName,
					provider: providerId,
					photo: photoURL,
				};
				setUser(loggedInUser);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
	const handleSignOut = () => {
		signOut(auth).then(() => {
			setUser({});
		});
	};

	return (
		<div className="App">
			{!user.name ? (
				<div>
					<button className="btn" onClick={handleGooglrSignIn}>
						Google Sign in
					</button>
					<button className="btn" onClick={handleGithubSignIn}>
						Github Sign In
					</button>
				</div>
			) : (
				<button className="btn2" onClick={handleSignOut}>
					Sign Out
				</button>
			)}

			<br />
			<br />
			{user.name && (
				<div>
					<h2>WellCome {user.name}</h2>
					<h3>Email: {user.email}</h3>

					<img src={user.photo} alt="" />
				</div>
			)}
		</div>
	);
}

export default App;
