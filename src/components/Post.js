import React from "react";

import "../css/Post.css";
import Obj from "../Firebase-Files/Firebase";
const { auth } = Obj;

function Post({ message, timestamp, username, email }) {
  const user = auth.currentUser;
  const isUser = user.displayName === username;

  return (
    <div className={`post ${isUser && "post__user"}`}>
      <p>{`${username}: ${message}`}</p>
    </div>
  );
}

export default Post;
