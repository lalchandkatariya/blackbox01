import React from "react";
import "../HomeIntroFooter/HomePageFooter.css";
import { Slider } from "./Slider/Slider";
import { AutoComplete } from "./AutoComplete";
export const HOmeIntroFooter = () => {
  return (
    <div>
      <Slider />

      <div className="hero-section">
        <img
          src="https://www.useblackbox.io/style/images/feature-autocomplete.png"
          className="thumbnail-feature"
        />
        <div className="cap-copy">FEATURES</div>
        <div className="hero-text-container-new">
          <h1
            data-w-id="5517fa13-259e-90bb-51ac-002053bde302"
            className="h1-copy"
          >
            Autocomplete made easy.
          </h1>
          <div className="div-block-131-copy">
            <div
              data-w-id="8b0b6f95-2b89-d71c-79aa-22bc50d6ac9c"
              className="h7 _64ch"
            >
              Available in 20+ programming languages including Python,
              JavaScript, TypeScript, Go, Ruby and much more...
            </div>
          </div>
        </div>
      </div>

      <div> <AutoComplete /></div>

      <section className="footer-dark">
        <div className="container-5">
          <div className="footer-wrapper">
            <a href="/" className="footer-brand w-inline-block">
              <img
                src="https://otaru.qodeinteractive.com/wp-content/themes/otaru/assets/img/logo.svg"
                alt=""
              />
            </a>
            <div className="footer-content">
              <div
                id="w-node-_776e4377-d00e-92dc-7a16-7a9049356307-fa4f8caa"
                className="footer-block"
              >
                <div className="title-small-copy">Blogs</div>
                <a href="/blog_readme" className="footer-link">
                  AI Generated README
                </a>
              </div>
              <div
                id="w-node-_776e4377-d00e-92dc-7a16-7a904935630c-fa4f8caa"
                className="footer-block"
              >
                <div className="title-small-copy">Code Chat</div>
                <a href="/" className="footer-link">
                  Turn Question to Code
                </a>
              </div>
              <div
                id="w-node-_776e4377-d00e-92dc-7a16-7a9049356311-fa4f8caa"
                className="footer-block"
              >
                <div className="title-small-copy">Account</div>
                <a href="/auth/google" className="footer-link">
                  Sign In
                </a>
                <a href="/auth/google" className="footer-link">
                  Create Account
                </a>
              </div>
              <div
                id="w-node-_776e4377-d00e-92dc-7a16-7a9049356318-fa4f8caa"
                className="footer-block"
              >
                <div className="title-small-copy">Support</div>
                <a href="/privacy" className="footer-link">
                  Privacy Policy
                </a>
                <a href="/terms" className="footer-link">
                  Terms &amp; Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
