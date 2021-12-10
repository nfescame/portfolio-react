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
  const { title, image, description, path, subTitle, pathRepo } = props;
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
            // 16:9
            pt: "56.25%",
          }}
          image={image}
          alt='random'
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography gutterBottom variant='h5' component='h5'>
            {subTitle}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions>
          <Link color='inherit' href={path}>
            <Button size='small'>Deploy</Button>
          </Link>
          <Link color='inherit' href={pathRepo}>
            <Button size='small'>Github</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
}
