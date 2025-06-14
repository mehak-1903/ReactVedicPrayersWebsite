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
    <div className="flex justify-between items-center h-auto w-[1260px] m-auto border-t border-grey-400 py-7">
      <p>© 2025 All rights reserved</p>
      <div className="flex gap-5">
        <a href="#" className="hover:text-orange-600">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#" className="hover:text-orange-600">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="hover:text-orange-600">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="hover:text-orange-600">
          <FontAwesomeIcon icon={faPinterest} />
        </a>
        <a href="#" className="hover:text-orange-600">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>

      <div className="border border-grey-400 px-3 py-2 rounded-3xl hover:border-orange-600">
        <a href="#" className="hover:text-orange-600">
          <FontAwesomeIcon
            icon={faAngleUp}
            style={{ marginRight: "10px" }}
            className="text-grey"
          />
          Back to Top
        </a>
      </div>
    </div>
  );
};

export default Footer;
