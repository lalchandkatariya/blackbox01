import React from "react";
import "../Slider/Slider.css";
import arrow_icon from '../../../../components/Assest/arrow_icon.svg'
import rev_box_img1 from '../../../../components/Assest/rev_box_img1.png'
import rev_box_img2 from "../../../../components/Assest/rev_box_img2.png"
import rev_box_img3 from "../../../../components/Assest/rev_box_img3.png"
import rev_box_img4 from "../../../../components/Assest/rev_box_img4.png"
import rev_box_img5 from "../../../../components/Assest/rev_box_img5.png"
import rev_box_img6 from "../../../../components/Assest/rev_box_img6.png"
import rev_box_largeimg01 from "../../../../components/Assest/rev_box_largeimg01.png"



export const Slider = () => {
  return (
    <div >

      <section className="MainHomeBanner">
        <div className="MainHomeBanner_Header">
          {/* <img
            src="https://otaru.qodeinteractive.com/wp-content/themes/otaru/assets/img/logo.svg"
            alt="Logo"
          /> */}
        </div>
        <div className="MainHomeBanner_content">
          <div className="HomeBanner_slider owl-carousel owl-theme">
            <div className="item">
              <div className="MainHomeBanner_slider01">
                <div className="MainHomeBanner_slider01_inner">
                  <div className="MainHomeBanner_slider01_content">
                    <div className="marquee">
                      <div className="track">
                        <div className="content">
                          Process - Solutions - Teamwork - Process - Solutions -
                          Teamwork - Process - Solutions - Teamwork - Process -
                          Solutions - Teamwork - Process - Solutions - Teamwork
                          - Process - Solutions - Teamwork - Process - Solutions
                          - Teamwork -
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="MainHomeBanner_slider02_content">
                    <div className="marquee">
                      <div className="track">
                        <div className="content">
                          Established <span>*</span> Automation <span>*</span>
                          {"{"}" "{"}"}
                          Intuitive <span>*</span> Established <span>*</span>
                          {"{"}" "{"}"}
                          Automation <span>*</span> Intuitive <span>*</span>
                          {"{"}" "{"}"}
                          Established <span>*</span> Automation <span>*</span>
                          {"{"}" "{"}"}
                          Intuitive <span>*</span> Established <span>*</span>
                          {"{"}" "{"}"}
                          Automation <span>*</span> Intuitive <span>*</span>
                          {"{"}" "{"}"}
                          Established <span>*</span> Automation <span>*</span>
                          {"{"}" "{"}"}
                          Intuitive <span>*</span> Established <span>*</span>
                          {"{"}" "{"}"}
                          Automation <span>*</span> Intuitive
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="MainHomeBanner_slider03_content">
                    <img
                      src="https://otaru.qodeinteractive.com/wp-content/uploads/2022/06/rev-3-img-1.png"
                      alt="Images"
                    />
                  </div>
                </div>
                <div className="inspired_Content">
                  <h3>Inspired to create</h3>
                  <p>
                    At vero eos et accusamus et iusto odio digniss ducimus qui
                    blanditiis praesentium.
                  </p>
                  <a href="javascript:void(0);">
                    <span>Discover more</span>
                    <span>
                      <img
                        src={arrow_icon}
                        alt="Icon"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Second page */}
      <div className="item" style={{ background: "black", marginTop: "0" }}>
        <div className="MainHomeBanner_slider02">
          <div className="MainHomeBanner_slider02_inner">
            <div className="MainHomeBanner_slider02_content">
              <div className="MainHomeBanner_slider02_content_box01">
                <ul>
                  <li>
                    <span>
                      <img src={rev_box_img1} alt="images" />
                    </span>
                    <h3>Sounds of joy</h3>
                    <p>
                      At vero eos et accusamus et iusto odio digniss ducimus qui
                      blanditiis praesentium.
                    </p>
                  </li>
                  <li>
                    <span>
                      <img src={rev_box_img2} alt="images" />
                    </span>
                    <h3>Pleasure of listening</h3>
                    <p>
                      At vero eos et accusamus et iusto odio digniss ducimus qui
                      blanditiis praesentium.
                    </p>
                  </li>
                  <li>
                    <span>
                      <img src={rev_box_img3} alt="images" />
                    </span>
                    <h3>Unlimited streaming</h3>
                    <p>
                      At vero eos et accusamus et iusto odio digniss ducimus qui
                      blanditiis praesentium.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="MainHomeBanner_slider02_content_box02">
                <span>
                  <img src={rev_box_largeimg01} alt="images" />
                </span>
              </div>
              <div className="MainHomeBanner_slider02_content_box03">
                <ul>
                  <li>
                    <span>
                      <img src={rev_box_img4} alt="images" />
                    </span>
                    <h3>Sounds of joy</h3>
                    <p>
                      At vero eos et accusamus et iusto odio digniss ducimus qui
                      blanditiis praesentium.
                    </p>
                  </li>
                  <li>
                    <span>
                      <img src={rev_box_img5} alt="images" />
                    </span>
                    <h3>Pleasure of listening</h3>
                    <p>
                      At vero eos et accusamus et iusto odio digniss ducimus qui
                      blanditiis praesentium.
                    </p>
                  </li>
                  <li>
                    <span>
                      <img src={rev_box_img6} alt="images" />
                    </span>
                    <h3>Unlimited streaming</h3>
                    <p>
                      At vero eos et accusamus et iusto odio digniss ducimus qui
                      blanditiis praesentium.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};
