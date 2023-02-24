import { useContext } from "react";
import firebaseContext from "../context/firebase";
import UserContext from "../context/user";

export default function Header() {
  const { firebase } = useContext(firebaseContext);
  const { user } = useContext(UserContext);

  console.log("user", user);
  return <p>I am the Header</p>;
}
