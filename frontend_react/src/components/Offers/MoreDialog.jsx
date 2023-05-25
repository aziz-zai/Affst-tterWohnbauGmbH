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
    
    open?
    <div className='gallery-wrapper'>
      <div className='gallery-header'>
        <h2>{offerTitle}</h2>
        <IconButton
                aria-label="close"
                onClick={handleDialogClose}
                sx={{
                  position: "absolute",
                  right: "3rem",
                  top: "1.2rem",
                  color:"white", 
                }}
              >
                <CloseIcon sx={{fontSize:"1.8rem"}}/>
            </IconButton>
      </div>
      <div className='gallery-content'>
      <div className='navigation'>
          <IconButton onClick={handlePrev} sx={{
                  position: "absolute",
                  left: "2rem",
                  top: "50%",
                }}>
            <ChevronLeftIcon fontSize="large" sx={{color:"white"}}/>
          </IconButton>
          <img src={imgArray[currentIndex]} alt={offerTitle}  />
          <IconButton onClick={handleNext} sx={{
                  position: "absolute",
                  right: "3rem",
                  top: "50%",
                }}>
            <ChevronRightIcon fontSize="large" sx={{color:"white"}}/>
          </IconButton>
        </div>
        <div className='gallery-navdots'>
              {imgArray.map(item => <img src={item} alt="Bild"
              onClick={() => setCurrentIndex(imgArray.indexOf(item))} key={item} 
              className='gallery-navdot-items' 
              style={{borderColor: imgArray.indexOf(item) === currentIndex ? "#FAC189" : "#cbcbcb"}} />)}
            </div>
        </div>
    </div>
    :null
  );
};

export default MoreDialog
