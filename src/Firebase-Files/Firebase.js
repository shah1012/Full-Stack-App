import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClWdwTUgMzkjQdJiDYLnAD9o_djcox4dM",
  authDomain: "fir-login-v2-928ef.firebaseapp.com",
  projectId: "fir-login-v2-928ef",
  storageBucket: "fir-login-v2-928ef.appspot.com",
  messagingSenderId: "698274759372",
  appId: "1:698274759372:web:73264ac47eb8fb57d67869",
  measurementId: "G-JWXP9RVVV0",
};

const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

const Obj = {
  fire,
  db,
  auth,
};

export default Obj;
