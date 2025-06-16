import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/Mangalwar-Vrat.jpeg";
import img2 from "../assets/Shri-Hanuman-Vrat-Katha.jpeg";
import img3 from "../assets/hanuman-stuti.jpg";
import img4 from "../assets/Shri-Hanuman-Mantras.jpeg";
import img5 from "../assets/hanuman-aarti.jpeg";

const navli = [
  {
    name: "Shri Ganesh Ji",
  },
  {
    name: "Lord Shiva",
  },
  {
    name: "Lord Hanuman",
  },
  {
    name: "9 Goddess",
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
  { image: img1 ,
    names: "Lord Hanuman Vrat | हनुमान व्रत | PDF",
    badge: "Vrat"
  },
  { image: img2 ,
    names: "Lord Hanuman Vrat Katha | हनुमान व्रत कथा | PDF",
    badge: "Vrat Katha"
  },
  { image: img3,
    names: "Shri BajrangBali Stuti | श्री बजरंगबली स्तुति | PDF",
    badge: "Stuti"
   },
  { image: img4,
    names: "Shri Hanuman 108 Names | श्री हनुमान 108 नाम | PDF",
    badge: "God/Goddess Names"
   },
  { image: img5,
    names: "Shri Hanuman Ji Aarti | श्री हनुमान जी आरती | PDF",
    badge: "Aarti"
   },
];

export default function Card() {
  return (
    <div>
      <div className="max-w-[1260px] h-auto m-auto my-5">
        <div className="flex justify-center items-center w-full">
          <ul className="flex justify-center items-center w-full gap-9 text-semibold">
            {navli.map((list, index) => (
              <li className="text-lg">
                <a href="#" key={`nav1-${index}`}>
                  {list.name}{" "}
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-gray-400 text-sm"
                  />
                </a>
              </li>
            ))}

            {navli2.map((list, index) => (
              <li className="text-lg">
                <a href="#" key={`nav2-${index}`}>
                  {list.navname}
                </a>
              </li>
            ))}

            <li className="text-lg">
              <a href="#">
                English{" "}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="text-gray-400 text-sm"
                />
              </a>
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
                  <a href="#">
                    {images.badge}
                  </a>
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
