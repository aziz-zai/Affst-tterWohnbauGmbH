import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import Slide from '@mui/material/Slide';
import React, { useState } from 'react';
import './Offers.scss';



function MoreDialog({offerTitle, offerText, imgArray, open, handleClose}) {
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
    const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });
  return (
    open?
    <Dialog open={open} fullScreen TransitionComponent={Transition}>
        <DialogTitle sx={{color: "white", backgroundColor: "#FAC189"}}>{offerTitle} | {offerText}
            <IconButton
                aria-label="close"
                onClick={handleDialogClose}
                sx={{
                  position: "absolute",
                  right: 7,
                  top: 3,
                  color:"white", 
                }}
              >
                <CloseIcon sx={{fontSize:"2.6rem"}}/>
            </IconButton>
        </DialogTitle>
        <DialogContent sx={{width: "1000px"}}>
          <div className="gallery_items-wrapper">
          <div className="gallery_items" style={{ transform: `translate(-${index * 100/imgArray.length}%)`}}>
          {imgArray.map(img => 
          <div style={{padding:"1rem"}}>
            <img key={img} src={img} alt={`Bilder von ${offerTitle}`}/>
          </div>
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