import './index.scss';
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope, faFolder} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import LogoSubtitle from '../../assets/images/logo_sub.png'
const Sidebar = () => (
  <div className="nav-bar">


    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="##D4D4D4"/>
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#D4D4D4"/>
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
        <FontAwesomeIcon icon={faFolder} color="#D4D4D4"/>
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#D4D4D4"/>
      </NavLink>

    </nav>

    <ul>
      <li>
        <a
        href="https://www.linkedin.com/in/shami-tomita-rodrgiuez/"
        target="_blank"
        rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#D4D4D4" />
        </a>
      </li>
      <li>
        <a
         href="https://github.com/ShamiTomita"
         target="_blank"
         rel="noreferrer"
         >
          <FontAwesomeIcon icon={faGithub} color="#D4D4D4" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar;
