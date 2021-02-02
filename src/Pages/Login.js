import React, { useState } from "react";
import "../css/Login.css";
import Obj from "../Firebase-Files/Firebase";
const { db, auth } = Obj;

function Login() {
  //state
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [hasAccount, setHasAccount] = useState(true);

  //functions
  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        //adds a display name
        db.collection("users")
          .doc(user.user.uid)
          .set({
            username: username,
            uid: user.user.uid,
            data: [{ message: "hi" }],
            todos: [],
          });

        return user.user.updateProfile({
          displayName: username,
        });
      })
      .catch((err) => alert(err.message));
  };

  //sign in
  const handleSignin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message));
  };

  const handleForgotPassword = () => {
    const emailVerification = prompt("please enter in your email address");

    if (emailVerification !== "" || emailVerification !== null) {
      alert("sending a email request to " + emailVerification);
      auth.sendPasswordResetEmail(email).catch((err) => alert(err.message));
    }
  };

  return (
    <div className="login-main">
      <section className="login-section">
        <div className="buttonSection">
          {hasAccount ? (
            <>
              <div className="inputSection">
                <label>Email</label>
                <input
                  type="text"
                  required
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* sign in  */}
              <button onClick={handleSignin}>Sign in</button>
              <div className="pTags">
                <p>
                  Don't have an account? {""}
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign up!
                  </span>
                </p>

                <p>
                  Forgot Password?
                  <span onClick={handleForgotPassword}>Click here</span>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="inputSection">
                <label>Username</label>
                <input
                  type="text"
                  required
                  autoFocus
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label>Email</label>
                <input
                  type="text"
                  required
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* sign up */}
              <button onClick={handleSignup}>Sign up</button>

              <div className="pTags">
                <p>
                  Have an account?{" "}
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    Sign in
                  </span>
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Login;
