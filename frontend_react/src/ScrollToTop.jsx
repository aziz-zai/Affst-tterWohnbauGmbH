import CookieIcon from '@mui/icons-material/Cookie';
import { Box, Fab } from '@mui/material'
import React from 'react'
import * as CookieConsent from 'vanilla-cookieconsent';

function ScrollToTopFab() {
    // Use `window` instead of `body` as `document` will be `undefined` when the
    // hooks first runs. By default, useScrollTrigger will attach itself to `window`.
    const handleAdjustPreferences = () => {
      CookieConsent.showPreferences(); // Opens the cookie preferences modal
    };
  
    return (
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
            onClick={handleAdjustPreferences}
            sx={{
                color:"white", backgroundColor:  "#161B33",
                "&:hover": {color:"#161B33", backgroundColor:  "white"}
            }}
            size="small"
            aria-label="Scroll back to top"
          >
            <CookieIcon fontSize="medium" />
          </Fab>
        </Box>
    )
  }
  
  export default ScrollToTopFab