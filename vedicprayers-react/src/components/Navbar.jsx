import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Flag from 'react-world-flags'

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
    navname: "Shri Bhagavad Gita",
  },
  {
    navname: "Contact",
  },
];


function Navbar() {
  return (
    <div>
        <div className="hidden md:block w-full max-w-screen-xl h-auto m-auto">
        <div className="flex justify-center items-center w-full flex-col md:flex-row">
          <ul className="flex flex-col md:flex-row justify-center items-center w-full gap-7 text-semibold">
            {navli.map((list, index) => (
              <li key={`nav1-${index}`} className="relative group text-lg">
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
                      <li
                        key={`sub-${index}-${subIndex}`}
                        className="text-black hover:pl-7 hover:text-[#e45229] transition-all duration-300"
                      >
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
                <li className="text-black hover:pl-7 hover:text-[#e45229] transition-all duration-300">
                  <a
                    href="#"
                    className="flex items-center gap-1 pl-5 text-left py-3"
                  >
                    <Flag code="US" style={{ width: 20, height: 15 }} />
                    English
                  </a>
                </li>
                <div className="w-1/4 h-px bg-gray-200"></div>
                <li className="text-black hover:pl-7 hover:text-[#e45229] transition-all duration-300">
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

    </div>
  )
}

export default Navbar