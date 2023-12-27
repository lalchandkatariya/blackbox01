import React from "react";
import "../HomeIntroFooter/Autocomplete.css";
import { AutoComVideo } from "./AutoComVideo";
export const AutoComplete = () => {
  return (
    <div>

      <div className="section-linear">
        <div className="div-block-136">
          <div className="div-block-137">
            <img
              src="https://www.useblackbox.io/style/images/file-code-1--code-files-angle-programming-file-bracket.svg"
              loading="lazy"
              alt=""
              className="icon-20 _2px-top"
            />
            <div className="div-block-147">
              <div className="text-block-26">20+ Programming Languages</div>
              <div className="text-block-26 subtle">
                Enjoy blackbox features in 20+ programming language.
              </div>
            </div>
          </div>
          <div className="div-block-137">
            <img
              src="https://www.useblackbox.io/style/images/steps-number--interface-number-internet-menu-progress.svg"
              loading="lazy"
              alt=""
              className="icon-20 _2px-top"
            />
            <div className="div-block-147">
              <div className="text-block-26">Automated Suggestion</div>
              <div className="text-block-26 subtle">
                Suggests and completes code snippets, elements and function.
              </div>
            </div>
          </div>
          <div className="div-block-137">
            <img
              src="https://www.useblackbox.io/style/images/browser-check--checkmark-pass-window-app-code-success-check-apps.svg"
              loading="lazy"
              alt=""
              className="icon-20 _2px-top"
            />
            <div className="div-block-147">
              <div className="text-block-26">Increased Productivity</div>
              <div className="text-block-26 subtle">
                Saves time and reduces the risk of errors.
              </div>
            </div>
          </div>
        </div>
      </div>
      <AutoComVideo />
    </div>
  );
};
