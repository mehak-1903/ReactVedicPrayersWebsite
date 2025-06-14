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
    // <div className="header">
    //   <div className="header-container">
    //     <div className="left">
    //       <a href="#">
    //         <FontAwesomeIcon icon={faFacebookF} />
    //       </a>
    //       <a href="#">
    //         <FontAwesomeIcon icon={faTwitter} />
    //       </a>
    //       <a href="#">
    //         <FontAwesomeIcon icon={faInstagram} />
    //       </a>
    //       <a href="#">
    //         <FontAwesomeIcon icon={faPinterest} />
    //       </a>
    //       <a href="#">
    //         <FontAwesomeIcon icon={faYoutube} />
    //       </a>
    //     </div>
    //     <div className="center">
    //       <img src={logo} alt="Vedic Logo" height="80px" width="80px" />
    //       <a href="#">
    //         VedicPrayers<span>.</span>
    //       </a>
    //       <span>Ancient Vedic Mantras and Rituals</span>
    //     </div>
    //     <div className="right">
    //       <button>
    //         <FontAwesomeIcon icon={faSearch} />
    //       </button>

    //       <button>
    //         <FontAwesomeIcon icon={faBars} />
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="flex justify-between items-center h-auto w-[1260px] m-auto border-b border-grey-400 py-7">
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
        <button className="h-[30] w-[30] rounded-full border-none bg-orange-600 py-2 px-3 text-white">
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <button className="h-[30] w-[30] rounded-full border-none bg-orange-600 py-2 px-3 text-white">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  );
};
