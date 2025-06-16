import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/Mangalwar-Vrat.jpeg";
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
    image: img1,
    names: "Lord Hanuman Vrat | हनुमान व्रत | PDF",
    badge: "Vrat",
  },
  {
    image: img2,
    names: "Lord Hanuman Vrat Katha | हनुमान व्रत कथा | PDF",
    badge: "Vrat Katha",
  },
  {
    image: img3,
    names: "Shri BajrangBali Stuti | श्री बजरंगबली स्तुति | PDF",
    badge: "Stuti",
  },
  {
    image: img4,
    names: "Shri Hanuman 108 Names | श्री हनुमान 108 नाम | PDF",
    badge: "God/Goddess Names",
  },
  {
    image: img5,
    names: "Shri Hanuman Ji Aarti | श्री हनुमान जी आरती | PDF",
    badge: "Aarti",
  },
];

export default function Card() {
  return (
    <div>
      <div className="max-w-[1260px] h-auto m-auto my-5">
        <div className="flex justify-center items-center w-full">
          <ul className="flex justify-center items-center w-full gap-9 text-semibold">
            {navli.map((list, index) => (
              <li className="relative group text-lg">
                <a href="#" key={`nav1-${index}`}>
                  {list.name}
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-gray-400 text-sm pl-1"
                  />
                </a>

                {/* Dropdown Lists */}
                {list.submenu && (
                  <ul className="absolute top-full -left-6 mt-2 w-[280px] h-30 mb-6 bg-white rounded-md shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-y-2 transition-all duration-300 z-50 invisible group-hover:visible">
                    <li>
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
                    </li>
                  </ul>
                )}
              </li>
            ))}

            {navli2.map((list, index) => (
              <li className="text-lg">
                <a
                  href="#"
                  key={`nav2-${index}`}
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
      <div className="flex justify-center items-center w-full gap-5">
        {bgImage.map((images, index) => (
          <div
            key={`card-${index}`}
            className="w-[288px] h-[356px] border border-black-300 mb-8 rounded-2xl overflow-hidden relative group"
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
