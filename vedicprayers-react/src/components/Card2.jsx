import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
// Import Images
import img1 from "../assets/Mangalwar-Vrat.jpeg";
import img2 from "../assets/hanuman-aarti.jpeg";
import img3 from "../assets/bajrang-baan.jpg";
import img4 from "../assets/hanuman-sathika(2).png";
import img5 from "../assets/hanuman-108.jpg";
import img6 from "../assets/Mangalwar-Upay.jpeg";
import img7 from "../assets/shri-hanuman-chalisa.png";
import img8 from "../assets/lord-hanuman-mantras.png";
import img9 from "../assets/Sankat-mochan-ashtak.png";
import img10 from "../assets/hanuman19.webp";
import img11 from "../assets/Shri-Hanuman-Bahuk.jpeg";
import img12 from "../assets/rinmochan.jpg";

const cardData = [
  {
    image: img1,
    title: "Shri Hanuman Vrat Katha | श्री हनुमान व्रत कथा | PDF",
    description:
      "एक ब्राम्हण दम्पत्ति के कोई सन्तान न हुई थी जिसके कारण पति-पत्नी दुःखी थे। वह ब्राम्हण हनुमान जी की पूजा…",
  },
  {
    image: img2,
    title: "Shri Hanuman Ji Aarti | श्री हनुमान जी आरती | PDF",
    description:
      "आरती कीजिए, हनुमान लला की, दुष्टों का संहार करने वाले श्री रघुनाथ जी के परम भक्त हनुमान जी की, जिनके…",
  },
  {
    image: img3,
    title: "Shri Hanuman Bajrang Baan | श्री हनुमान बजरंग बाण | PDF",
    description:
      "निश्चय प्रेम प्रतीति ते, विनय करें सन्मान । तेहि के कारज सकल शुभ, सिद्ध करैं हनुमान ।। जय हनुमन्त सन्त हितकारी…",
  },
  {
    image: img4,
    title: "Shri Hanuman Sathika | श्री हनुमान साठिका | PDF",
    description:
      "वीर बखानौं पवनसुत,जनत सकल जहान । धन्य-धन्य अंजनि-तनय , संकर, हर, हनुमान्॥ अर्थ- वीर पवन पुत्र की…",
  },
  {
    image: img5,
    title: "Shri Hanuman Ji 108 Names | श्री हनुमान जी 108 नाम | PDF",
    description:
      "अंजनेया , महावीर , हनुमत  , मरुतात्माज , तत्त्वज्ञानप्रदा , सीतादेवीमुद्रप्रदायक , अशोकवनकछेत्रे , सर्वमाया विभंजन…",
  },
  {
    image: img6,
    title: "Mangalwar Upay | मंगलवार के दिन करें ये आसान उपाय | PDF",
    description:
      "अगर आपके काम लगातार बिगड़ रहे हैं तो आपको मंगलवार के दिन हनुमान चालीसा का पाठ करना चाहिए…",
  },
  {
    image: img7,
    title: "Shri Hanuman Chalisa | श्री हनुमान चालीसा | PDF",
    description:
      "श्री गुरु चरण सरोज रज, निज मनु मुकुर सुधारि। बरनउं रघुबर बिमल जसु, जो दायकु फल चारि॥ बुद्धिहीन तनु जानिके…",
  },
  {
    image: img8,
    title: "Shri Hanuman Mantras | श्री हनुमान मंत्र | PDF ",
    description:
      "यश-कीर्ति के लिए हनुमान मंत्र, शत्रु पराजय के लिए हनुमान मंत्र, शत्रु पर विजय तथा वशीकरण के लिए हनुमान मंत्र…",
  },
  {
    image: img9,
    title: "Shri Hanuman Ashtak | श्री हनुमान अष्टक | PDF",
    description:
      "बाल समय रवि भक्षि लियो तब, तीनहुं लोक भयो अंधियारों। ताहि सों त्रास भयो जग को, यह संकट काहु सों जात…",
  },
  {
    image: img10,
    title:
      "Why is Hanuman ji worshipped on Tuesday? | हनुमान जी को मंगलवार को क्यों पूजा जाता है? | PDF",
    description:
      "भारतवर्ष में देवताओं की पूजा का एक गूढ़ और पवित्र इतिहास है। प्रत्येक सप्ताह का एक विशिष्ट दिन किसी न…",
  },
  {
    image: img11,
    title: "Shri Hanuman Bahuk | श्री हनुमान बाहुक | PDF",
    description:
      "सिंधु-तरन, सिय-सोच-हरन, रबि-बालबरन-तनु। भुज बिसाल, मूरति कराल कालहुको काल जनु || गहन-दहन-निरदहन…",
  },
  {
    image: img12,
    title: "Rinmochan Mangal Stotra | ऋणमोचक मंगल स्तोत्र | PDF",
    description:
      "Rinmochan Mangal Stotra | ऋणमोचक मंगल स्तोत्र | PDFमङ्गल , भूमिपुत्र(धरती का पुत्र), ऋणहर्ता (कर्ज का नाश…",
  },
];

function Card2() {
  return (
    <div className="max-w-[1260px] border border-red-200 h-auto m-auto">
      <div className="h-full w-full flex">
        <div className="h-full w-[800px] grid grid-cols-2 gap-6">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-100 rounded-lg shadow-sm text-black border-gray-300"
            >
              <a href="#">
                <div className="overflow-hidden">
                  <img
                    className="rounded-t-lg transition-transform duration-300 hover:scale-105 w-full h-auto object-cover"
                    src={item.image}
                    alt="Vedic Logo"
                  />
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
        <div className="border border-green-200 h-full w-[460px]"></div>
      </div>
    </div>
  );
}

export default Card2;
