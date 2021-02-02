import React from "react";
import Navbar from "../components/Navbar";

import "../css/Account.css";

import Obj from "../Firebase-Files/Firebase";
const { auth } = Obj;

function Account() {
  const user = auth.currentUser;

  //functions
  const handleUsername = () => {
    const username = prompt("Please enter your new username");

    if (username === "" || username === null) {
      alert("sorry but we couldn't update your username");
    } else {
      user.updateProfile({
        displayName: username,
      });

      alert("your username has been updated");
    }
  };

  const handleEmail = () => {
    const email = prompt("please enter a new email");

    if (email === "" || email === null) {
      alert("We couldn't update your email sorry");
    } else {
      user
        .updateEmail(email)
        .then(() => {
          alert("Your email has been updated");
        })
        .catch((err) => alert(err.message));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="header">
        <h2>Your account</h2>
      </div>

      <div className="info-container">
        <div className="info">
          <div className="usernameChange">
            <label>Username: {user.displayName}</label>
            <button onClick={handleUsername}>Update username</button>
          </div>

          <div className="emailChange">
            <label>Email: {user.email}</label>
            <button onClick={handleEmail}>Update Email</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
