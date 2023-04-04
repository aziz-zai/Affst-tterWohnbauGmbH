import React from 'react';
import offer1 from '../../assets/offer1.jpg';
import offer2 from '../../assets/offer2.jpg';
import AppWrap from '../../wrapper/AppWrap';
import './Offers.scss';

const offerArray = [
  {key:0, img: offer1, title: "Haus am See", text:"Ein Haus am See mit 3D Drucker"},
  {key:1, img: offer2,title: "Steckfeld", text:"Ein Haus mit Meerblick" },
  {key:2, img: offer1, title: "Holdergraben", text:"Ein Haus für den reichen Zinken"},
  {key:3, img: offer2 , title: "Gühlstein", text:"Hmmm, Naja..."},
]
function Offers() {
  return (
    <div className="grid_container">
      {offerArray.map(offer => 
      <div key={offer.key} className='grid_item' style={{marginTop: offer.key % 2 === 0 ? "35px" : "", marginBottom: offer.key % 2 === 1 ? "35px" : ""}}>
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
  )
}

export default AppWrap(Offers, 'Angebote')