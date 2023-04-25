import { KeyboardArrowUp } from '@mui/icons-material'
import { Box, Fab, Zoom } from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import React, { useCallback } from 'react'

function ScrollToTopFab() {
    // Use `window` instead of `body` as `document` will be `undefined` when the
    // hooks first runs. By default, useScrollTrigger will attach itself to `window`.
    const trigger = useScrollTrigger({
      // Number of pixels needed to scroll to toggle `trigger` to `true`.
      threshold: 100,
      disableHysteresis: true, 
    })
  
    const scrollToTop = useCallback(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])
  
    return (
      <Zoom in={trigger}>
        <Box
          role="presentation"
          // Place the button in the bottom right corner.
          sx={{
            position: "fixed",
            bottom: 62,
            right: 40,
            zIndex: 11,
          }}
        >
          <Fab
            onClick={scrollToTop}
            sx={{
                color:"white", backgroundColor:  "#161B33",
                "&:hover": {color:"#161B33", backgroundColor:  "white"}
            }}
            size="small"
            aria-label="Scroll back to top"
          >
            <KeyboardArrowUp fontSize="medium" />
          </Fab>
        </Box>
      </Zoom>
    )
  }
  
  export default ScrollToTopFab