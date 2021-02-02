import React from "react";
import Obj from "../Firebase-Files/Firebase";

const { auth, db } = Obj;

function HomeJsBackup() {
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
          const data = doc.data();
          const post = data.data;

          setUserData(data);
          setUserPosts(post);
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
      <div className="addStuff">
        <h3>Add Message</h3>
        <form onSubmit={handleAdd} className="message-form">
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleAdd}>Add</button>
        </form>
      </div>

      <h2>Your Messages</h2>
      <div className="posts">
        {userPosts.map((item, index) => (
          <Post key={index} message={item.message} title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default HomeJsBackup;
