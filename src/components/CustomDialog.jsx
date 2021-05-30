import React, { useState, useCallback } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';


export default function CustomDialog({ title = '', children }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const Control = useCallback(({ children, ...rest }) => (
    <span onClick={handleClickOpen} {...rest}>
      { children }
    </span>
  ), [open]);

  const Modal = useCallback(({ children, onOK, ...rest }) => (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      {...rest}
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => { onOK(); handleClose(); }} color="primary" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  ), [open]);

  return children({
    Control,
    Modal,
  });
}
