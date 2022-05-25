import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
const About = () => {
  return(
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["A", "b", "o", 'u', 't', ' ', 'm', 'e']}
              ind={15}
            />
          </h1>
          <p>I've worn a couple of different hats in my life. From being a musician, to a pastry chef, and now to a full stack developer, my experience is wide and varied! </p>
          <p>Graduated from New York University's College of Arts and Sciences with a B.A. in Music, I've explored multiple ways of expressing my creativty!</p>
          <p></p>
        </div>
      </div>
      <div className="container about-content">
        <div>
          <h1>hiiiiiiiiii</h1>
          <h1>hiiiiiiiiii</h1>
          <h1>hiiiiiiiiii</h1>


        </div>
      </div>
    </>
  )
}
export default About
