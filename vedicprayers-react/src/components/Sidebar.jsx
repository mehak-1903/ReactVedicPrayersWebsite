import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Flag from "react-world-flags";

const navItems = [
  {
    name: "Shri Ganesh Ji",
    submenu: [
      "Shri Ganesh Visarjan",
      "Ganesh Chaturthi Vrat Katha",
      "Shri Ganesh Stotra",
      "Shri Ganesh Ji 108 Names",
      "Shri Ganesh Chalisa",
      "Shri Ganesh Ji Aarti",
    ],
  },
  {
    name: "Lord Shiva",
    submenu: [
      "Shiv Ji Tandav Stotra",
      "Shiv Ji Panchakshar Stotra",
      "Shiv Ji Aarti",
      "Shiv Ji Chalisa",
      "Lord Shiv Ji Vrat Katha",
      "Shiv Ji 108 Names",
    ],
  },
  {
    name: "Lord Hanuman",
    submenu: [
      "Shri Hanuman Chalisa",
      "Shri Hanuman Bajrang Baan",
      "Shri Hanuman Sathika",
      "Shri Hanuman Ashthak",
      "Shri Hanuman Bahuk",
      "Rinmochan Mangal Stotra",
      "Shri Hanuman Vrat Katha",
      "Shri Hanuman Mantras",
      "Shri Hanuman Ji Aarti",
      "Shri Hanuman Ji 108 Names",
    ],
  },
  {
    name: "9 Goddess",
    submenu: [
      "Maa Shailputri",
      "Maa Brahmacharini",
      "Maa Chandraghanta",
      "Maa Kushmanda",
      "Maa Skandmata",
      "Maa Katyayani",
      "Maa Kalratri",
      "Maa Mahagauri",
      "Maa Siddhidatri",
    ],
  },
];

const extraItems = ["Chalisa", "Aartis", "Kathayen", "Contact"];

export default function Sidebar() {
  return (
    <div className="w-full bg-gray-200 relative">
      <div className="absolute right-0 w-[300px] h-screen bg-white shadow-lg p-4 border border-black">
        {/* Close button */}
        <div className="absolute right-6 cursor-pointer text-gray-400">
          <FontAwesomeIcon icon={faXmark} className="text-2xl" />
        </div>

        {/* Logo */}
        <div className="absolute top-20 left-8 h-auto w-[80px] mt-8">
          <img
            src="https://vedicprayers.com/wp-content/uploads/2024/11/vedic-logo.png"
            alt="Vedic Logo"
          />
        </div>

        {/* Navigation */}
        <ul className="mt-60 w-[250px] h-auto space-y-2">
          {navItems.map((item, idx) => (
            <li key={idx} className="relative group">
              <div className="flex justify-between items-center py-2 cursor-pointer text-sm font-medium">
                {item.name}
                <div className="border border-gray-200 px-2 py-1 rounded">
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-orange-400 hover:transition-all duration-300 group-hover:rotate-180"
                  />
                </div>
              </div>
              <div className="border-b border-gray-200 w-20"></div>

              {/* Dropdown */}
              <ul className="h-auto ml-5 text-sm bg-white rounded-md shadow-md  hidden group-hover:transition-all z-50 duration-300 group-hover:block">
                {item.submenu.map((sub, i) => (
                  <li
                    key={i}
                    className="py-2"
                  >
                    <a href="#" className="hover:pl-7 hover:text-gray-400 transition-all duration-300">{sub}</a>
                    <div className="mt-2 border-b border-gray-200 w-20"></div>
                  </li>
                ))}
                
              </ul>
            </li>
          ))}
          {/* Extra links */}
          {extraItems.map((name, i) => (
            <li key={i} className="py-2 text-sm font-medium">
              <a href="#">{name}</a>
              <div className="mt-2 border-b border-gray-200 w-20"></div>
            </li>
          ))}

          {/* Language Switch */}
          <li className="py-2 relative group text-sm font-medium">
            <div className="flex items-center gap-2 cursor-pointer">
              <Flag code="IN" style={{ width: 20, height: 15 }} />
              हिंदी{" "}
              <div className="ml-auto border border-gray-200 rounded px-2 py-1">

              <FontAwesomeIcon
                icon={faAngleDown}
                className="text-orange-400 hover:transition-all duration-300 group-hover:rotate-180"
              />
              </div>
              </div>
            {/* </div> */}

            {/* Dropdown */}
            <ul className="ml-4 text-sm bg-white rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 transition-opacity duration-300 group-hover:visible">
              <li className="text-black hover:pl-7 hover:text-gray-300 transition-all duration-300">
                <a
                  href="#"
                  className="flex items-center gap-1 pl-5 text-left py-3"
                >
                  <Flag code="US" style={{ width: 20, height: 15 }} />
                  English
                </a>
              </li>
              <div className="mt-2 border-b border-gray-200 w-20"></div>
              <div className="w-1/4 h-px bg-gray-200"></div>
              <li className="text-black hover:pl-7 hover:text-gray-300 transition-all duration-300">
                <a
                  href="#"
                  className="flex items-center gap-1 pl-5 text-left py-3"
                >
                  <Flag code="IN" style={{ width: 20, height: 15 }} />
                  हिंदी
                </a>
              </li>
            </ul>
          </li>
        </ul>

        {/* Footer Icons */}
        <div className="absolute bottom-4 left-8 h-auto flex gap-4">
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
      </div>
    </div>
  );
}
