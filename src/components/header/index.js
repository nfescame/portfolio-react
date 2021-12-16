import React from "react";
import Img from "../../img/florian-olivo-4hbJ-eymZ1o-unsplash.jpg";

import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import Link from "@mui/material/Link";

import "./style.css";

export default function Header() {
  return (
    <Box className='containerHeader'>
      <Typography
        className='titleHeader'
        component='h1'
        variant='h3'
        align='start'
        color='white'
      >
        Nilton Escame
      </Typography>
      <img src={Img} alt='img' className='imgHeader' />

      <Box className='boxHeader'>
        <Container maxWidth='sm' sx={{ display: "flex", maxWidth: "100%" }}>
          <Box>
            <Typography
              component='h1'
              variant='h3'
              align='start'
              color='#A2A'
              gutterBottom
              sx={{ fontWeight: "800" }}
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
              <Grid container align='center' spacing={2}>
                <Grid item xs={4} sm={4} md={4}>
                  <Link href='https://github.com/nfescame' target='_blank'>
                    <Button
                      variant='contained'
                      sx={{ backgroundColor: "#2A2A2A", width: "6rem" }}
                    >
                      GitHub
                    </Button>
                  </Link>
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                  <Link
                    href='https://www.linkedin.com/in/nilton-escame/'
                    target='_blank'
                  >
                    <Button
                      variant='contained'
                      sx={{ backgroundColor: "#2A2A2A", width: "6rem" }}
                    >
                      LinkedIn
                    </Button>
                  </Link>
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                  <Link
                    href='https://profiles.ironhack.com/nilton-escame'
                    target='_blank'
                  >
                    <Button
                      variant='contained'
                      sx={{ backgroundColor: "#2A2A2A", width: "6rem" }}
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
    </Box>
  );
}
