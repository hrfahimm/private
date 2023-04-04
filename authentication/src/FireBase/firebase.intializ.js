import {initializeApp} from "firebase/app";
import firebaseConfig from "./firebase.confic";
const initializeAuthentication = () => {
	initializeApp(firebaseConfig);
};
export default initializeAuthentication;
