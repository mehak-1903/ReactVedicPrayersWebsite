import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import img1 from "../assets/Mangalwar-Vrat.jpeg";
import img2 from "../assets/Shri-Hanuman-Vrat-Katha.jpeg";
import img3 from "../assets/hanuman-stuti.jpg";
import img4 from "../assets/Shri-Hanuman-Mantras.jpeg";
import img5 from "../assets/hanuman-aarti.jpeg";
import Flag from "react-world-flags";
const navli = [
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

const navli2 = [
  {
    navname: "Chalisa",
  },
  {
    navname: "Aartis",
  },
  {
    navname: "Kathayen",
  },
  {
    navname: "Contact",
  },
];

const bgImage = [
  {
    image: "https://vedicprayers.com/wp-content/uploads/2023/10/Mangalwar-Upay-550x367.jpeg",
    names: "Mangalwar Vrat | मंगलवार व्रत रखने से दूर होंगे संकट, जानिए पूजा की सही विधि | PDF",
    badge: "Lord Hanuman",
  },
  {
    image: "https://vedicprayers.com/wp-content/uploads/2024/10/Shri-Hanuman-Vrat-Katha-%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80-%E0%A4%B9%E0%A4%A8%E0%A5%81%E0%A4%AE%E0%A4%BE%E0%A4%A8-%E0%A4%B5%E0%A5%8D%E0%A4%B0%E0%A4%A4-%E0%A4%95%E0%A4%A5%E0%A4%BE.jpeg",
    names: "Lord Hanuman Vrat Katha | हनुमान व्रत कथा | PDF",
    badge: "Vrat Katha",
  },
  {
    image: "https://vedicprayers.com/wp-content/uploads/2024/12/hanuman-stuti.jpg",
    names: "Shri BajrangBali Stuti | श्री बजरंगबली स्तुति | PDF",
    badge: "Stuti",
  },
  {
    image: "https://vedicprayers.com/wp-content/uploads/2023/09/Shri-Hanuman-Mantras.jpeg",
    names: "Shri Hanuman Mantras | श्री हनुमान मंत्र | PDF",
    badge: "God/Goddess Names",
  },
  {
    image: "https://vedicprayers.com/wp-content/uploads/2024/06/hanuman-chalisa-360x360.jpeg",
    names: "Shri Hanuman Chalisa | श्री हनुमान चालीसा | PDF",
    badge: "Aarti"
  },
];

export default function Card() {
  return (
    <div>
      <div className="hidden md:block w-full max-w-screen-xl h-auto m-auto my-5">
        <div className="flex justify-center items-center w-full flex-col md:flex-row">
          <ul className="flex flex-col md:flex-row justify-center items-center w-full gap-9 text-semibold">
            {navli.map((list, index) => (
              <li  key={`nav1-${index}`} className="relative group text-lg">
                <a href="#">
                  {list.name}
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-gray-400 text-sm pl-1"
                  />
                </a>

                {/* Dropdown Lists */}
                {list.submenu && (
                  <ul className="absolute top-full -left-6 mt-2 w-[280px] mb-6 bg-white rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-y-2 transition-all duration-300 z-50 invisible group-hover:visible">
                    
                      {list.submenu.map((item, subIndex) => (
                        <li key={`sub-${index}-${subIndex}`} className="text-black hover:pl-7 hover:text-gray-400 transition-all duration-300">
                          <a
                            href="#"
                            className="flex items-center gap-1 pl-5 text-left py-3"
                          >
                            {item}
                          </a>
                          <div className="border-b border-gray-200 w-20"></div>
                        </li>
                      ))}
                    
                  </ul>
                )}
              </li>
            ))}

            {navli2.map((list, index) => (
              <li key={`nav2-${index}`} className="text-lg">
                <a
                  href="#"
                  
                  className="flex items-center gap-1 pl-5 text-left py-3"
                >
                  {list.navname}
                </a>
              </li>
            ))}

            <li className="relative group">
              <a
                href="#"
                className="text-lg flex justify-center items-center gap-1"
              >
                <Flag code="IN" style={{ width: 20, height: 15 }} />
                हिंदी
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="text-gray-400 text-sm"
                />
              </a>

              {/* Dropdown Menu */}
              <ul className="absolute top-full left-0 mt-2 w-40 h-30 mb-3  bg-white rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-y-2 transition-all duration-300 z-50 invisible group-hover:visible">
                <li className="text-black hover:pl-7 hover:text-gray-300 transition-all duration-300">
                  <a
                    href="#"
                    className="flex items-center gap-1 pl-5 text-left py-3"
                  >
                    <Flag code="US" style={{ width: 20, height: 15 }} />
                    English
                  </a>
                </li>
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
        </div>
      </div>
      <div className="flex justify-center items-center px-4 w-full gap-4 flex-col md:flex-row">
        {bgImage.map((images, index) => (
          <div
            key={`card-${index}`}
            className="w-full md:max-w-[288px] h-[356px] border border-black-300 mb-8 rounded-2xl overflow-hidden cursor-pointer relative group"
          >
            {/* Background Image Layer with Hover Scale */}
          
            <div
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105"
              style={{
                backgroundImage: `url(${images.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>

            {/* Overlay Layer (non-scaling)*/}
            <div className="absolute inset-0 opacity-80 bg-[#17243b] rounded-2xl z-10">
              <div className="absolute top-10 z-20 flex flex-col items-center justify-center h-full px-6 mt-4">
                <span className="px-3 py-1 w-auto rounded-2xl text-white mb-2 bg-[linear-gradient(to_right,#e45229_0%,#e99176_51%,#e45229_100%)]">
                  <a href="#">{images.badge}</a>
                </span>
                <h4 className="text-center" key={`name-${index}`}>
                  <a
                    href="#"
                    className="text-[22px] text-white font-bold leading-snug hover:text-orange-600"
                  >
                    {images.names}
                  </a>
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
