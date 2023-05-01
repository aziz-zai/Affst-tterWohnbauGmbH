import Popover from '@mui/material/Popover';
import * as React from 'react';
import { RiContactsFill } from 'react-icons/ri';

// see https://iconsvg.xyz/
const Share = ({ size = 16, color = "currentColor" }) => (
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
    style={{ verticalAlign: "bottom" }}
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);
const MapMarker2 = ({ size = 16, color = "currentColor" }) => (
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
    style={{ verticalAlign: "bottom" }}
  >
    <circle cx="12" cy="10" r="3" />
    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
  </svg>
);
const Phone = ({ size = 16, color = "currentColor" }) => (
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
    style={{ verticalAlign: "bottom" }}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const Mail = ({ size = 16, color = "currentColor", ...props }) => (
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
    style={{ verticalAlign: "bottom" }}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const Star = ({ size = 16, color = "currentColor" }) => (
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
    style={{ verticalAlign: "bottom" }}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
function BusinessCard({
  people,
  headerColor = "#fff",
  headerBg = "#4285F4",
  headerStyle = {},
  shadow = true,
  style = {},
  ...props
}) {
  return (
    <div
      className="card-business"
      style={{
        background: "#fff",
        width: "90mm",
        height: "50mm",
        borderRadius: "5px",
        boxShadow: shadow !== false ? "#9E9E9E 0px 0px 10px" : "",
        ...style
      }}
      {...props}
    >
      <div
        style={{
          background: headerBg,
          height: "12mm",
          padding: 10,
          paddingTop: 15,
          paddingLeft: 20,
          position: "relative",
          borderTopRightRadius: "5px",
          borderTopLeftRadius: "5px",
          ...headerStyle
        }}
      >
        <img
          width={"60mm"}
          height={"60mm"}
          alt="avatar"
          style={{
            position: "absolute",
            right: 15,
            top: 5,
            borderRadius: "100%",
            float: "right",
            background: "#fff"
          }}
          src={people.avatar}
        />
        {/*https://pbs.twimg.com/profile_images/1215572708336865280/_8lVTX2z_400x400.jpg*/}
        <h1
          style={{
            fontSize: "17pt",
            margin: 0,
            marginRight: -50,
            color: headerColor
          }}
        >
          {people.displayName}
        </h1>
        {people.tagline && (
          <p
            style={{
              margin: 0,
              fontSize: "10pt",
              marginRight: -50,
              color: "#ccc"
            }}
          >
            <span>{people.tagline}</span>
          </p>
        )}
      </div>
      <div style={{ padding: 10, paddingLeft: 20, position: "relative" }}>
        <img
          alt="qr-code"
          style={{
            position: "absolute",
            right: 15,
            top: 10,
            float: "right"
          }}
          src="/qr.png"
        />
        <ul
          style={{
            fontSize: "10pt",
            listStyle: "none",
            lineHeight: "15pt",
            margin: 0,
            padding: 0
          }}
        >
          {people.title && (
            <li>
              <Star /> {people.title}
            </li>
          )}
          {people.phone && (
            <li>
              <Phone /> {people.phone}
            </li>
          )}
          {people.mail && (
            <li>
              <Mail /> {people.mail}
            </li>
          )}
          {people.location && (
            <li>
              <MapMarker2 /> {people.location}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}


function ContactPopOver(){
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const list = [
    {
      avatar: "/avatar.png",
      qr: "/qr.png",
      displayName: "Bilal Yer",
      tagline: "Entrepreneur",
      title: "CEO Affsträtter Wohnbau GmbH",
      phone: "+49 1796686832",
      mail: "vansemmelbergthorsten@gmail.com",
      location: "Torgauerweg, Herrenberg 71083",
    }]
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
      </div>{console.log(anchorEl)}
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
          <div>
          <ul style={{ listStyle: "none" }}>
        {list.map(it => (
          <li style={{ margin: 30 }}>
            <BusinessCard people={it} />
          </li>
        ))}
      </ul>

          </div>
        </Popover>
    </div>
  );
}
export default ContactPopOver;
