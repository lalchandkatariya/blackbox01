import React from "react";
import "../HomeIntro/HomePageIntro.css";

import { HOmeIntroFooter } from "./HomeIntroFooter/HOmeIntroFooter";
import { DropDown } from "./DropDown";
import ScrollTransition from "./MouseScroll";
export const HomePageIntro = () => {
  return (
    <div className="HomeIntroContainer">
      <div className="HeaderOuter">
        <div className="LogoImg">
          <a href="/">
            {/* <img
              src="https://otaru.qodeinteractive.com/wp-content/themes/otaru/assets/img/logo.svg"
              alt=""
            /> */}
          </a>
        </div>
        <ul>
          <li>
            <a href="/">chat</a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <div class="select" tabindex="1">
                <input
                  className="selectopt"
                  name="test"
                  type="radio"
                  id="opt1"
                  checked
                />
                <label for="opt1" className="option">
                  Feature
                </label>
                <input
                  className="selectopt"
                  name="test"
                  type="radio"
                  id="opt2"
                />
                <label for="opt2" className="option">
                  AI Autocommit
                </label>
                <input
                  className="selectopt"
                  name="test"
                  type="radio"
                  id="opt3"
                />
                <label for="opt3" className="option">
                  BlackBox Diff
                </label>
                <input
                  className="selectopt"
                  name="test"
                  type="radio"
                  id="opt4"
                />
                <label for="opt4" className="option">
                  Ai Readme Generator
                </label>
                <input
                  className="selectopt"
                  name="test"
                  type="radio"
                  id="opt5"
                />
                <label for="opt5" className="option">
                  Watermelon
                </label>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">Pricing</a>
          </li>
        </ul>
        <div></div>
      </div>

      <div className="body_bg_outer">
        <HOmeIntroFooter />
      </div>
    </div>
  );
};
