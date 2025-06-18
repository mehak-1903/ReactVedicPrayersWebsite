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

const Header = () => {
  return (
    <div className="flex justify-between items-center flex-col md:flex-row h-auto w-full max-w-screen-xl m-auto border-b border-grey-400 py-[30px] px-[12px]">
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

      <div className="flex flex-col items-center text-center mb-4">
        <img src={logo} alt="Vedic Logo" height="80px" width="80px"/>
        <a href="#" className="text-4xl font-bold">
          VedicPrayers<span className="text-orange-600 text-6xl">.</span>
        </a>
        <span>Ancient Vedic Mantras and Rituals</span>
      </div>

      <div className=" flex gap-3 ">
        <button className="h-[30] w-[30] rounded-full border-none bg-[linear-gradient(to_right,#e45229_0%,#e99176_51%,#e45229_100%)] py-2 px-3 text-white">
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <button className="h-[30] w-[30] rounded-full border-none bg-[linear-gradient(to_right,#e45229_0%,#e99176_51%,#e45229_100%)] py-2 px-3 text-white">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  );
};

export default Header;