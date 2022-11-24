import { Box, Container, Grid, Button } from "@mui/material";
import React from "react";

const Login = () => {
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
            <Button variant="contained">Log in with Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
