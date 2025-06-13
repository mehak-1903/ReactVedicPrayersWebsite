import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/Mangalwar-Vrat.jpeg";
import img2 from "../assets/Shri-Hanuman-Vrat-Katha.jpeg";
import img3 from "../assets/hanuman-stuti.jpg";
import img4 from "../assets/Shri-Hanuman-Mantras.jpeg";
import img5 from "../assets/Mangalwar-Vrat.jpeg";

export default function Card() {
  return (
    <div className="card">
      <div className="card-navlist">
        <ul>
          <li>
            <a href="#">
              Shri Ganesh Ji <FontAwesomeIcon icon={faAngleDown} />
            </a>
          </li>
          <li>
            <a href="#">
              Lord Shiva <FontAwesomeIcon icon={faAngleDown} />
            </a>
          </li>
          <li>
            <a href="#">
              Lord Hanuman <FontAwesomeIcon icon={faAngleDown} />
            </a>
          </li>
          <li>
            <a href="#">
              9 Goddess <FontAwesomeIcon icon={faAngleDown} />
            </a>
          </li>
          <li>
            <a href="#">Chalisa</a>
          </li>
          <li>
            <a href="#">Aartis</a>
          </li>
          <li>
            <a href="#">Kathayen</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">
              English <FontAwesomeIcon icon={faAngleDown} />
            </a>
          </li>
        </ul>

        <div className="card-list">
          <div className="card-container">
            <div
              className="card-bg"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div className="overlay">
              <div className="overlay-text">
                <a href="#">Hanuman Vrat</a>
                <h4>
                  <a href="#">Lord Hanuman Vrat | हनुमान व्रत | PDF </a>
                </h4>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div
              className="card-bg"
              style={{ backgroundImage: `url(${img2})` }}
            ></div>
            <div className="overlay">
              <div className="overlay-text">
                <a href="#">Lord Hanuman Vrat Katha</a>
                <h4>
                  <a href="#">
                    Lord Hanuman Vrat Katha | हनुमान व्रत कथा | PDF
                  </a>
                </h4>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div
              className="card-bg"
              style={{ backgroundImage: `url(${img3})` }}
            ></div>
            <div className="overlay">
              <div className="overlay-text">
                <a href="#">Shri BajrangBali Stuti</a>
                <h4>
                  <a href="#">
                    Shri BajrangBali Stuti | श्री बजरंगबली स्तुति | PDF
                  </a>
                </h4>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div
              className="card-bg"
              style={{ backgroundImage: `url(${img4})`}}
            ></div>
            <div className="overlay">
              <div className="overlay-text">
                <a href="#">Shri Hanuman Mantras</a>
                <h4>
                  <a href="#">
                      Shri Hanuman Mantras 108 Times | श्री हनुमान मंत्र 108 बार | PDF
                  </a>
                  </h4>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div
              className="card-bg"
              style={{ backgroundImage: `url(${img5})` }}
            ></div>
            <div className="overlay">
              <div className="overlay-text">
                <a href="#">Hanuman Vrat katha</a>
                <h4>
                  <a href="#">
                    Lord Hanuman Vrat Katha | हनुमान व्रत कथा | PDF
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
