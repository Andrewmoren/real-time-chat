import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button, Grid } from "@mui/material";
import { LOGIN_ROUTE } from "../utils/const";

import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";

const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <AppBar position="static" color={"primary"}>
      <Toolbar>
        <Grid container justify="flex-end">
          {user ? (
            <Button onClick={() => auth.signOut()} variant="contained">
              Exit
            </Button>
          ) : (
            <Link to={LOGIN_ROUTE}>
              <Button variant="contained">Login</Button>
            </Link>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
