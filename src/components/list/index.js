import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";

import CardItem from "../card";

import { AuthContext } from "../../context/index";

export default function List() {
  const data = React.useContext(AuthContext);
  const { cards } = data;
  console.log(cards);

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth='md'>
        <Typography align='center' gutterBottom variant='h2' component='h2'>
          Album Projects
        </Typography>

        <Grid container spacing={4}>
          {cards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <CardItem
                title={card.title}
                subTitle={card.subTitle}
                image={card.image}
                path={card.path}
                description={card.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
