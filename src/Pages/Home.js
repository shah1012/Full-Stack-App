import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import Obj from "../Firebase-Files/Firebase";

import "../css/Home.css";

import Navbar from "../components/Navbar";
const { auth, db } = Obj;

function Home() {
  //handleSignOut\
  const user = auth.currentUser;
  const [userData, setUserData] = useState();
  const [userPosts, setUserPosts] = useState([]);

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  //fetch data
  useEffect(() => {
    const fetchData = async () => {
      db.collection("users")
        .doc(user.uid)
        .onSnapshot((doc) => {
          if (doc.exists) {
            const data = doc.data();
            const post = data.data;

            setUserData(data);
            setUserPosts(post);
          }
        });
    };
    fetchData();
  }, []);

  //functions
  const handleAdd = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(user.uid)
      .update({
        data: [...userPosts, { title: title, message: message }],
      });

    setMessage("");
    setTitle("");
  };

  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="home-header">
          <h1>Home</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
