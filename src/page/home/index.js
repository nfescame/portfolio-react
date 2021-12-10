import React, { useContext } from "react";
import { Box, CssBaseline, Typography } from "@material-ui/core";

import NavBar from "../../components/navBar";
import Header from "../../components/header";
import Drop from "../../components/drop";
import List from "../../components/list";

import Footer from "../../components/footer";

import { AuthContext } from "../../context";

export default function Album() {
  const { isOpen } = useContext(AuthContext);

  return (
    <>
      <CssBaseline />
      <NavBar />

      {isOpen ? <Drop /> : null}

      <main>
        <Header />
        <List />
      </main>

      <Footer />
    </>
  );
}
