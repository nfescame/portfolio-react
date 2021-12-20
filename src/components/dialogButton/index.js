import * as React from "react";

import InfoIcon from "@mui/icons-material/Info";
import DialogUtil from "../dialogUtil";

export default function DialogButton({ item, titleMain }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <InfoIcon onClick={handleClickOpen} />
      <DialogUtil
        open={open}
        onClose={handleClose}
        item={item}
        titleMain={titleMain}
      />
    </div>
  );
}
