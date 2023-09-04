import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import {IconButton, Tooltip} from '@mui/material'
import React, {useState} from 'react'
import {RiContactsFill} from 'react-icons/ri'

// see https://iconsvg.xyz/

const MapMarker2 = ({size = 16, color = 'currentColor'}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{verticalAlign: 'bottom'}}
  >
    <circle cx="12" cy="10" r="3" />
    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
  </svg>
)
const Phone = ({size = 16, color = '#241200'}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{verticalAlign: 'bottom'}}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)
const Mail = ({size = 16, color = '#241200', ...props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{verticalAlign: 'bottom'}}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)
const Star = ({size = 16, color = 'currentColor'}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{verticalAlign: 'bottom'}}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)
const StyledTooltip = ({title, color, children, ...props}) => (
  <Tooltip
    {...props}
    title={title}
    placement="right"
    componentsProps={{
      tooltip: {
        sx: {
          backgroundColor: color,
        },
      },
    }}
  >
    {children}
  </Tooltip>
)

function ContactPopOver() {
  const [isCopied, setIsCopied] = useState([false, false, false, false])

  const handleCopyClick = (text, index) => {
    // Select the text to copy
    navigator.clipboard.writeText(text)

    // Update isCopied state to show check circle icon
    setIsCopied((prevState) => {
      const newState = [...prevState]
      newState[index] = true
      return newState
    })

    // Reset isCopied state after 1 second
    setTimeout(() => {
      setIsCopied((prevState) => {
        const newState = [...prevState]
        newState[index] = false
        return newState
      })
    }, 1000)
  }
  return (
    <div className="app__social">
      <div className="app__social-wrapper">
        <div className="app__social-card">
          <div className="app__social-card-entry">
            <div className="app__social-card-entry-title">
              <h2>Bilal Yer</h2>
              <div />
              <p>Geschäftsführer</p>
            </div>
            <div className="app__social-card-entry-point">
              <div>
                {' '}
                <Phone />
                <a style={{color: 'white'}} href="tel:+49 179 5988329">
                  +49 179 5988329
                </a>
                <StyledTooltip
                  title={`${isCopied[0] ? 'Erfolgreich kopiert' : 'Kopieren'}`}
                  color={`${isCopied[0] ? 'green' : '#636363'}`}
                >
                  <IconButton
                    sx={{
                      position: 'absolute',
                      right: 3,
                      width: 20,
                      cursor: 'pointer',
                      color: 'white',
                    }}
                    onClick={() => {
                      handleCopyClick('+49 179 5988329', 0)
                    }}
                  >
                    {isCopied[0] ? (
                      <CheckCircleOutlineIcon sx={{width: 20, color: 'white'}} />
                    ) : (
                      <ContentCopyIcon sx={{width: 20, color: 'white'}} />
                    )}
                  </IconButton>
                </StyledTooltip>
              </div>
              <div>
                {' '}
                <Mail />{' '}
                <a
                  style={{color: 'white'}}
                  href="mailto:info@affstaetterwohnbau.com?subject=Kundenanfrage&body=Dein%20Anliegen"
                >
                  info@affstaetterwohnbau.com
                </a>
                <StyledTooltip
                  title={`${isCopied[1] ? 'Erfolgreich kopiert' : 'Kopieren'}`}
                  color={`${isCopied[1] ? 'green' : '#636363'}`}
                >
                  <IconButton
                    sx={{
                      position: 'absolute',
                      right: 3,
                      width: 20,
                      cursor: 'pointer',
                      color: 'white',
                    }}
                    onClick={() => {
                      handleCopyClick('Bilal.yer@sidal.com', 1)
                    }}
                  >
                    {isCopied[1] ? (
                      <CheckCircleOutlineIcon sx={{width: 20, color: 'white'}} />
                    ) : (
                      <ContentCopyIcon sx={{width: 20, color: 'white'}} />
                    )}
                  </IconButton>
                </StyledTooltip>
              </div>
            </div>
            <div className="app__social-card-entry-divider" />
          </div>
          <div className="app__social-card-entry">
            <div className="app__social-card-entry-title">
              <h2>Karl Heinz</h2>
              <div /> <p>Bauzeichner</p>
            </div>
            <div className="app__social-card-entry-point">
              <div>
                {' '}
                <Phone />{' '}
                <a style={{color: 'white'}} href="tel:+49 1796686832">
                  +49 1796686832
                </a>
                <StyledTooltip
                  title={`${isCopied[2] ? 'Erfolgreich kopiert' : 'Kopieren'}`}
                  color={`${isCopied[2] ? 'green' : '#636363'}`}
                >
                  <IconButton
                    sx={{
                      position: 'absolute',
                      right: 3,
                      width: 20,
                      cursor: 'pointer',
                      color: 'white',
                    }}
                    onClick={() => {
                      handleCopyClick('+49 3796686832', 2)
                    }}
                  >
                    {isCopied[2] ? (
                      <CheckCircleOutlineIcon sx={{width: 20, color: 'white'}} />
                    ) : (
                      <ContentCopyIcon sx={{width: 20, color: 'white'}} />
                    )}
                  </IconButton>
                </StyledTooltip>
              </div>
              <div>
                {' '}
                <Mail />{' '}
                <a
                  style={{color: 'white'}}
                  href="mailto:info@affstaetterwohnbau.com?subject=Kundenanfrage&body=Dein%20Anliegen"
                >
                  info@affstaetterwohnbau.com
                </a>
                <StyledTooltip
                  title={`${isCopied[1] ? 'Erfolgreich kopiert' : 'Kopieren'}`}
                  color={`${isCopied[1] ? 'green' : '#636363'}`}
                >
                  <IconButton
                    sx={{
                      position: 'absolute',
                      right: 3,
                      width: 20,
                      cursor: 'pointer',
                      color: 'white',
                    }}
                    onClick={() => {
                      handleCopyClick('Bilal.yer@sidal.com', 1)
                    }}
                  >
                    {isCopied[1] ? (
                      <CheckCircleOutlineIcon sx={{width: 20, color: 'white'}} />
                    ) : (
                      <ContentCopyIcon sx={{width: 20, color: 'white'}} />
                    )}
                  </IconButton>
                </StyledTooltip>
              </div>
            </div>
          </div>
        </div>
        <div
          className="app__social-button"
          style={{backgroundColor: '#ff8000', borderColor: '#ff8000'}}
        >
          <RiContactsFill />
        </div>
      </div>
    </div>
  )
}
export default ContactPopOver
