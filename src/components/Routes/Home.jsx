import React, { useState } from "react";
import "./Home.css";
import { SearchArea } from "../SearchFiled/SearchArea";
import Header from "../Header/Header";
import Nav from "../Header/Nav";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="Home_container">
      <div className="Toggle_buttons">
        <span>
          <button
            onClick={handleClick}
            className={`BTN_Color ${isActive ? "active" : ""}`}
          >
            Code AI
          </button>
        </span>
        <span>
          <button
            onClick={handleClick}
            className={`BTN_Color ${!isActive ? "active" : ""}`}
          >
            General AI
          </button>
        </span>
      </div>
      <div className="Home_heading">
        <div className="Home_content">
          <h3>Click Any Suggestion</h3>
          <p style={{ color: "#c5c5c8 " }}>
            Start typing or start from suggestions
          </p>
          <p className="Home_Filed"> &#8594; Full stack development</p>
          <p className="Home_Filed"> &#8594; Front End Developer</p>
          <p className="Home_Filed"> &#8594; ML Engineer</p>
          <p className="Home_Filed"> &#8594; Research Scientist</p>
          <p style={{ color: "#c5c5c8 " }}>
            {" "}
            Turn on Web Search for realtime Information
          </p>
        </div>
        <SearchArea />
        <Footer />
      </div>
    </div>
  );
};
