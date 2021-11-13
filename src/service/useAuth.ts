import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithPopup,
  AuthProvider,
  User,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACSzTu1v-2jFGJe7OtoN_YAHH68RFrTSY",
  authDomain: "fast-tube-2253d.firebaseapp.com",
  projectId: "fast-tube-2253d",
  storageBucket: "fast-tube-2253d.appspot.com",
  messagingSenderId: "678856279485",
  appId: "1:678856279485:web:88f6dd429457d438b67ed4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

const socialMediaAuth = async (provider: AuthProvider): Promise<User> => {
  return signInWithPopup(auth, provider)
    .then((res) => {
      return res.user;
    })
    .catch((er) => er);
};

export {
  socialMediaAuth,
  auth,
  facebookProvider,
  githubProvider,
  googleProvider,
};
