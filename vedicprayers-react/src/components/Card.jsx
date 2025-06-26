import img1 from "../assets/Mangalwar-Vrat.jpeg";
import img2 from "../assets/Shri-Hanuman-Sathika.jpeg";
import img3 from "../assets/Shri-Hanuman-Vrat-Katha.jpeg";
import img4 from "../assets/hanuman-stuti.jpg";
import img5 from "../assets/Shri-Hanuman-Bajrang-Baan.jpeg";
import img6 from "../assets/Shri-Hanuman-Mantras.jpeg";
import img7 from "../assets/Hanuman-Chalisa.jpeg";
import img8 from "../assets/Shri-Hanuman-Bahuk.jpeg";
import { useState } from "react";
import Navbar from "./Navbar";

const bgImage = [
  {
    image:
      "https://vedicprayers.com/wp-content/uploads/2023/10/Mangalwar-Upay-550x367.jpeg",
    names:
      "Mangalwar Vrat | मंगलवार व्रत रखने से दूर होंगे संकट, जानिए पूजा की सही विधि | PDF",
    badge: "Lord Hanuman",
  },
  {
    image: img2,
    names: "Shri Hanuman Sathika | श्री हनुमान साठिका | PDF",
    badge: "Lord Hanuman",
  },
  {
    image:
      "https://vedicprayers.com/wp-content/uploads/2024/10/Shri-Hanuman-Vrat-Katha-%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80-%E0%A4%B9%E0%A4%A8%E0%A5%81%E0%A4%AE%E0%A4%BE%E0%A4%A8-%E0%A4%B5%E0%A5%8D%E0%A4%B0%E0%A4%A4-%E0%A4%95%E0%A4%A5%E0%A4%BE.jpeg",
    names: "Shri Hanuman Vrat Katha | श्री हनुमान व्रत कथा | PDF",
    badge: "Lord Hanuman",
  },
  {
    image:
      "https://vedicprayers.com/wp-content/uploads/2024/12/hanuman-stuti.jpg",
    names: "Hanuman Stuti | हनुमानजी स्तुति | PDF",
    badge: "Lord Hanuman",
  },
  {
    image: img5,
    names: "Shri Hanuman Bajrang Baan | श्री हनुमान बजरंग बाण | PDF",
    badge: "Lord Hanuman",
  },
  {
    image:
      "https://vedicprayers.com/wp-content/uploads/2023/09/Shri-Hanuman-Mantras.jpeg",
    names: "Shri Hanuman Mantras | श्री हनुमान मंत्र | PDF",
    badge: "Lord Hanuman",
  },
  {
    image:
      "https://vedicprayers.com/wp-content/uploads/2024/06/hanuman-chalisa-360x360.jpeg",
    names: "Shri Hanuman Chalisa | श्री हनुमान चालीसा | PDF",
    badge: "Chalisa",
  },
  {
    image:
      "https://vedicprayers.com/wp-content/uploads/2023/10/Mangalwar-Upay-550x367.jpeg",
    names:
      "Mangalwar Vrat | मंगलवार व्रत रखने से दूर होंगे संकट, जानिए पूजा की सही विधि | PDF",
    badge: "Lord Hanuman",
  },
  {
    image: img2,
    names: "Shri Hanuman Sathika | श्री हनुमान साठिका | PDF",
    badge: "Lord Hanuman",
  },
];

export default function Card() {
  const itemsPerView = 5; // 5images showed on window
  const itemsPerScroll = 2; // scroll 2 images hongi

  const totalDots =
    Math.ceil((bgImage.length - itemsPerView) / itemsPerScroll) + 1; // eg: 8 images = (8-5) / 2 + 1 = 3dots

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    const maxIndex = Math.max(0, bgImage.length - itemsPerView); // avoid over-scrolling
    const newIndex = Math.min(index * itemsPerScroll, maxIndex);

    setCurrentIndex(newIndex);
  };

  const cardWidth = 288;
  const gap = 8;
  const maxTranslateX = (cardWidth + gap) * (bgImage.length - itemsPerView);
  const translateX = Math.min(currentIndex * (cardWidth + gap), maxTranslateX);

  return (
    <div>
      {/* <Navbar/> */}

      {/* Cards */}
      <div className="w-full overflow-hidden p-[10px] relative">
        <div
          className="flex gap-4 object-cover transition-transform duration-700 ease-in-out px-4"
          // style={{ transform: `translateX(-${translatePercentage}%)`}}
          style={{
            transform: `translateX(-${translateX}px)`,
            width: `${(cardWidth + gap) * bgImage.length}px`, // dynamic width of full strip
          }}
        >
          {bgImage.map((images, index) => (
            <div
              key={`card-${index}`}
              className="w-[300px] h-[356px] flex-shrink-0 px-6 border border-black-300 mb-8 rounded-2xl overflow-hidden cursor-pointer relative group"
              style={{
                marginRight: index !== bgImage.length - 1 ? `${gap}px` : "0",
              }}
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
              <div className="absolute inset-0 opacity-80 bg-[#454f60] rounded-2xl z-10">
                <div className="absolute inset-0 pt-28 flex flex-col items-center justify-center px-6">
                  <span className="px-3 py-1 w-auto rounded-2xl text-white mb-2 bg-[linear-gradient(to_right,#e45229_0%,#e99176_51%,#e45229_100%)] bg-[length:200%_auto] hover:bg-right bg-center transition-all duration-300">
                    <a href="#">{images.badge}</a>
                  </span>
                  <h4 className="text-center pb-5" key={`name-${index}`}>
                    <a
                      href="#"
                      className="text-[22px] text-white font-bold leading-snug hover:text-orange-500"
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
                ? "bg-[linear-gradient(to_right,#e45229_0%,#e99176_51%,#e45229_100%)] w-8 h-2" // 🔸 Active dot: wider + orange
                : "bg-gray-300 w-3 h-3" // ⚪ Inactive dot: small + gray
            }`}
          ></button>
        ))}
      </div>
      
    </div>
  );
}
