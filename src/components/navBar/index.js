import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import InfoIcon from "@mui/icons-material/Info";

export default function NavBar() {
  return (
    <AppBar>
      <Toolbar>
        <InfoIcon sx={{ mr: 2 }} />
        <Typography variant='h6' color='inherit' noWrap>
          My Portifolio
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
