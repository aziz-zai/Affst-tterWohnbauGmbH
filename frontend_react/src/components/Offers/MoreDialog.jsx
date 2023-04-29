import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import React from 'react';


function MoreDialog({offerTitle, imgArray, open, handleClose}) {
    const handleDialogClose = () => {
        handleClose()
    }
  return (
    open?
    <Dialog open={open} >{console.log('test', open)}
        <DialogTitle sx={{color: "#353531"}}>{offerTitle}
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
            </IconButton>
        </DialogTitle>
        <DialogContent>
          <img src={imgArray[1]} alt="" style={{width:""}}/>
        </DialogContent>
    </Dialog>
    :null
  )
}

export default MoreDialog