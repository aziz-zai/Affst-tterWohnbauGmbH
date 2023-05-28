import { motion } from "framer-motion"
import React from "react"
import { Link } from 'react-scroll'
import house from '../../assets/build_house1.jpeg'
import house1 from '../../assets/build_house2.jpeg'
import house2 from '../../assets/build_house3.jpeg'
import house3 from '../../assets/build_house4.jpeg'
import AppWrap from '../../wrapper/AppWrap'
import './Home.scss'
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
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

const textVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
const Home = () => {
  return (
    <div className="app__hero-section">
        <div className="app__hero-text"

       >
        <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible">

          <h5>WER SIND WIR?</h5>
          <h2>Der Schlüssel für Ihr Zuhause!</h2>
          <p>
          Von der <b style={{color:"#EF7D0A"}}>Beratung</b>, über die <b style={{color:"#EF7D0A"}}>Planung</b> bis zur <b style={{color:"#EF7D0A"}}>Ausführung</b> - alles aus einer Hand. Über den Bau von hochwertigen Mehrfamilienhäusern,
          Doppel-, Reihen- und Einfamilienhäusern hinaus haben wir bereits mehrere Wohn- und Geschäftsgebäude errichtet.
          <b > Wir freuen uns schon, Sie von unseren Qualitäten und Vorzügen begeistern zu dürfen!</b>
          </p>
          <div>
            <Link to="Projekte">
          <button>Mehr erfahren!</button>
            </Link>
        </div>
        </motion.div> 
      </div>
        <motion.div className="app__hero-house"
            variants={container}
            initial="hidden"
            animate="visible"
            >
          {
            [house, house1, house2, house3].map(imgName =>
              <motion.img key={imgName} src={imgName} alt="house" variants={item}/>
              )
          }
        </motion.div>
      </div>
  )
}

export default AppWrap(Home, 'Home', 'home')
