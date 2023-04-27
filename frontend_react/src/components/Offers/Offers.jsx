import CloseIcon from '@mui/icons-material/Close';
import CollectionsIcon from '@mui/icons-material/Collections';
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from 'react';
import G1_Altensteig from '../../assets/offer/1G_Altensteig.jpg';
import G2_Altensteig from '../../assets/offer/2G_Altensteig.jpg';
import G3_Altensteig from '../../assets/offer/3G_Altensteig.jpg';
import bild_Altensteig from '../../assets/offer/bild_Altensteig.jpg';
import bild_oberndorf_v1 from '../../assets/offer/bild_oberndorf_v1.jpg';
import bild_oberndorf_v2 from '../../assets/offer/bild_oberndorf_v2.jpg';
import bild_oberndorf_v3 from '../../assets/offer/bild_oberndorf_v3.jpg';
import dg_oberndorf_v1 from '../../assets/offer/dg_oberndorf_v1.jpg';
import dg_oberndorf_v2 from '../../assets/offer/dg_oberndorf_v2.jpg';
import dg_oberndorf_v3 from '../../assets/offer/dg_oberndorf_v3.jpg';
import eg_oberndorf_v1 from '../../assets/offer/eg_oberndorf_v1.jpg';
import eg_oberndorf_v2 from '../../assets/offer/eg_oberndorf_v2.jpg';
import eg_oberndorf_v3 from '../../assets/offer/eg_oberndorf_v3.jpg';
import og_oberndorf_v1 from '../../assets/offer/og_oberndorf_v1.jpg';
import og_oberndorf_v2 from '../../assets/offer/og_oberndorf_v2.jpg';
import og_oberndorf_v3 from '../../assets/offer/og_oberndorf_v3.jpg';
import AppWrap from '../../wrapper/AppWrap';
import MoreDialog from './MoreDialog';

import './Offers.scss';


const offerArray = [
  {key:0, img: bild_oberndorf_v1, moreImg:[eg_oberndorf_v1, dg_oberndorf_v1, og_oberndorf_v1], info:[{q:"Quadratmenter", a:"234qm"}, {q:"Zimmer", a:"3 Zimmer + Hobbykeller"}, {q:"Preis", a:"Preis auf Anfrage"} ],title: "Oberndorf Haus", text:"Version 1"},
  {key:1, img: bild_oberndorf_v2, moreImg:[eg_oberndorf_v2, dg_oberndorf_v2, og_oberndorf_v2], info:[{q:"Quadratmenter", a:"234qm"}, {q:"Zimmer", a:"3 Zimmer + Hobbykeller"}, {q:"Preis", a:"Preis auf Anfrage"} ],title: "Oberndorf Haus", text:"Version 2" },
  {key:2, img: bild_oberndorf_v3, moreImg:[eg_oberndorf_v3, dg_oberndorf_v3, og_oberndorf_v3], info:[{q:"Quadratmenter", a:"234qm"}, {q:"Zimmer", a:"3 Zimmer + Hobbykeller"}, {q:"Preis", a:"Preis auf Anfrage"} ],title: "Oberndorf Haus", text:"Version 3"},
  {key:3, img: bild_Altensteig , moreImg:[G1_Altensteig], info:[{q:"Quadratmenter", a:"234qm"}, {q:"Zimmer", a:"3 Zimmer + Hobbykeller"}, {q:"Preis", a:"Preis auf Anfrage"} ], title: "Altensteig Haus", text:"Wohnung im ersten Stock"},
  {key:4, img: bild_Altensteig , moreImg:[G2_Altensteig], info:[{q:"Quadratmenter", a:"234qm"}, {q:"Zimmer", a:"3 Zimmer + Hobbykeller"}, {q:"Preis", a:"Preis auf Anfrage"} ], title: "Altensteig 2", text:"Wohnung im zweiten Stock"},
  {key:5, img: bild_Altensteig , moreImg:[G3_Altensteig], info:[{q:"Quadratmenter", a:"234qm"}, {q:"Zimmer", a:"3 Zimmer + Hobbykeller"}, {q:"Preis", a:"Preis auf Anfrage"} ], title: "Altensteig 3", text:"Wohnung im dritten Stock"},
]
function Offers() {
  const [cardStates, setCardStates] = useState(Array(offerArray.length).fill(false));
  const [openGallery, setOpenGallery] = useState(false);

  const handleInfoButtonClick = (index) => {
    const newCardStates = [...cardStates];
    newCardStates[index] = !newCardStates[index];
    setCardStates(newCardStates);
  }

  const handleOpenGallery = (index) => {
    console.log(index, "sadsa")
    if(index){
      setOpenGallery(true)
    }
    else{
      setOpenGallery(false)
    }
  }
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <div>
      <div className="angebot_head">
        <p>Zahlreiche Projekte die sie interessieren könnten</p>
        <h2>Unsere Angebote!</h2>{console.log(
          "logs", openGallery
        )}
      </div>
      <div className="grid_container">
        {offerArray.map((offer, index) =>
          <div key={offer.key} className='grid_item' style={{marginTop: offer.key % 2 === 1 ? "30px" : "", marginBottom: offer.key % 2 === 0 ? "30px" : ""}}>
            <div className='offer_img_wrapper'>
              <img src={offer.img} alt="das bild des Angebots"/>
            </div>
            <div className="offer_text_wrapper" style={{
              height: cardStates[index] ? "100%" : "30%",
            }}>
              <h2>
                {offer.title}

                {cardStates[index] ?
                <IconButton
                aria-label="close"
                onClick={() => handleInfoButtonClick(index)}
                sx={{
                  position: "absolute",
                  right: 3,
                  top: 3,
                  color: "white",
                }}
                >
                <CloseIcon sx={{fontSize: 35  }}/>
            </IconButton>
                :null}
              </h2>
                <p>{offer.text}</p>
              {cardStates[index] ? 
              <motion.div variants={container}
              initial="hidden"
              animate="visible"
              className="info-wrapper">
              {offer.info.map(info => 
              <motion.div key={info.q} variants={item} className="info-line">
              <p className="info-answer">{info.a}</p>
              </motion.div>  
                )}
              </motion.div>
              :null}
              <div>
              <button onClick={cardStates[index] ? () =>  setOpenGallery(true) : () => handleInfoButtonClick(index)} className="text-btn" style={{color: cardStates[index] ? "#00AFFF" : "black"}}>
                {cardStates[index] ? <CollectionsIcon sx={{color:"#00AFFF"}}/> : null}
                {cardStates[index] ? "Zur Galerie" : "Mehr anzeigen"}
              </button>
              <MoreDialog open={openGallery} handleClose={() => setOpenGallery(false)} offerTitle="sadas" imgArray={offer.moreImg}/>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default AppWrap(Offers, 'Angebote')