import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/Mangalwar-Vrat.jpeg";
import img2 from "../assets/Shri-Hanuman-Vrat-Katha.jpeg";
import img3 from "../assets/hanuman-stuti.jpg";
import img4 from "../assets/Shri-Hanuman-Mantras.jpeg";
import img5 from "../assets/hanuman-aarti.jpeg";
import img6 from "../assets/Shri-Hanuman-Bahuk.jpeg";
import Flag from "react-world-flags";
import {useState} from "react";

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
   {
    image: "https://vedicprayers.com/wp-content/uploads/2023/10/Mangalwar-Upay-550x367.jpeg",
    names: "Mangalwar Vrat | मंगलवार व्रत रखने से दूर होंगे संकट, जानिए पूजा की सही विधि | PDF",
    badge: "Lord Hanuman",
  },
   {
    image: "https://vedicprayers.com/wp-content/uploads/2023/10/Mangalwar-Upay-550x367.jpeg",
    names: "Mangalwar Vrat | मंगलवार व्रत रखने से दूर होंगे संकट, जानिए पूजा की सही विधि | PDF",
    badge: "Lord Hanuman",
  },
   {
    image: "https://vedicprayers.com/wp-content/uploads/2023/10/Mangalwar-Upay-550x367.jpeg",
    names: "Mangalwar Vrat | मंगलवार व्रत रखने से दूर होंगे संकट, जानिए पूजा की सही विधि | PDF",
    badge: "Lord Hanuman",
  },
   {
    image: "https://vedicprayers.com/wp-content/uploads/2023/10/Mangalwar-Upay-550x367.jpeg",
    names: "Mangalwar Vrat | मंगलवार व्रत रखने से दूर होंगे संकट, जानिए पूजा की सही विधि | PDF",
    badge: "Lord Hanuman",
  }
];

export default function Card() {
      const itemsPerView = 5;       // 5images showed on window
      const itemsPerScroll = 2;     // scroll 2 images hongi

      const totalDots = Math.ceil((bgImage.length - itemsPerView) / itemsPerScroll) + 1;     // eg: 8 images = (8-5) / 2 + 1 = 3dots

      const[currentIndex, setCurrentIndex] = useState(0);

      const handleDotClick = (index) => {
            setCurrentIndex(index * itemsPerScroll); 
      }

      const translatePercentage = ((100 / itemsPerView) - 2) * currentIndex;  // every image takes 20% width out of full width
//       const cardWidth = 288;
// const gap = 16;
// const translateX = currentIndex * (cardWidth + gap);

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
      <div className="w-full overflow-hidden p-[10px] relative">
      <div className="flex gap-6 object-cover transition-transform duration-700 ease-in-out px-7" style={{ transform: `translateX(-${translatePercentage}%)`}}>
        {bgImage.map((images, index) => (
          <div
            key={`card-${index}`}
            className="w-full md:w-[20%] flex-shrink-0 h-[356px] border border-black-300 mb-8 rounded-2xl overflow-hidden cursor-pointer relative group"
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
      <div className="flex justify-center mt-4 gap-3">
  {Array.from({ length: totalDots }).map((_, i) => (
    <button
      key={i}
      onClick={() => handleDotClick(i)}
      className={`transition-all duration-300 rounded-full ${
        currentIndex === i * itemsPerScroll
          ? 'bg-[linear-gradient(to_right,#e45229_0%,#e99176_51%,#e45229_100%)] w-8 h-2'  // 🔸 Active dot: wider + orange
          : 'bg-gray-300 w-3 h-3'    // ⚪ Inactive dot: small + gray
      }`}
    ></button>
  ))}
</div>

    </div>
  );
}

// import React, { useState } from 'react';

// const images = [
//   'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=2560&q=80',
//   'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=2940&q=80',
//   'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=2762&q=80',
//   'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2600&q=80',
//   'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=2600&q=80',
//   'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=2600&q=80',
//   'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=2600&q=80',
//   'https://images.unsplash.com/photo-1587614203976-365c74645e83?auto=format&fit=crop&w=2600&q=80',
// ];

// export default function CarouselMoveTwoImages() {
//   const itemsPerView = 5;
//   const itemsPerScroll = 2;
//   const totalDots = Math.ceil((images.length - itemsPerView) / itemsPerScroll) + 1;

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleDotClick = (index) => {
//     setCurrentIndex(index * itemsPerScroll);
//   };

//   const translatePercentage = (100 / itemsPerView) * currentIndex;

//   return (
//     <div className="w-full overflow-hidden">
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${translatePercentage}%)` }}
//       >
//         {images.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`Slide ${index}`}
//             className="w-1/5 h-[300px] object-cover flex-shrink-0"
//           />
//         ))}
//       </div>

//       {/* Dots */}
//       <div className="flex justify-center mt-4 gap-2">
//         {Array.from({ length: totalDots }).map((_, i) => (
//           <button
//             key={i}
//             onClick={() => handleDotClick(i)}
//             className={`transition-all duration-300 rounded-full ${
//   currentIndex === i * itemsPerScroll
//     ? 'bg-orange-500 w-8 h-2'
//     : 'bg-gray-300 w-3 h-3 '
// }`}

//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// }
