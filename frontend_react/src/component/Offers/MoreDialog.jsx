import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Close as CloseIcon,
} from '@mui/icons-material'
import {Dialog, DialogContent, DialogTitle, IconButton, Slide} from '@mui/material'
import React from 'react'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
const MoreDialog = ({offerTitle, offerText, imgArray, open, handleClose}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : imgArray.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < imgArray.length - 1 ? prevIndex + 1 : 0))
  }
  const handleDialogClose = () => {
    handleClose()
  }

  return open ? (
    <div className="gallery-wrapper">
      <div className="gallery-header">
        <h2>{offerTitle}</h2>
        <IconButton
          aria-label="close"
          onClick={handleDialogClose}
          sx={{
            position: 'absolute',
            right: 3,
            top: 3,
            color: 'white',
          }}
        >
          <CloseIcon sx={{fontSize: '1.8rem'}} />
        </IconButton>
      </div>
      <div className="gallery-content">
        <div className="navigation">
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: {xs: '10%', sm: '0', md: '1rem'},
              top: {xs: '20%', sm: '50%', md: '50%'},
              zIndex: 8,
            }}
          >
            <ChevronLeftIcon
              sx={{color: 'white', fontSize: {xs: '5rem', sm: '1.5rem', md: '2.75rem'}}}
            />
          </IconButton>
          <div
            className="big-pics-gallery"
            style={{transform: `translate(-${currentIndex * 100}%)`}}
          >
            {imgArray.map((img) => (
              <div>
                <img src={img} alt="bild" />
              </div>
            ))}
          </div>
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: {xs: '10%', sm: '0', md: '1rem'},
              top: {xs: '20%', sm: '50%', md: '50%'},
              zIndex: 8,
            }}
          >
            <ChevronRightIcon
              sx={{color: 'white', fontSize: {xs: '5rem', sm: '1.5rem', md: '2.75rem'}}}
            />
          </IconButton>
        </div>
        <div className="gallery-navdots">
          {imgArray.map((item) => (
            <img
              src={item}
              alt="Bild"
              onClick={() => setCurrentIndex(imgArray.indexOf(item))}
              key={item}
              className="gallery-navdot-items"
              style={{borderColor: imgArray.indexOf(item) === currentIndex ? '#FAC189' : '#cbcbcb'}}
            />
          ))}
        </div>
      </div>
    </div>
  ) : null
}

export default MoreDialog
