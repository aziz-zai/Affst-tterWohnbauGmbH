import Popover from '@mui/material/Popover';
import * as React from 'react';
import { RiContactsFill } from 'react-icons/ri';

function ContactPopOver(){
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const btnColor = open?"#89C2FA" :"#FAC189";
  return(
    <div className="app__social">
      <div onClick={handleClick} style={{ backgroundColor:`${btnColor}`, borderColor:`${btnColor}`}} >
        <RiContactsFill aria-describedby={id} />
      </div>
      <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          style={{
            transform: "translate(-4px, 10px)",
          }}
        >
          <div className="app__contact_popover">
            <h5>Kontaktinformation</h5>

          </div>
        </Popover>
    </div>
  );
}
export default ContactPopOver;
