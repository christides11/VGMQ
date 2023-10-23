import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {useState} from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  }

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  }

  const logOut = async () => {
    signOut(auth);
  }

  return (
    <div className="LoginPage">
      <p>Login</p>
      <button onClick={signInWithGoogle}>Sign In</button>
    </div>
  );
}

export default LoginPage;
