import React, { useContext } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

import SchoolIcon from "@mui/icons-material/School";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactsIcon from "@mui/icons-material/Contacts";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import { AuthContext } from "../../context";

export default function Drop() {
  const { setIsOpen } = useContext(AuthContext);
  return (
    <List
      onMouseLeave={() => setIsOpen(false)}
      sx={{
        zIndex: "100",
        width: "100%",
        maxWidth: 200,
        bgcolor: "background.paper",
        position: "fixed",
        marginTop: "3.5rem",
        borderBottomRightRadius: "20%",
      }}
    >
      <Link href='#'>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FileUploadIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Top' />
        </ListItem>
      </Link>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ContactsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Contatos' />
      </ListItem>

      <Link href='https://github.com/nfescame' target='_blank'>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <GitHubIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Github' />
        </ListItem>
      </Link>

      <Link href='https://www.linkedin.com/in/nilton-escame/' target='_blank'>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LinkedInIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='LinkedIn' />
        </ListItem>
      </Link>

      <Link href='https://profiles.ironhack.com/nilton-escame' target='_blank'>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SchoolIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Certificações' />
        </ListItem>
      </Link>
    </List>
  );
}
