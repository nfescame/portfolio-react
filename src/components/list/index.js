import React from "react";
import { Grid, Container, Typography } from "@material-ui/core";

import CardItem from "../card";

export default function List(props) {
  const { list } = props;

  return (
    <div>
      <Container sx={{ mt: 6 }} maxWidth='md'>
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
            <Grid item key={index} xs={6} sm={6} md={4}>
              <CardItem
                title={card.title}
                subTitle={card.subTitle}
                image={card.image}
                path={card.path}
                description={card.description}
                pathRepo={card.pathRepo}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
