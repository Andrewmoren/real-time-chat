import React from "react";
import { Box, Container, Grid, Button } from "@mui/material";

const Loader = () => {
  return (
    <Container>
      <Grid
        container
        styke={{ height: window.innerHeight - 50 }}
        alignContent={"center"}
        justify={"center"}
      >
        <Grid alignItems={"center"} direction={"column"}>
          <div class="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;
