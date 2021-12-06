import React from "react";

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  CardMedia,
} from "@material-ui/core";

export default function Header() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 16,
          pb: 8,
          zIndex: "100",
        }}
      >
        <Container maxWidth='sm'>
          <Typography
            component='h1'
            variant='h2'
            align='center'
            color='text.primary'
            gutterBottom
          >
            Nilton Escame
          </Typography>
          <Typography
            variant='h5'
            align='center'
            color='text.secondary'
            paragraph
          >
            Atuo como gerente comercial há cerca de 20 anos. Neste período
            adquiri vasta experiência com gestão e treinamento de equipe,
            estabelecimento de metas com previsão de resultados, comunicação e
            todo o processo gerencial que envolve a área. Estou em transição
            para uma nova área, a de Web Development. Com os conhecimentos
            adquiridos no Bootcamp da Ironhack, me sinto preparado para essa
            nova etapa em minha vida profissional.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction='row'
            spacing={2}
            justifyContent='center'
          >
            <Button variant='contained'>Main call to action</Button>
            <Button variant='outlined'>Secondary action</Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
