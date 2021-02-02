import React, { useEffect, useState, createContext } from "react";

import Obj from "../Firebase-Files/Firebase";

export const userContext = createContext();
export const UserProvider = (props) => {
  const { auth, db } = Obj;
  const user = auth.currentUser;

  const userData = () => {
    return db.collection("users").doc(user.uid).get();
  };

  return (
    <userContext.Provider value={[user, userData, db]}>
      {props.children}
    </userContext.Provider>
  );
};
