import React, { useEffect, useState } from "react";
import firebase from "firebase";
import Navbar from "../components/Navbar";
import "../css/Chat.css";
import Obj from "../Firebase-Files/Firebase";

import Post from "../components/Post";

const { auth, db } = Obj;

function Chat() {
  //Variables
  const user = auth.currentUser;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  //useEffect
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  //functions
  const handleAdd = (e) => {
    e.preventDefault();
    if (message !== "") {
      db.collection("messages").add({
        name: user.displayName,
        message: message,
        email: user.email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setMessage("");
    }
  };

  return (
    <div className="chat">
      <Navbar />
      <div className="header">
        <h1>Chat</h1>
      </div>

      <div className="messages">
        {messages.map((msg, index) => (
          <Post
            message={msg.message}
            timestamp={msg.timestamp}
            email={msg.email}
            key={index}
            username={msg.name}
          />
        ))}
      </div>
      <div className="inputs">
        <form>
          <input
            type="text"
            placeholder="Enter a new message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleAdd}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
