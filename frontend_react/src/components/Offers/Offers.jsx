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
  {key:0, img: bild_oberndorf_v1, moreImg:[eg_oberndorf_v1, dg_oberndorf_v1, og_oberndorf_v1] ,title: "Oberndorf Variante 1", text:"700.000€ inkl. EW(240.000€)"},
  {key:1, img: bild_oberndorf_v2, moreImg:[eg_oberndorf_v2, dg_oberndorf_v2, og_oberndorf_v2], title: "Oberndorf Variante 2", text:"600.000€" },
  {key:2, img: bild_oberndorf_v3, moreImg:[eg_oberndorf_v3, dg_oberndorf_v3, og_oberndorf_v3],title: "Oberndorf Variante 3", text:"600.000€"},
  {key:3, img: bild_Altensteig , moreImg:[G1_Altensteig], title: "Altensteig 1", text:"500.000€"},
  {key:4, img: bild_Altensteig , moreImg:[G2_Altensteig], title: "Altensteig 2", text:"380.000€"},
  {key:5, img: bild_Altensteig , moreImg:[G3_Altensteig], title: "Altensteig 3", text:"380.000€"},
]
function Offers() {
  const [infoBtnClicked, setInfoBtnClicked] = useState(0)
  const [open, setOpen] = useState(false)

  return (
    <div>
      {console.log("info", infoBtnClicked)}
      <div className="angebot_head">
        <p>Zahlreiche Projekte die sie interessieren könnten</p>
        <h2>Unsere Angebote!</h2>
      </div>
    <div className="grid_container">
      {offerArray.map(offer =>
      <div key={offer.key} className='grid_item' style={{marginTop: offer.key % 2 === 1 ? "30px" : "", marginBottom: offer.key % 2 === 0 ? "30px" : ""}}>
        <div className='offer_img_wrapper'>
          <img src={offer.img} alt="das bild des Angebots"/>
          </div>
        <div className="offer_text_wrapper" style={{
        height: infoBtnClicked ? "100%" :"auto",
        transition: "all 1s ease-in-out"}}>
          <h2>
            {offer.title}
          </h2>
          <p>{offer.text}</p>
          <button onClick={() => setOpen(!open)}>{
            infoBtnClicked ? "Mehr anzeigen" :"Weniger anzeigen"}</button>
            <MoreDialog open={open} handleClose={() => setOpen(!open)} offerTitle={offer.title}/>
          </div>
        </div>
        )}
        </div>
    </div>
  )
}

export default AppWrap(Offers, 'Angebote')