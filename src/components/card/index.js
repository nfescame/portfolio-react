import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Link,
} from "@material-ui/core";

export default function CardItem(props) {
  const { title, image, description, path, subTitle, pathRepo, titleMain } =
    props;
  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component='img'
          sx={{
            pt: "15%",
          }}
          image={image}
          alt='random'
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
            sx={{ color: "rgb(252, 8, 83)" }}
          >
            {title}
          </Typography>
          <Typography
            gutterBottom
            variant='h6'
            component='h5'
            sx={{ color: "#333333" }}
          >
            {subTitle}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
        {titleMain === "Skills" ? null : (
          <CardActions>
            <Link
              color='inherit'
              href={path}
              target='_blank'
              sx={{ textDecoration: "none" }}
            >
              <Button size='small'>Deploy</Button>
            </Link>
            <Link
              color='inherit'
              href={pathRepo}
              target='_blank'
              sx={{ textDecoration: "none" }}
            >
              <Button size='small'>Github</Button>
            </Link>
          </CardActions>
        )}
      </Card>
    </>
  );
}
