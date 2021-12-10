import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { AuthContext } from "../../context";

export default function ButtonAppBar() {
  const { setIsOpen, isOpen } = useContext(AuthContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <IconButton
            onClick={() => setIsOpen(isOpen ? false : true)}
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Portifolio FULL-STACK DEVELOPER
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
