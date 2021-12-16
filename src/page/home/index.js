import React, { useContext } from "react";
import { CssBaseline, Box, Grid } from "@material-ui/core";

import "./style.css";

import Header from "../../components/header";

import List from "../../components/list";

import LinearColor from "../../components/linearColor";

import Footer from "../../components/footer";

import { AuthContext } from "../../context";

export default function Album() {
  const { projects, competencias } = useContext(AuthContext);

  return (
    <section className='section' style={{ backgroundColor: "blue" }}>
      <CssBaseline />

      <Box>
        <Header />
        <LinearColor />
        <Grid container spacing={2} sx={{ backgroundColor: "#2a2a2a" }}>
          <Grid item xs={12} sm={6} md={6}>
            <List list={projects} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <List list={competencias} />
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </section>
  );
}
