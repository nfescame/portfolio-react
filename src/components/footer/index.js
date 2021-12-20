import React from "react";
import { Box, Typography } from "@material-ui/core";

import "./style.css";
export default function Footer() {
  return (
    <Box className='footer'>
      <Typography className='footerContent' variant='body2' align='center'>
        {"Copyright © "} Escame{new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
