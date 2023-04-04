import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import React from 'react';

function SuccessDialog({open, handleClose}) {

    const handleDialogClose = () => {
        handleClose()
    }
    
  return (
    open?
    <Dialog open={open} >
        <DialogTitle sx={{color: "#353531"}}>Erfolgreich versendet!
        <IconButton
                aria-label="close"
                onClick={handleDialogClose}
                sx={{
                  position: "absolute",
                  right: 3,
                  top: 3,
                }}
              >
                <CloseIcon />
              </IconButton></DialogTitle>
        <DialogContent sx={{color: "#75756d"}}>Wir haben Ihre Nachricht erfolgreich erhalten und werden uns schnellstmöglich um Ihr Anliegen kümmern</DialogContent>
        <DialogActions sx={{p:"1rem"}}><Button variant="contained" sx={[{backgroundColor:"#FAC189", padding:"0.5rem 2rem", borderRadius: "50px"}, {
      '&:hover': {
        backgroundColor: '#89C2FA'
      }}]}onClick={handleDialogClose}>Ok</Button></DialogActions>
    </Dialog>
    :null
  )
}

export default SuccessDialog