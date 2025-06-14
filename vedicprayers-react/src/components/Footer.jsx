import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    
      <div className="footer">
        <div className="left">© 2025 All rights reserved</div>
        <div className="center">
          <a href="#">
            <FontAwesomeIcon
              icon={faFacebookF}
            /></a>
            <a href = "#"><FontAwesomeIcon
              icon={faTwitter}
            /></a>
            <a href = "#"><FontAwesomeIcon
              icon={faInstagram}
            /></a>
            <a href = "#"><FontAwesomeIcon
              icon={faPinterest}
            /></a>
            <a href = "#"><FontAwesomeIcon
              icon={faYoutube}
            />
          </a>

        </div>
        <div className="right">
          <a href = "#">
            <FontAwesomeIcon icon = {faAngleUp} style={{marginRight: '10px'}}/>
          Back to Top</a></div>
      </div>
    
    
  );
};

export default Footer;
