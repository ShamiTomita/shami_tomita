import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'

import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [" ", "S", 'h', 'a', 'm', 'i']

  useEffect(() => {
    setTimeout(() =>  {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
          </h1>
          <h2>Full Stack Developer 🧑‍💻 / Pastry Chef 🍰 / Cat Parent 🐈‍⬛</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="container cakes">
          <img src="/Users/shamitomita/Projects/shami_tomita/public/cakes.jpg" alt="cakes"/>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
