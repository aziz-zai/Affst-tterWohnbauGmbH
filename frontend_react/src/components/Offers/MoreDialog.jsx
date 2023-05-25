import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Close as CloseIcon } from '@mui/icons-material';
import { Dialog, DialogContent, DialogTitle, IconButton, Slide } from '@mui/material';
import React from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const  MoreDialog = ({ offerTitle, offerText, imgArray, open, handleClose }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : imgArray.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex < imgArray.length - 1 ? prevIndex + 1 : 0));
  };
  const handleDialogClose = () => {
    handleClose()
}

  return (
    <Dialog open={open} onClose={handleClose} fullScreen TransitionComponent={Transition}>
       <DialogTitle sx={{color: "white", backgroundColor: "#FAC189", ml:"2rem", mr:"2rem", borderBottomRightRadius:"16px", borderBottomLeftRadius:"16px"}}>{offerTitle} | {offerText}
            <IconButton
                aria-label="close"
                onClick={handleDialogClose}
                sx={{
                  position: "absolute",
                  right: "3rem",
                  top: 3,
                  color:"white", 
                }}
              >
                <CloseIcon sx={{fontSize:"2.6rem"}}/>
            </IconButton>
        </DialogTitle>
      <DialogContent sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <div className='navigation'>
          <IconButton onClick={handlePrev}>
            <ChevronLeftIcon fontSize="large"/>
          </IconButton>
          <img src={imgArray[currentIndex]} alt={offerTitle} style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }} />
          <IconButton onClick={handleNext}>
            <ChevronRightIcon fontSize="large"/>
          </IconButton>
        </div>
        <div className='gallery-navdots'>
              {imgArray.map(item => <button 
              onClick={() => setCurrentIndex(imgArray.indexOf(item))} key={item} 
              className='gallery-navdot-items' 
              style={{backgroundColor: imgArray.indexOf(item) === currentIndex ? "#FAC189" : "#cbcbcb"}} />)}
            </div>
      </DialogContent>
    </Dialog>
  );
};

export default MoreDialog
