import React from 'react'
import avatar1 from '../../assets/avatar_placeholder.png'
import map from '../../assets/maps.jpg'
import AppWrap from '../../wrapper/AppWrap'
import './UeberUns.scss'

function UeberUns() {
  return (
    <div className="uberuns_container">
      <div className="uberuns_title">Über uns</div>
      <div className="uberuns_section">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.7872812580003!2d8.768949792061964!3d48.575622846559156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47975a5aab7303bf%3A0xa0b99630998b2bd5!2sNagolder%20Str.%204%2C%2071131%20Jettingen!5e0!3m2!1sde!2sde!4v1693858074887!5m2!1sde!2sde"
            width="100%"
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="uberuns_right_side">
          <div>
            <img src={avatar1} alt="Bild von Bilal" />
            <h3>Bilal Yer</h3>
            <p>Geschäftsführer</p>
          </div>
          <div>
            <img src={avatar1} alt="Bild von Karl" />
            <h3>Karl Heinz</h3>
            <p>Bauzeichner</p>
          </div>
        </div>
        <div className="uberuns_text">
          <h2>Wer sind wir?</h2>
          <p>
            Durch eine Vielzahl an Erfahrungen mit Bauherren über die Jahre hinweg, kam der Wunsch
            auf, das eigene Wissen und die langjährige Erfahrung im Baugewerbe in eine eigene Firma
            zu verwandeln. So wurde im Jahr 2000 bereits der Grundstein für die "Affstätter Wohnbau
            GmbH" gelegt. Die bereits vorhandene Zusammenarbeit mit lokalen und überregionalen
            Maklern und Banken ermöglicht uns die Suche nach Grundstücken jeglicher Art und Größe
            vom Start weg für unsere Kunden zu erleichtern. Die einzelnen Bauabschnitte begleiten
            wir mit Ihnen gemeinsam im ständigen Dialog, sowohl auf der Baustelle als auch aus der
            Ferne. Herzlich willkommen in Ihrem Zuhause!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AppWrap(UeberUns, 'Überuns')
