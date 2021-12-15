import React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import Link from "@mui/material/Link";

export default function DialogUtil(props) {
  const { onClose, selectedValue, open, item } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle id='alert-dialog-title'>{item.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {item.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Link href={item.path} target='_blank'>
          <Button>Deploy</Button>
        </Link>
        <Link href={item.pathRepo} target='_blank'>
          <Button>Repositorio</Button>
        </Link>
        <Button onClick={handleClose}>close</Button>
      </DialogActions>
    </Dialog>
  );
}

DialogUtil.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
