import firebase from "firebase";
import React, { useContext } from "react";
import { userContext } from "../contexts/userContext";

const onSubmit = (db) => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      // ...
    })
    .catch(function (error) {
      console.log(error);
    });
};

function GoogleSign() {
  const [, , db] = useContext(userContext);

  return (
    <div>
      <button className="google-button" onClick={() => onSubmit(db)}>
        Sign In With Google
      </button>
    </div>
  );
}

export default GoogleSign;
