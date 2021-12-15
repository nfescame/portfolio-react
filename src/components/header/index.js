import React from "react";

import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import Link from "@mui/material/Link";

export default function Header() {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "#2A2A2A",
          pt: 25,
          pb: 28,
          zIndex: "100",
        }}
      >
        <Container maxWidth='sm' sx={{ display: "flex", maxWidth: "100%" }}>
          <Box>
            <Typography
              component='h1'
              variant='h3'
              align='start'
              color='#A2A'
              gutterBottom
            >
              Web developer portfolio.
            </Typography>
            <Typography
              component='h6'
              variant='h6'
              align='start'
              color='#CACACA'
              gutterBottom
            >
              Componentes React.JS, Bootstrap, Material UI, Node.JS... Confira
              meus projetos mais recentes de portfólio de desenvolvimento de
              software para web.
            </Typography>

            <Stack
              sx={{ pt: 4, pb: 4 }}
              direction='row'
              spacing={2}
              justifyContent='center'
            >
              <Grid container spacing={2}>
                <Grid item xs={4} sm={6} md={4}>
                  <Link>
                    <Button
                      variant='contained'
                      sx={{ backgroundColor: "#2A2A2A", width: "7rem" }}
                    >
                      Projetos
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={3} sm={6} md={4}>
                  <Link>
                    <Button
                      variant='contained'
                      sx={{ backgroundColor: "#2A2A2A", width: "5rem" }}
                    >
                      Skills
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={4} sm={6} md={4}>
                  <Link>
                    <Button
                      variant='contained'
                      sx={{ backgroundColor: "#2A2A2A", width: "7rem" }}
                    >
                      Contatos
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={3} sm={6} md={4}>
                  <Link href='https://github.com/nfescame' target='_blank'>
                    <Button
                      variant='contained'
                      sx={{ backgroundColor: "#2A2A2A", width: "5rem" }}
                    >
                      GitHub
                    </Button>
                  </Link>
                </Grid>

                <Grid item xs={4} sm={6} md={4}>
                  <Link
                    href='https://www.linkedin.com/in/nilton-escame/'
                    target='_blank'
                  >
                    <Button
                      variant='contained'
                      sx={{ backgroundColor: "#2A2A2A", width: "7rem" }}
                    >
                      LinkedIn
                    </Button>
                  </Link>
                </Grid>

                <Grid item xs={5} sm={6} md={4}>
                  <Link
                    href='https://profiles.ironhack.com/nilton-escame'
                    target='_blank'
                  >
                    <Button
                      variant='contained'
                      sx={{ backgroundColor: "#2A2A2A", width: "7rem" }}
                    >
                      Certificado
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Stack>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
