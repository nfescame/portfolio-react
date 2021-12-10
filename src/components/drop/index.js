import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactsIcon from "@mui/icons-material/Contacts";
import CodeIcon from "@mui/icons-material/Code";

export default function Drop() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "fixed",
        marginTop: "4rem",
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Projetos' />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CodeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Competências' />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ContactsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Contatos' />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <GitHubIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Github' />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LinkedInIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='LinkedIn' />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SchoolIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Certificações' />
      </ListItem>
    </List>
  );
}
