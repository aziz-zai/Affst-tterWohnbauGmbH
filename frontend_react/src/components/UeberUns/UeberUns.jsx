import React from 'react'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import map from '../../assets/maps.jpg'
import AppWrap from '../../wrapper/AppWrap'
import './UeberUns.scss'

function UeberUns() {
  return (
      <div className="uberuns_container">
      <div className="uberuns_title">Über uns!</div>
    <div className="uberuns_section">
      <div className="map"><img src={map} alt="Standort Map"/></div>
      <div className="uberuns_right_side">
        <div>
          <img src={avatar1} alt="Bild von Bilal"/>
          <h3>Bilal Yer</h3>
          <p>CEO & Founder</p>
        </div>
        <div>
          <img src={avatar2} alt="Bild von Karl"/>
          <h3>Karl Heinz</h3>
          <p>Architekt & Visionär</p>
        </div>
      </div>
      <div className="uberuns_text">
        <h2>Wer sind wir?</h2>
        <p>
        Durch eine Vielzahl an Erfahrungen mit Bauherren über die Jahre hinweg, kam der Wunsch auf, das eigene Wissen und die langjährige Erfahrung im Baugewerbe in eine eigene Firma zu verwandeln.
So wurde im Jahr 2000 bereits der Grundstein für die "Affstätter Wohnbau GmbH" gelegt. 
Die bereits vorhandene Zusammenarbeit mit lokalen und überregionalen Maklern und Banken ermöglicht uns die Suche nach Grundstücken jeglicher Art und Größe vom Start weg für unsere Kunden zu erleichtern.
Die einzelnen Bauabschnitte begleiten wir mit Ihnen gemeinsam im ständigen Dialog, sowohl auf der Baustelle als auch aus der Ferne.
Herzlich willkommen in Ihrem Zuhause!
        </p>
      </div>
    </div>
      </div>
  )
}

export default AppWrap(UeberUns, 'UeberUns')