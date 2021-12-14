import React, { useContext } from "react";
import { CssBaseline } from "@material-ui/core";

import NavBar from "../../components/navBar";
import Header from "../../components/header";
import Drop from "../../components/drop";
import List from "../../components/list";
import ListCompetencias from "../../components/list Competencias";

import Footer from "../../components/footer";

import { AuthContext } from "../../context";

export default function Album() {
  const { isOpen, projects, competencias } = useContext(AuthContext);

  return (
    <section>
      <CssBaseline />
      <NavBar />

      {isOpen ? <Drop /> : null}

      <main>
        <Header />
        <List list={projects} />
        <ListCompetencias list={competencias} />
      </main>

      <Footer />
    </section>
  );
}
