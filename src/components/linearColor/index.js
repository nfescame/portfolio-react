import * as React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearColor() {
  return (
    <Stack
      sx={{
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
        width: "100%",
        color: "grey.500",
        backgroundColor: "#2A2A2A",
        padding: "2rem",
      }}
      spacing={6}
    >
      <LinearProgress color='secondary' />
      <LinearProgress color='success' />
      <LinearProgress color='inherit' />
    </Stack>
  );
}
