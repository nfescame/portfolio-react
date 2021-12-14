import React from "react";

import { Box, Button, Container, Stack, Typography } from "@material-ui/core";
import Link from "@mui/material/Link";

import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";

export default function Header() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#333333",
          pt: 24,
          pb: 8,
          zIndex: "100",
          height: "100vh",
        }}
      >
        <Container maxWidth='sm'>
          <Typography
            component='h5'
            variant='h5'
            align='start'
            color='#08FDD8'
            gutterBottom
          >
            Ola, meu nome é
          </Typography>
          <Typography
            component='h1'
            variant='h2'
            align='start'
            color='#FC0853'
            gutterBottom
          >
            Nilton Escame.
          </Typography>
          <Typography
            component='h1'
            variant='h4'
            align='start'
            color='#08FDD8'
            gutterBottom
          >
            Web developer.
          </Typography>
          <Box
            sx={{
              backgroundColor: "#08FDD8",
              padding: "1rem",
              marginBottom: "3rem",
              marginTop: "3rem",
              borderRadius: "10px",
            }}
          >
            <Typography variant='h6' align='start' color='#333333' paragraph>
              Front End / Back End / React JS.
            </Typography>
          </Box>

          <Stack
            sx={{ pt: 4, pb: 4 }}
            direction='row'
            spacing={2}
            justifyContent='center'
          >
            <Link href='#Projects'>
              <Button
                variant='contained'
                style={{
                  backgroundColor: "#08FDD8",
                  color: "#000",
                }}
              >
                <WorkIcon /> Projects
              </Button>
            </Link>

            <Link href='#Skills'>
              <Button
                variant='contained'
                style={{
                  backgroundColor: "#08FDD8",
                  color: "#000",
                }}
              >
                <CodeIcon />
                Skills
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
