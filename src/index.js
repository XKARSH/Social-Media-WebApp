import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import firebaseContext from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase";
import "./styles/app.css";

createRoot(document.getElementById("root")).render(
  <firebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </firebaseContext.Provider>
);
