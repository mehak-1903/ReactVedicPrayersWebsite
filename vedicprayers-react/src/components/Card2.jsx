import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareNodes,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

// Import Images
import img1 from "../assets/Mangalwar-Vrat.jpeg";
import img2 from "../assets/hanuman-aarti.jpeg";
import img3 from "../assets/Shri-Hanuman-Bajrang-Baan.jpeg";
import img4 from "../assets/Shri-Hanuman-Sathika.jpeg";
import img5 from "../assets/Shri-Hanuman-Ji-108-Names.jpeg";
import img6 from "../assets/Mangalwar-Upay.jpeg";
import img7 from "../assets/Hanuman-Chalisa.jpeg";
import img8 from "../assets/Shri-Hanuman-Mantras.jpeg";
import img9 from "../assets/Sankat-mochan-ashtak.png";
import img10 from "../assets/Hanuman-ji-worshipped.png";
import img11 from "../assets/Shri-Hanuman-Bahuk.jpeg";
import img12 from "../assets/rinmochan-mangl-stotra.jpeg";
import img13 from "../assets/Benefits-of-Hanuman-Worship.png";
// Geeta Shlok
import Shalok6 from "../assets/Shalok-6.png";
// Ads
import image1 from "../assets/kinsta1.png";
import image2 from "../assets/GreenGreeks1.gif";
import image3 from "../assets/kinsta2.webp";
import image4 from "../assets/Green2.webp";
// popular post
import image5 from "../assets/rinmochan-mangl-stotra-popular-post1.jpeg";
import image6 from "../assets/Shri-Hanuman-Bahuk-popular-post2.jpeg";
import image7 from "../assets/Maa-Katyayani-stotra-popular-post3.jpeg";

// Card Data
const cardData = [
  {
    image: img1,
    title: "Shri Hanuman Vrat Katha | श्री हनुमान व्रत कथा | PDF",
    description:
      "एक ब्राम्हण दम्पत्ति के कोई सन्तान न हुई थी जिसके कारण पति-पत्नी दुःखी थे। वह ब्राम्हण हनुमान जी की पूजा…",
    badge: "Vrat Katha"
  },
  {
    image: img2,
    title: "Shri Hanuman Ji Aarti | श्री हनुमान जी आरती | PDF",
    description:
      "आरती कीजिए, हनुमान लला की, दुष्टों का संहार करने वाले श्री रघुनाथ जी के परम भक्त हनुमान जी की, जिनके…",
    badge: "Aarti"
  },
  {
    image: img3,
    title: "Shri Hanuman Bajrang Baan | श्री हनुमान बजरंग बाण | PDF",
    description:
      "निश्चय प्रेम प्रतीति ते, विनय करें सन्मान । तेहि के कारज सकल शुभ, सिद्ध करैं हनुमान ।। जय हनुमन्त सन्त हितकारी…",
    badge: "Bajrang Baan"
  },
  {
    image: img4,
    title: "Shri Hanuman Sathika | श्री हनुमान साठिका | PDF",
    description:
      "वीर बखानौं पवनसुत,जनत सकल जहान । धन्य-धन्य अंजनि-तनय , संकर, हर, हनुमान्॥ अर्थ- वीर पवन पुत्र की…",
    badge: "Sathika"
  },
  {
    image: img5,
    title: "Shri Hanuman Ji 108 Names | श्री हनुमान जी 108 नाम | PDF",
    description:
      "अंजनेया , महावीर , हनुमत  , मरुतात्माज , तत्त्वज्ञानप्रदा , सीतादेवीमुद्रप्रदायक , अशोकवनकछेत्रे , सर्वमाया विभंजन…",
    badge: "108 Names"
  },
  {
    image: img6,
    title: "Mangalwar Upay | मंगलवार के दिन करें ये आसान उपाय | PDF",
    description:
      "अगर आपके काम लगातार बिगड़ रहे हैं तो आपको मंगलवार के दिन हनुमान चालीसा का पाठ करना चाहिए…",
    badge: "Upay"
  },
  {
    image: img7,
    title: "Shri Hanuman Chalisa | श्री हनुमान चालीसा | PDF",
    description:
      "श्री गुरु चरण सरोज रज, निज मनु मुकुर सुधारि। बरनउं रघुबर बिमल जसु, जो दायकु फल चारि॥ बुद्धिहीन तनु जानिके…",
    badge: "Chalisa"
  },
  {
    image: img8,
    title: "Shri Hanuman Mantras | श्री हनुमान मंत्र | PDF ",
    description:
      "यश-कीर्ति के लिए हनुमान मंत्र, शत्रु पराजय के लिए हनुमान मंत्र, शत्रु पर विजय तथा वशीकरण के लिए हनुमान मंत्र…",
    badge: "Mantras"
  },
  {
    image: img9,
    title: "Shri Hanuman Ashtak | श्री हनुमान अष्टक | PDF",
    description:
      "बाल समय रवि भक्षि लियो तब, तीनहुं लोक भयो अंधियारों। ताहि सों त्रास भयो जग को, यह संकट काहु सों जात…",
    badge: "Asthak"
  },
  {
    image: img10,
    title:
      "Why is Hanuman ji worshipped on Tuesday? | हनुमान जी को मंगलवार को क्यों पूजा जाता है? | PDF",
    description:
      "भारतवर्ष में देवताओं की पूजा का एक गूढ़ और पवित्र इतिहास है। प्रत्येक सप्ताह का एक विशिष्ट दिन किसी न…",
    badge: "Worshipped"
  },
  {
    image: img11,
    title: "Shri Hanuman Bahuk | श्री हनुमान बाहुक | PDF",
    description:
      "सिंधु-तरन, सिय-सोच-हरन, रबि-बालबरन-तनु। भुज बिसाल, मूरति कराल कालहुको काल जनु || गहन-दहन-निरदहन…",
    badge: "Bahuk"
  },
  {
    image: img12,
    title: "Rinmochan Mangal Stotra | ऋणमोचक मंगल स्तोत्र | PDF",
    description:
      "मङ्गल , भूमिपुत्र(धरती का पुत्र), ऋणहर्ता (कर्ज का नाश करने वाले), धनप्रद(धन को प्रदान करने वाले), स्थिरासन…",
    badge: "Stotra"
  },
  {
    image: img13,
    title: "Benefits of Hanuman Worship | हनुमान जी की भक्ति से जीवन में आने वाले चमत्कारी परिवर्तन | PDF",
    description:
      "भारतीय संस्कृति में हनुमान जी को असीम शक्ति, भक्ति, साहस और सेवा का प्रतीक माना जाता है। उन्हें भगवान शिव…",
    badge: "Lord Hanuman"
  },
];

// Special Events

const events = [
  {
    date: "28 June 2025",
    name: "Ganesh Chaturthi (Shukla Paksha Chaturthi)",
  },
  {
    date: "27 June 2025",
    name: " Shri Jagannath Rath Yatra",
  },
  {
    date: "26 June 2025",
    name: "Ashadha Gupt Navratri Begins",
  },
  {
    date: "25 June 2025",
    name: " Ashadha Amavasya",
  },
  {
    date: "23 June 2025",
    name: " Masik Shivratri, Krishna Pradosh Vrat",
  },
  {
    date: "21 June 2025",
    name: "Yogini Ekadashi",
  },
  {
    date: "15 June 2025",
    name: "Mithuna Sankranti",
  },
  {
    date: "14 June 2025",
    name: "Krishna Pingala Sankashti Chaturthi",
  },
];

const restevents = [
  {
    date: "10 June 2025",
    name: "Vat Purnima Vrat",
  },
  {
    date: "6 June 2025",
    name: "Nirjala Ekadashi",
  },
  {
    date: "5 June 2025",
    name: "Ganga Dussehra",
  },
  {
    date: "4 June 2025",
    name: "Mahesh Navami",
  },
];

// tags

const tags = [
  "#FridaySpl",
  "#mondaySpl",
  "#ShaniSpl",
  "#thurspcl",
  "#tuespcl",
  "#wedspl",
  "Bhairava",
  "Bhairava chalisa in hindi",
  "Bhakti",
  "chaithra navratri",
  "chaithra navratri 2025",
  "chaithra navratri 2025 in april",
  "chaithra navratri 2025 in hindi",
  "Chalisa",
  "Durga Puja",
  "fasting",
  "festival",
  "Ganesh Chaturthi",
  "hanuman chalisa",
  "Hanuman vrat katha",
  "Hindu Festival",
  "Jaimatadi",
  "Jayambe",
  "Kathayen",
  "Lord Shiva",
  "Maa Chandraghanta",
  "Maa kushmanda aarti",
  "Maa Skandmata",
  "mahadev",
  "Mahagauri stotra",
  "Mantra",
  "Navdurga",
  "Navratri",
  "navratri 2025",
  "Pradosh vrat",
  "Prayers",
  "shivshakti",
  "Shri vishnu aarti",
  "Stotra",
  "Surya Namaskar",
  "vishnu",
  "Vishnu aarti",
  "Vishnu chalisa",
  "Vrat katha",
  "Vrat Vidhi",
];

function Card2() {
  return (
    <div className="w-full md:max-w-[1300px] m-auto my-10">
      <div className="w-full flex flex-col md:flex-row mt-[24px] px-[12px]">
        <div className="w-full md:max-w-[840px] px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="max-w-sm bg-white w-[400px] border border-gray-100 rounded-lg shadow-sm text-black border-gray-300"
            >
              <a href="#">
                <div className="h-[300px] overflow-hidden relative rounded-t-lg">
                  <img
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    srcSet={item.image}
                    alt="Hanuman Ji"
                  />

                  {/* Badge */}

                  <div className="absolute top-2 left-2 px-3 py-1 text-xs font-semibold text-white bg-[linear-gradient(to_right,#e45229_0%,#e99176_51%,#e45229_100%)] bg-[length:200%_auto] hover:bg-right bg-center transition-all duration-300 rounded-xl">
                    {item.badge}
                  </div>
                </div>
              </a>

              <div className="p-5">
                <p className="mb-3 font-normal text-left text-gray-700">
                  13 जून 2025
                </p>
                <a href="#">
                  <h5 className="mb-2 mt-5 text-2xl text-left font-bold tracking-tight text-gray-900 text-black hover:text-orange-600">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 mt-3 font-normal text-left text-gray-700">
                  {item.description}
                </p>
                <div className="p-3 mt-7  border-t border-black-200 flex justify-between">
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faShareNodes}
                      className="text-gray-700 text-xl hover:text-orange-600"
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faEllipsis}
                      className="text-gray-700 text-xl hover:text-orange-600"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="h-full w-full md:max-w-[460px] px-4 rounded-lg">
          <h2 className="font-bold text-4xl mb-2 text-center">
            आज का कार्यक्रम
          </h2>
          <h2 className="font-bold text-xl text-gray-700 text-center">
            June 13, 2025
          </h2>
          <div className="mt-7 w-full h-[300px] max-h-[300px] rounded-lg shadow-lg shadow-[0_8px_9px_0_rgba(0,0,0,0.6)] overflow-hidden relative group">
            {/* Zoomed Background Layered. */}
            <div
              className="absolute inset-0 bg-cover bg-no-repeat bg-center transition-transform duration-300 group-hover:scale-105 z-0"
              style={{ backgroundImage: `url(${img6})` }}
            ></div>

            {/* Overlay Text */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:bg-opacity-40 transition duration-300 z-10"></div>

            {/* Text appears only on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <h4 className="text-white text-2xl font-bold text-center ">
                <a href="#" className="hover:text-orange-600">
                  Hanuman Worship | मंगलवार के दिन क्यों की जाती है हनुमान जी की
                  पूजा | PDF{" "}
                </a>
              </h4>
            </div>
          </div>
          
          {/* Bhagavadgeeta */}

          <h2 className="text-3xl text-center font-bold my-8">गीता ज्ञान</h2>

          <div className="mb-[25px] border rounded-[10px] border-grey-400 w-full h-auto p-6">
            <img src={Shalok6} alt="Bhagwad Geeta Shalok" className="rounded-[8px] shadow-[0_8px_9px_0_rgba(0,0,0,0.5)] mb-[25px]"/>
            <h1 className="font-bold text-2xl mt-[25px] hover:text-orange-600 transition duration-300">
              <a href="#" target = "_blank">
              Shrimad Bhagavad Gita Chapter -1 Shalok – 6 | श्रीमद् भगवदगीता अध्याय एक – श्लोक छ: | PDF
            </a>
            </h1>
            
          </div>

          {/* kinsta */}
          <div className="mb-4 mt-8 p-[35px_30px] border rounded-[10px] border-grey-400 w-full h-auto flex justify-center items-center">
            <a href="#">
              <img srcSet={image1} alt="Kinsta" />
            </a>
          </div>

          {/* Special events for the month */}
          <div className="h-auto w-full rounded bg-[linear-gradient(to_right,#e45229_0%,#e99176_51%,#e45229_100%)] py-[35px] px-[25px]">
            <h3 className="text-black text-2xl font-bold mb-8">
              Special Events of the Month.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60px"
                height="25px"
                viewBox="0 0 60 25"
                className=" mx-auto mt-4"
              >
                <path
                  d="M0 5 Q 5 0, 10 5 T 20 5 T 30 5 T 40 5 "
                  fill="none"
                  stroke="red"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </h3>

            <div className="mt-5">
              {events.map((event, index) => (
                <p
                  key={index}
                  className="border-t mt-3 pt-4 text-lg text-semibold text-left"
                >
                  <strong>{event.date}</strong> - {event.name}
                </p>
              ))}
              {restevents.map((event, index) => (
                <p
                  key={index}
                  className="border-t mt-3 pt-4 text-left text-lg text-semibold group"
                >
                  <a href="#">
                    <strong>{event.date}</strong>
                    <span className="text-lg text-semibold group-hover:text-white transition-colors duration-300">
                      {" "}
                      - {event.name}{" "}
                    </span>{" "}
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      className="text-white"
                    />
                  </a>
                </p>
              ))}
            </div>
          </div>

          {/* Search */}

          <div className="mb-4 mt-8 p-[35px_30px] border rounded-[10px] border-grey-400 w-full h-auto ">
            <label
              htmlFor="search"
              className="block text-left text-lg font-[600] ml-1"
            >
              Search
            </label>
            <div className="w-full h-auto flex flex-col md:flex-row gap-4 justify-center items-center">
              <input
                type="text"
                id="search"
                className="px-7 py-2 rounded-3xl border border-gray-200 mr-5 font-normal focus:outline-none focus:ring-1 focus:ring-orange-600"
              />
              <button
                type="submit"
                className="p-[10px_30px] text-lg text-white rounded-3xl bg-[linear-gradient(to_right,#e45229_0%,#e99176_51%,#e45229_100%)] bg-[length:200%_auto] hover:bg-right bg-center transition-all duration-300"
              >
                Search
              </button>
            </div>
          </div>

          {/* GreenGreek */}
          <div className="mb-4 mt-8 p-[35px_30px] border rounded-[10px] border-grey-400 w-full h-auto flex justify-center items-center">
            <a href="#" target="_top">
              <img srcSet={image2} alt="GreenGreek" />
            </a>
          </div>

          {/* Popular Posts */}

          <div className="mb-4 mt-8 p-[35px_30px] border rounded-[10px] border-grey-400 w-full h-auto flex items-center flex-col">
            <h3 className="font-bold text-2xl">
              Popular Posts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60px"
                height="25px"
                viewBox="0 0 60 25"
                className=" mx-auto mt-2"
              >
                <path
                  d="M0 5 Q 5 0, 10 5 T 20 5 T 30 5 T 40 5 T 50 5 "
                  fill="none"
                  stroke="red"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </h3>

            {/* Post list */}
            {/* Post1 */}
            <div className="flex items-center gap-6 mb-8 mt-4 relative">
              <div className="absolute -top-2 -left-1 border-4 border-white rounded-full bg-orange-600 text-white text-xs px-2 py-1 font-bold z-10">
                1
              </div>
              <div className="rounded-full w-[60px] h-[60px] overflow-hidden ">
                <a href="#">
                  <img
                    srcSet={image5}
                    alt="Rinmochan Mangal Stotra"
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </div>
              <div>
                <h6 className="font-bold text-base mb-1 text-left hover:text-orange-600">
                  <a href="#">
                    Rinmochan Mangal Stotra | ऋणमोचक मंगल स्तोत्र | PDF
                  </a>
                </h6>
                <p className="text-left">14 सितम्बर 2023</p>
              </div>
            </div>

            {/* Post2 */}
            <div className="flex justify-between items-center gap-6 mb-8 relative">
              <div className="absolute -top-2 -left-1 border-4 border-white rounded-full bg-orange-600 text-white text-xs px-2 py-1 font-bold z-10">
                2
              </div>
              <div className="rounded-full w-[60px] h-[60px] overflow-hidden">
                <a href="#">
                  <img
                    srcSet={image6}
                    alt="Shri Hanuman Bahuk "
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </div>
              <div>
                <h6 className="font-bold text-base mb-1 text-left hover:text-orange-600">
                  <a href="#">Shri Hanuman Bahuk | श्री हनुमान बाहुक | PDF</a>
                </h6>
                <p className="text-left">07 सितम्बर 2023</p>
              </div>
            </div>

            {/* Post3 */}
            <div className="flex justify-between items-center gap-6 mb-4 relative">
              <div className="absolute -top-2 -left-1 border-4 border-white rounded-full bg-orange-600 text-white text-xs px-2 py-1 font-bold z-10">
                3
              </div>
              <div className="rounded-full w-[60px] h-[60px] overflow-hidden">
                <a href="#">
                  <img
                    srcSet={image7}
                    alt="Maa Katyayani Stotra "
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </div>
              <div>
                <h6 className="font-bold text-base mb-1 text-left hover:text-orange-600">
                  <a href="#">
                    Maa Katyayani Stotra | माँ कात्यायनी स्तोत्र | PDF
                  </a>
                </h6>
                <p className="text-left">15 सितम्बर 2023</p>
              </div>
            </div>
          </div>

          {/* Tag Clouds */}

          <div className="mb-4 mt-8 p-[35px_30px] border rounded-[10px] border-grey-400 w-full h-auto flex items-center flex-col">
            <h3 className="font-bold text-2xl">
              Tag Clouds
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60px"
                height="25px"
                viewBox="0 0 60 25"
                className=" mx-auto mt-2"
              >
                <path
                  d="M0 5 Q 5 0, 10 5 T 20 5 T 30 5 T 40 5 T 50 5 "
                  fill="none"
                  stroke="red"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </h3>

            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-5 py-2 bg-gray-100 rounded-full border text-sm cursor-pointer hover:text-orange-600 hover:border-orange-600 transition duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* kinsta */}
          <div className="mb-4 mt-8 p-[35px_30px] border rounded-[10px] border-grey-400 w-full h-auto flex justify-center items-center">
            <a href="#" target="_top">
              <img srcSet={image3} alt="kinsta" />
            </a>
          </div>

          {/* Green */}
          <div className="mb-4 mt-8 p-[35px_30px] border rounded-[10px] border-grey-400 w-full h-auto flex justify-center items-center">
            <a href="#" target="_top">
              <img srcSet={image4} alt="Green" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
