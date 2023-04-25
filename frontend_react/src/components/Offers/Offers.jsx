import React from 'react';
import offer1 from '../../assets/build_house3.jpeg';
import offer2 from '../../assets/build_house4.jpeg';
import AppWrap from '../../wrapper/AppWrap';
import './Offers.scss';

const offerArray = [
  {key:0, img: offer1, title: "Oberndorf Variante 1", text:"700.000€ inkl. EW(240.000€)"},
  {key:1, img: offer2,title: "Oberndorf Variante 2", text:"600.000€" },
  {key:2, img: offer1, title: "Oberndorf Variante 3", text:"600.000€"},
  {key:3, img: offer2 , title: "Altensteig 1", text:"500.000€"},
  {key:4, img: offer2 , title: "Altensteig 2", text:"380.000€"},
  {key:5, img: offer2 , title: "Altensteig 3", text:"380.000€"},
]
function Offers() {
  return (
    <div>
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
        <div className="offer_text_wrapper" >
          <h2>
            {offer.title}
          </h2>
          <p>{offer.text}</p>
          <button>Mehr ansehen</button>
        </div>
        </div>
        )}
        </div>
    </div>
  )
}

export default AppWrap(Offers, 'Angebote')