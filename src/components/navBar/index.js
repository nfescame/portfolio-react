import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { AuthContext } from "../../context";

export default function ButtonAppBar() {
  const { setIsOpen } = useContext(AuthContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='inherit'>
        <Toolbar>
          <IconButton
            onMouseEnter={() => setIsOpen(true)}
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Portifolio
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
