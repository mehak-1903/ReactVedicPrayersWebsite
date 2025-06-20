import { useEffect, useState } from "react";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Searchbar({onClose}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handlekeyDown = (e) => {
      if (e.key === "Escape") {
        setIsVisible(false); //hide the component
      }
    };

    window.addEventListener("keydown", handlekeyDown);
    return () => window.removeEventListener("keydown", handlekeyDown);
  }, []);

  if (!isVisible) return null; // hides the whole component

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center relative">
        <div onClick={onClose} className="absolute top-6 right-8 cursor-pointer"><FontAwesomeIcon icon={faTimes} className="text-xl text-gray-500"/></div>
      <div>
        <h3 className="font-bold text-3xl mb-6 text-center">
          Press ESC to Close.
        </h3>
        <div className="flex flex-col md:flex-row gap-2">
          <input
            type="text"
            placeholder="Search and press enter ..."
            className="w-full md:w-[400px] border border-white outline-none focus:border-orange-600 transition duration-200 px-[24px] py-3 rounded-3xl text-sm"
          />
          <button
            type="submit"
            className="px-[40px] py-[13px] rounded-3xl bg-[length:200%_200%] bg-[linear-gradient(to_left,#e45229_0%,#e99176_51%,#e45229_100%)] bg-[left_center] hover:bg-[right_center] transition-all duration-300"
          >
            <FontAwesomeIcon
              icon={faSearch}
              className="text-[14px] text-white"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
