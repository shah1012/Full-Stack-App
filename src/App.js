import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Chat from "./Pages/Chat";
import Todos from "./Pages/Todos";

//context
import { TodoProvider } from "./contexts/todoContext";
import { UserProvider } from "./contexts/userContext.js";

//firebase stuff
import Obj from "./Firebase-Files/Firebase";
import Account from "./Pages/Account";
const { auth } = Obj;

function App() {
  //states
  const [user, setUser] = useState("");

  //useEffect to fetch the current user!
  useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          setUser("");
        }
      });
    };

    fetchUser();
  }, []);

  return (
    <div className="App">
      <UserProvider>
        <Router>
          {user ? (
            <>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/account">
                <Account />
              </Route>
              <Route path="/chat">
                <Chat />
              </Route>
              <Route path="/todos">
                <TodoProvider>
                  <Todos />
                </TodoProvider>
              </Route>
            </>
          ) : (
            <Login />
          )}
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
