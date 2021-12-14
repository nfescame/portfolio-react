import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";

import CardItem from "../card";

export default function ListCompetencias(props) {
  const { list } = props;

  return (
    <>
      <Container sx={{ py: 6 }} maxWidth='md'>
        <Typography
          align='center'
          gutteBottom
          variant='h2'
          component='h2'
          id={list.titleMain}
        >
          {list.titleMain}
        </Typography>

        <Grid container spacing={4}>
          {list.cards.map((card, index) => (
            <Grid item key={index} xs={6} sm={6} md={2}>
              <CardItem
                title={card.title}
                image={card.image}
                description={card.description}
                titleMain={list.titleMain}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
