import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import React, { useState } from 'react';
import './Offers.scss';



function MoreDialog({offerTitle, imgArray, open, handleClose}) {
    const handleDialogClose = () => {
        handleClose()
    }
    const [index, setIndex] = useState(0)  

    function nextStep() {
      if (index === imgArray.length - 1) {
        setIndex(0)
        return
      }
      setIndex(index + 1)
    }
  
    function prevStep() {
      if (index === 0) {
        setIndex(imgArray.length - 1)
        return
      }
      setIndex(index - 1)
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
          <div className="gallery_items-wrapper">
          <div className="gallery_items" style={{ transform: `translate(-${index * 100/imgArray.length}%)`}}>
          {imgArray.map(img => 
          <img key={img} src={img} alt={`Bilder von ${offerTitle}`}/>
          )}
          </div>
          </div>
          <div className='gallery-nav'>
          <IconButton className='prevButton navButtons' onClick={prevStep}  >
        <ArrowBackIosIcon/>
      </IconButton>
            <div className='gallery-navdots'>
              {imgArray.map(item => <button 
              onClick={() => setIndex(imgArray.indexOf(item))} key={item} 
              className='gallery-navdot-items' 
              style={{backgroundColor: imgArray.indexOf(item) === index ? "#FAC189" : "#cbcbcb"}} />)}
            </div>
      <IconButton className='nextButton navButtons' onClick={nextStep} >
        <ArrowForwardIosIcon/>
      </IconButton>
          </div>
        </DialogContent>
    </Dialog>
    :null
  )
}

export default MoreDialog