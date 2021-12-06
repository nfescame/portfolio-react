import React from "react";
import { CssBaseline } from "@material-ui/core";

import NavBar from "../../components/navBar";
import Header from "../../components/header";
import List from "../../components/list";
import Footer from "../../components/footer";

export default function Album() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <main>
        <Header />
        <List />
      </main>

      <Footer />
    </>
  );
}
