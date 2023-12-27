import React from "react";
import "./SearchArea.css";
import { Switch } from "@mui/material";

export const SearchArea = () => {
  const symbol = "</>";
  return (
    <div className="Search_container">
      <div className="Forms_input">
        <div className="Search_Toggle">
          <p>
            {" "}
            <Switch /> web search
          </p>
          <div className="Saymbol">{symbol}</div>
        </div>

        <div className="Forms_input_inner">
          <div className="plus_label">
            <input
              className="hidden"
              id="file-input"
              accept="image/*"
              type="file"
            />
            <label for="file-input" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z"></path>
              </svg>
            </label>
          </div>
          <div className="inputTextarea">
            <input
              className="form-control"
              placeholder="Ask a coding question"
            />
          </div>
          <div className="inter_icon">
            <button className="" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
