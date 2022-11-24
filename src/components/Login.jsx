import { Box, Container, Grid, Button } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../index";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

  return (
    <Container>
      <Grid
        container
        styke={{ height: window.innerHeight - 50 }}
        alignContent={"center"}
        justify={"center"}
      >
        <Grid
          style={{ width: 400, background: "red" }}
          container
          alignItems={"center"}
          direction={"column"}
        >
          <Box p={5}>
            <Button onClick={login} variant="contained">
              Log in with Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
