import React, { useContext, useState, useEffect } from "react";
import { Avatar, Container, Grid, Button, TextField } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";

import {
  collection,
  addDoc,
  Timestamp,
  getDocs,
  doc,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

const Chat = () => {
  const { auth, db } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");

  const [messages, setMessagesData] = useState([]);

  const sendMessage = async () => {
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: value,
        createdAt: Timestamp.fromDate(new Date()),
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setValue("");
  };

  const getMessages = async () => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));

    onSnapshot(q, (querySnapshot) => {
      setMessagesData([]);

      querySnapshot.docs.map((doc) => {
        setMessagesData((prevState) => {
          return [...prevState, doc.data()];
        });
      });
    });
  };

  useEffect(() => {
    getMessages();
  }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <Container>
      <Grid
        container
        justify={"center"}
        style={{ height: window.innerHeight - 50, marginTop: 20 }}
      >
        <div
          style={{
            width: "80%",
            height: "60vh",
            border: "1px solid gray",
            overflowY: "auto",
          }}
        >
          {messages.map((message) => (
            <div
              style={{
                margin: 10,
                border:
                  user.uid === message.uid
                    ? "2px solid green"
                    : "2px dashed red",
                marginLeft: user.uid === message.uid ? "auto" : "10px",
                width: "fit-content",
                padding: 5,
              }}
            >
              <Grid container>
                <Avatar src={message.photoURL} />
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          ))}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "80%" }}
        >
          <TextField
            fullWidth
            rows={2}
            variant={"outlined"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={sendMessage} variant={"outlined"}>
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
