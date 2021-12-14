import React from "react";
import { Box, Typography } from "@material-ui/core";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component='footer'>
      <Typography variant='body2' color='text.secondary' align='center'>
        {"Copyright © "} Escame{new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
