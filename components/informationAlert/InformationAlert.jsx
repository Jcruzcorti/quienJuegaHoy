'use client'

import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Fab, Typography } from '@mui/material';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

  
export default function InformationAlert() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Fab color="info" aria-label="add" size="small"  onClick={handleClickOpen}>
      +
      </Fab>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"LIGAS DISPONIBLES"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography variant="subtitle" gutterBottom color='#828282'>
                Los partidos disponibles corresponden a la primera división de Inglaterra, Italia, España, Alemania, Francia, Portugal y Brasil. Además, partidos del mundial, Champions League y Eurocopa.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>

          <Button onClick={handleClose} size="small">ENTIENDO</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}



