import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";

import DialogButton from "../dialogButton";
import { Box, Typography } from "@material-ui/core";
import "./style.css";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function List(props) {
  const { list } = props;
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        variant='h3'
        component='div'
        sx={{ color: "#AA22AA", fontWeight: "800" }}
      >
        {list.titleMain}
      </Typography>
      <ImageList
        sx={{ width: "90%", height: "100vh" }}
        variant='quilted'
        cols={4}
        rowHeight={121}
      >
        {list.cards.map((item) => (
          <ImageListItem
            className='cardList'
            key={item.image}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.image, 121, item.rows, item.cols)}
              alt={item.title}
              loading='lazy'
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.subTitle}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <DialogButton item={item} titleMain={list.titleMain} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
