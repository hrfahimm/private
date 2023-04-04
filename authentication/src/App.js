import {useState} from "react";
import "./App.css";
import initializeAuthentication from "./FireBase/firebase.intializ";
import {signInWithPopup, signOut, getAuth} from "firebase/auth";
import {GoogleAuthProvider, GithubAuthProvider, TwitterAuthProvider} from "firebase/auth";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

function App() {
	const [user, setUser] = useState({});
	const auth = getAuth();

	const handleGoogle = () => {
		signInWithPopup(auth, googleProvider).then((result) => {
			const {displayName, email, photoURL} = result.user;
			const loggedInUser = {
				name: displayName,
				email: email,
				photo: photoURL,
			};
			setUser(loggedInUser);
		});
	};
	const handleGithub = () => {
		signInWithPopup(auth, githubProvider).then((result) => {
			const {displayName, email, photoUrl} = result.user;
			const loggedInUser = {
				name: displayName,
				email: email,
				photo: photoUrl,
			};
			setUser(loggedInUser);
		});
	};
	const handleTwitter = () => {
		signInWithPopup(auth, twitterProvider).then((result) => {
			const {displayName, email, photoUrl} = result.user;
			const loggedInUser = {
				name: displayName,
				email: email,
				photo: photoUrl,
			};
			setUser(loggedInUser);
		});
	};

	const handleSingOut = () => {
		signOut(auth).then(() => {
			setUser({});
		});
	};
	return (
		<div className="App">
			{!user.name ? (
				<div>
					<button onClick={handleGoogle} className="btn">
						Google
					</button>
					<button onClick={handleGithub} className="btn">
						Github
					</button>
					<button onClick={handleTwitter} className="btn">
						Twitter
					</button>
				</div>
			) : (
				<div>
					<button onClick={handleSingOut} className="btno">
						Sing Out
					</button>
				</div>
			)}
			<br />
			<br />
			<br />
			{user.name && (
				<div>
					<h2>Name: {user.name}</h2>
					<p>Email : {user.email}</p>
					<img src={user.photo} alt="" />
				</div>
			)}
		</div>
	);
}

export default App;
