import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/vedic-logo.png";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import "../app.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="left">
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <div className="center">
          <img src={logo} alt="Vedic Logo" height="80px" width="80px" />
          <a href="#">
            VedicPrayers<span>.</span>
          </a>
          <span className="slogan">Ancient Vedic Mantras and Rituals</span>
        </div>
        <div className="right">
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>

          <button>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  );
};
