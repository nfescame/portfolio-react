import React from "react";

import Home from "./page/home";
import { Auth } from "./context";

function App() {
  return (
    <>
      <Auth>
        <Home />
      </Auth>
      ;
    </>
  );
}

export default App;
