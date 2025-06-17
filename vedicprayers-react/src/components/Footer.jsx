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
    <div className="h-auto w-full max-w-screen-xl px-4 m-auto border-t border-gray-400 flex flex-col items-center md:flex-row md:justify-between  py-7">
      
      {/* Copyright */}
      <p className="text-center md:text-left">© 2025 All rights reserved</p>

      {/* Social Icons */}
      <div className="flex gap-5 my-4 md:my-0">
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

      <div className="border border-gray-300 px-3 py-2 rounded-3xl hover:border-orange-600">
        <a href="#" className="flex items-center gap-2 hover:text-orange-600">
          <FontAwesomeIcon
            icon={faAngleUp}
            style={{ marginRight: "10px" }}
            className="text-gray-500"
          />
          Back to Top
        </a>
      </div>
    </div>
  );
};

export default Footer;
