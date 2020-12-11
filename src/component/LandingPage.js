import React from "react";
import { Grid } from "@material-ui/core";
import NavBar from "./NavBar";
import LandingCard from "./LandingCard";
function LandingPage() {
  return (
    <Grid container direction="column">
      <Grid itme>
        <NavBar />
      </Grid>
      <Grid item container justify="center" alignItems="center">
        <Grid item xs={0} sm={1} />
        <Grid item xs={12} sm={12}>
          <LandingCard />
        </Grid>
        <Grid item xs={0} sm={1} />
      </Grid>
    </Grid>
  );
}

export default LandingPage;
