/* eslint-disable react-hooks/exhaustive-deps */
// Checks if a user is logged in or Logged out.

import { useState, useEffect, useContext } from "react";
import firebaseContext from "../context/firebase";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(firebaseContext);
  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // We have an authuser so we can store the user in localStorage.
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        // We don't have an authuser so we clear the localStorage.
        localStorage.removeItem("authUser");
      }
    });

    return () => listener();
  }, [firebase]);

  return { user };
}
