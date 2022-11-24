import React from "react";
import { Box, Container, Grid, Button } from "@mui/material";

const Loader = () => {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignContent={"center"}
        justify={"center"}
      >
        <Grid container alignItems={"center"} direction={"column"}>
          <div className="lds-hourglass"></div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;
