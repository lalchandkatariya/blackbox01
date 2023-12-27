import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Android, Chat, Code, Home } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
import "./Nav.css";
import { SidebarWithBurgerMenu } from "./SideBar";

const Nav = () => {
  return (
    <AppBar position="static" className="customAppBar">
      <Toolbar style={{ background: "black" }}>
        <IconButton
          edge="start"
          aria-label="menu"
          style={{ background: "black" }}
        >
          {/* <img
            className="Nav_Icon"
            src="https://otaru.qodeinteractive.com/wp-content/themes/otaru/assets/img/logo.svg"
            alt="Blackbox Logo"
          /> */}

          <a href="/">
            <img
              src="https://otaru.qodeinteractive.com/wp-content/themes/otaru/assets/img/logo.svg"
              alt=""
            />
          </a>
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          className="Nav_Right"
          style={{ background: "Black" }}
        >
          <ul
            className="Nav_List"
            style={{ background: "black", color: "white" }}
          >
            {/* <li>
              {/* <Link to="/" className="Nav_Link">
                <Home />
              </Link>
            </li> */}{" "}
            <li>
              <Link to="/login" className="Nav_Link" style={{ color: "white" }}>
                <GoogleIcon />
                <span>Login</span>
              </Link>
            </li>
            {/* <li>
              <Link to="/explore" className="Nav_Link">
                <Explore />
              </Link>
            </li> */}
            <li>
              <Link
                to="/android"
                className="Nav_Link"
                style={{ color: "white" }}
              >
                <Android />
                <span>Android</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="Nav_Link" style={{ color: "white" }}>
                <Chat />
                <span>Chat</span>
              </Link>
            </li>
            <li style={{ backgroundColor: "black", color: "black" }}>
              <Link
                to="/vscode"
                className="Nav_Link"
                style={{ color: "white" }}
              >
                <Code />
                <span>Vs code</span>
              </Link>
            </li>
            <li style={{ backgroundColor: "black", color: "white" }}>
              <Link
                to="/homeIntro"
                className="Nav_Link"
                style={{ color: "white" }}
              >
                <Home />
                <span>HomePage</span>
              </Link>
            </li>
          </ul>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
