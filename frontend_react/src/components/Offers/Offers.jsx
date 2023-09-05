import {Start} from '@mui/icons-material'
import CollectionsIcon from '@mui/icons-material/Collections'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HomeIcon from '@mui/icons-material/Home'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import {IconButton} from '@mui/material'
import {motion, useAnimation} from 'framer-motion'
import React, {useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer'
import G1_Altensteig from '../../assets/offer/1G_Altensteig.jpg'
import G2_Altensteig from '../../assets/offer/2G_Altensteig.jpg'
import G3_Altensteig from '../../assets/offer/3G_Altensteig.jpg'
import bild_Altensteig from '../../assets/offer/bild_Altensteig.jpg'
import bild_oberndorf_v1 from '../../assets/offer/bild_oberndorf_v1.jpg'
import bild_oberndorf_v2 from '../../assets/offer/bild_oberndorf_v2.jpg'
import bild_oberndorf_v3 from '../../assets/offer/bild_oberndorf_v3.jpg'
import dg_oberndorf_v1 from '../../assets/offer/dg_oberndorf_v1.jpg'
import dg_oberndorf_v2 from '../../assets/offer/dg_oberndorf_v2.jpg'
import dg_oberndorf_v3 from '../../assets/offer/dg_oberndorf_v3.jpg'
import eg_oberndorf_v1 from '../../assets/offer/eg_oberndorf_v1.jpg'
import eg_oberndorf_v2 from '../../assets/offer/eg_oberndorf_v2.jpg'
import eg_oberndorf_v3 from '../../assets/offer/eg_oberndorf_v3.jpg'
import og_oberndorf_v1 from '../../assets/offer/og_oberndorf_v1.jpg'
import og_oberndorf_v2 from '../../assets/offer/og_oberndorf_v2.jpg'
import og_oberndorf_v3 from '../../assets/offer/og_oberndorf_v3.jpg'
import AppWrap from '../../wrapper/AppWrap'
import MoreDialog from './MoreDialog'
import './Offers.scss'

const offerArray = [
  {
    key: 0,
    img: bild_oberndorf_v1,
    moreImg: [eg_oberndorf_v1, dg_oberndorf_v1, og_oberndorf_v1],
    info: [
      {q: 'Quadratmenter', a: '197m²'},
      {q: 'Zimmer', a: '7 Zimmer + Balkon + Terasse'},
      {q: 'Garage', a: 'Keller + Garage'},
      {q: 'Preis', a: 'Preis auf Anfrage'},
    ],
    title: 'Oberndorf Haus',
    text: 'Variante 1',
  },
  {
    key: 1,
    img: bild_oberndorf_v2,
    moreImg: [eg_oberndorf_v2, dg_oberndorf_v2, og_oberndorf_v2],
    info: [
      {q: 'Stichpunkt', a: 'Einliegerwohnung'},
      {q: 'qm', a: '76m²'},
      {q: 'Zimmer', a: '2 Zimmer + Terrasse'},
      {q: 'Stichpunkt', a: 'Maisonette'},
      {q: 'qm', a: '144m²'},
      {q: 'Zimmer', a: '6 Zimmer + Balkon'},
    ],
    title: 'Oberndorf Haus',
    text: 'Variante 2 mit Einliegerwohnung',
  },
  {
    key: 2,
    img: bild_oberndorf_v3,
    moreImg: [eg_oberndorf_v3, dg_oberndorf_v3, og_oberndorf_v3],
    info: [
      {q: 'Quadratmenter', a: '132m²'},
      {q: 'Zimmer', a: '5 Zimmer + Balkon'},
      {q: 'Garage', a: 'Keller + Garage'},
      {q: 'Preis', a: 'Preis auf Anfrage'},
    ],
    title: 'Oberndorf Haus',
    text: 'Variante 3',
  },
  {
    key: 3,
    img: bild_Altensteig,
    moreImg: [G1_Altensteig],
    info: [
      {q: 'Quadratmenter', a: '108m²'},
      {q: 'Zimmer', a: '3 Zimmer + Abstellraum + Terrasse'},
      {q: 'Garage', a: 'Keller + Garage'},
      {q: 'Preis', a: 'Preis auf Anfrage'},
    ],
    title: 'Altensteig Mehrfamilienhaus',
    text: 'Wohnung im ersten Stock',
  },
  {
    key: 4,
    img: bild_Altensteig,
    moreImg: [G2_Altensteig],
    info: [
      {q: 'Quadratmenter', a: '127m²'},
      {q: 'Zimmer', a: '4 Zimmer + Speisekammer + 2 Balkon'},
      {q: 'Garage', a: 'Keller + Garage'},
      {q: 'Preis', a: 'Preis auf Anfrage'},
    ],
    title: 'Altensteig Mehrfamilienhaus',
    text: 'Wohnung im zweiten Stock',
  },
  {
    key: 5,
    img: bild_Altensteig,
    moreImg: [G3_Altensteig],
    info: [
      {q: 'Quadratmenter', a: '124m²'},
      {q: 'Zimmer', a: '4 Zimmer + Speisekammer + 2 Balkone'},
      {q: 'Garage', a: 'Keller + Garage'},
      {q: 'Preis', a: 'Preis auf Anfrage'},
    ],
    title: 'Altensteig Mehrfamilienhaus',
    text: 'Wohnung im dritten Stock',
  },
]
function Offers() {
  const [cardStates, setCardStates] = useState(Array(offerArray.length).fill(false))
  const [cardStatesGallery, setCardGallery] = useState(Array(offerArray.length).fill(false))

  const {ref, inView} = useInView({threshold: 0.2})
  const handleInfoButtonClick = (index) => {
    const newCardStates = [...cardStates]
    newCardStates[index] = !newCardStates[index]
    setCardStates(newCardStates)
  }

  const handleOpenGallery = (index) => {
    const newCardStatesGallery = [...cardStatesGallery]
    newCardStatesGallery[index] = !newCardStatesGallery[index]
    setCardGallery(newCardStatesGallery)
  }
  const container = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  }
  const item = {
    hidden: {y: 20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const animation = useAnimation()
  return (
    <div ref={ref}>
      <div className="angebot_head">
        <p>Zahlreiche Projekte die sie interessieren könnten</p>
        <h2>Unsere Angebote!</h2>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid_container"
      >
        {offerArray.map((offer, index) => (
          <motion.div
            variants={item}
            key={offer.key}
            className="grid_item"
            style={{
              marginTop: offer.key % 2 === 1 ? '30px' : '',
              marginBottom: offer.key % 2 === 0 ? '30px' : '',
            }}
          >
            <div className="offer_img_wrapper">
              <img src={offer.img} alt="das bild des Angebots" />
            </div>
            <div
              className="offer_text_wrapper"
              style={{
                height: cardStates[index] ? '100%' : '44%',
              }}
            >
              <h2>
                {offer.title}

                {cardStates[index] ? (
                  <IconButton
                    aria-label="close"
                    onClick={() => handleInfoButtonClick(index)}
                    sx={{
                      position: 'absolute',
                      right: 3,
                      top: 3,
                      color: 'white',
                    }}
                  >
                    <ExpandMoreIcon sx={{fontSize: 35}} />
                  </IconButton>
                ) : null}
              </h2>
              <div className="offer-mini-text">
                <HomeIcon />
                <p>{offer.text}</p>
              </div>
              {cardStates[index] ? (
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  className="info-wrapper"
                >
                  {offer.info.map((info) => (
                    <motion.div key={info.q} variants={item} className="info-line">
                      {info.q.startsWith('Stichpunkt') ? null : <KeyboardArrowRightIcon />}
                      <p className="info-answer">{info.a}</p>
                    </motion.div>
                  ))}
                </motion.div>
              ) : null}
              <div>
                <button
                  onClick={
                    cardStates[index]
                      ? () => handleOpenGallery(index)
                      : () => handleInfoButtonClick(index)
                  }
                  className="text-btn"
                  style={{color: cardStates[index] ? '#00AFFF' : 'black'}}
                >
                  {cardStates[index] ? (
                    <CollectionsIcon sx={{color: '#00AFFF'}} />
                  ) : (
                    <ExpandLessIcon />
                  )}
                  {cardStates[index] ? 'Zur Galerie' : 'Mehr anzeigen'}
                </button>
                <MoreDialog
                  open={cardStatesGallery[index]}
                  handleClose={() => handleOpenGallery(index)}
                  offerTitle={offer.title}
                  imgArray={offer.moreImg}
                  offerText={offer.text}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
export default AppWrap(Offers, 'Angebote')
