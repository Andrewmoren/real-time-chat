import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { getAuth } from "firebase/auth";
import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwWDsuq2OUUVkmuktVjEexBVIKuriN0P8",
  authDomain: "chat-react-9ca1c.firebaseapp.com",
  projectId: "chat-react-9ca1c",
  storageBucket: "chat-react-9ca1c.appspot.com",
  messagingSenderId: "899913652422",
  appId: "1:899913652422:web:3a834da33abf65dc5c9fc7",
  measurementId: "G-X2EQ14B1LF",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export const Context = React.createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      db,
    }}
  >
    <App />
  </Context.Provider>
);
