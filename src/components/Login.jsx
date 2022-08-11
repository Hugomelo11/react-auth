import { useState } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTaQA-0P1G8GtrXw5qXyz6b_Fq-lMEkpM",
  authDomain: "first-login-hs.firebaseapp.com",
  projectId: "first-login-hs",
  storageBucket: "first-login-hs.appspot.com",
  messagingSenderId: "392159710023",
  appId: "1:392159710023:web:c08e53496d1316b2589a62",
};

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async () => {
    // connect to firebase project
    const app = initializeApp(firebaseConfig);
    // connect to Auth
    const auth = getAuth(app);
    // send email and password to firebase auth
    const user = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((err) => alert(err.message));
    // if all ok..
    if (user) {
      console.log(user);
      setIsLoggedIn(true);
    }
    // if error

    // popup error
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="email">
        Email:
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
        />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
        />
      </label>
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
    </form>
  );
}

export default Login;
