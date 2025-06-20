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
import { useState } from "react";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";

const Header = () => {
  const [search, setSearch] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function searchBar(){
      return setSearch(!search)
  }

  function handleSidebarOpen(){
      setSidebarOpen(true)
    }
  

  return (
    <>
    {/* 🔍 Searchbar Overlay */}
      {search && <Searchbar onClose={searchBar} />}

      {/* Sidebar Overlay */}
      {sidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)}/>}
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
        <button onClick = {searchBar} className="py-3 px-4 text-white rounded-full border-none bg-[linear-gradient(to_top,#e45229_0%,#e99176_51%,#e45229_100%)] bg-[length:200%_200%] bg-[top_center] hover:bg-[bottom_center] transition-all duration-300">
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <button onClick={handleSidebarOpen} className="py- px-4 text-white rounded-full border-none bg-[linear-gradient(to_top,#e45229_0%,#e99176_51%,#e45229_100%)] bg-[length:200%_200%] bg-[top_center] hover:bg-[bottom_center] transition-all duration-300 ">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      
    </div>
    </>
  );
};

export default Header;