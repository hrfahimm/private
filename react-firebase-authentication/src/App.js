import {useState} from "react";
import "./App.css";
import initializeAuthentication from "./FireBase/FirebaseInit";
import {
	GoogleAuthProvider,
	signOut,
	getAuth,
	signInWithPopup,
	createUserWithEmailAndPassword,
} from "firebase/auth";

initializeAuthentication();

const GoogleProvider = new GoogleAuthProvider();

function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState({});

	const auth = getAuth();
	const handleGoogleSignIn = () => {
		signInWithPopup(auth, GoogleProvider).then((result) => {
			// const user = result.user;
			// console.log(user);
			const {displayName, email, photoURL} = result.user;
			const loggedInUser = {
				name: displayName,
				email: email,
				photo: photoURL,
			};
			setUser(loggedInUser);
		});
	};

	const handleRegistration = (e) => {
		console.log(email, password);
		createUserWithEmailAndPassword(auth, email, password).then((result) => {
			const user = result.user;
			console.log(user);
		});
		e.preventDefault();
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSingOut = () => {
		signOut(auth).then(() => {
			setUser({});
		});
	};
	return (
		<div className="m-5">
			<div>
				<form onSubmit={handleRegistration}>
					<h3 className="text-primary m-3">Please Registration</h3>
					<div className="row mb-3">
						<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
							Email
						</label>
						<div className="col-sm-10">
							<input
								onBlur={handleEmailChange}
								type="email"
								className="form-control"
								id="inputEmail3"
							/>
						</div>
					</div>
					<div className="row mb-3">
						<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
							Password
						</label>
						<div className="col-sm-10">
							<input
								onBlur={handlePasswordChange}
								type="password"
								className="form-control"
								id="inputPassword3"
							/>
						</div>
					</div>

					<div className="row mb-3">
						<div className="col-sm-10 offset-sm-2">
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									id="gridCheck1"
								/>
								<label className="form-check-label" htmlFor="gridCheck1">
									Example checkbox
								</label>
							</div>
						</div>
					</div>
					<button type="submit" className="btn btn-primary">
						Register
					</button>
				</form>
			</div>
			<div className="m-5">
				---------------------------------------------------------------------------------------------
			</div>
			<div>
				<div>
					{!user.name ? (
						<div>
							<button onClick={handleGoogleSignIn} className="btn">
								Google Sign In
							</button>
						</div>
					) : (
						<div>
							<button onClick={handleSingOut} className="btn">
								Sing Out
							</button>
						</div>
					)}
				</div>

				<br />
				<br />

				{user.name && (
					<div style={{border: "1px solid black", borderRadius: "10px", margin: "10px"}}>
						<h2>Name: {user.name}</h2>
						<p>Email : {user.email}</p>
						<img src={user.photo} alt="" />
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
