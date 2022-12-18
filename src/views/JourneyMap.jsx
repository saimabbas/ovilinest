import React, { useEffect, useState, useRef } from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/faq.css";
import "../styles/utility.css";
import "../styles/journeymap.css";

// Images & Videos
import Logo1 from "../assets/img/logo-1.png";
import CBImg1 from "../assets/img/common-benefits-img-1.png";
import CBImg2 from "../assets/img/common-benefits-img-2.png";
import Ovideo from "../assets/videos/o.mp4";
import Vvideo from "../assets/videos/v.mp4";
import I1video from "../assets/videos/i1.mp4";
import Lvideo from "../assets/videos/l.mp4";
import I2video from "../assets/videos/i2.mp4";
import NESTvideo from "../assets/videos/nest.mp4";

// Components

import gsap from "gsap";
import {
  Back,
  Power3,
  Power1,
  Power2,
  Power4,
  Linear,
  Expo,
  Circ,
} from "gsap/dist/gsap";
import $ from "jquery";
import { Dropdown, Accordion } from "react-bootstrap";
import {
  MdKeyboardArrowDown,
  MdMenu,
  MdCancel,
  MdExpandMore,
} from "react-icons/md";

const JourneyMap = () => {
  useEffect(() => {
    $(window).on("load", function () {
      gsap.fromTo(
        ".home-page",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.15,
          delay: 0.5,
        }
      );
    });
  }, []);

  return (
    <div className="app">
      <main className="map-page">
        <header>
          <div className="home-box">
            <div className="header-content">
              <div className="header-left">
                <img src={Logo1} alt="Logo1" />
                <a href="#">WORLD</a>
                <a href="#">JOURNEY MAP</a>
                <a href="#">UTLITY</a>
                <a href="#">NEST</a>
                <div></div>
                <a href="#">GUIDE</a>
                <a href="#">FAQ</a>
              </div>
              <div className="header-right">
                <Dropdown>
                  <Dropdown.Toggle>
                    Link <MdKeyboardArrowDown />{" "}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="https://drive.google.com/drive/YoungPyung ">
                      YongPyong
                    </Dropdown.Item>
                    <Dropdown.Item href="https://drive.google.com/drive/YoungPyung ">
                      YouTube
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="header-mob-menu-icon">
                  <MdMenu />
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="map-section">
          <div className="home-box">
            <div className="map-content">
              <div className="section-heading">
                <div className="section-heading-box">
                  <div>
                    <h3>Journey Map</h3>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="map-grid">
                <div className="map-card">
                  <div className="mapcard-left">
                    <h5>
                      <span>O</span>pening <i>(첫둥지)</i>
                    </h5>
                    <p>우리가 궁금해? </p>
                    <p>우리 친구할까?</p>
                  </div>
                  <div className="mapcard-right-bg">
                    <div className="mapcard-right">
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>
                          오빌리의 시작! <br />
                          특별한 만남 (디스코드, 홈페이지)
                        </p>
                      </div>
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>
                          오빌리의 시작! <br />
                          특별한 만남 (디스코드, 홈페이지)
                        </p>
                      </div>
                      <div className="mcr-box">
                        <span className="complete">COMPLETE</span>
                        <p>
                          오빌리의 시작! <br />
                          특별한 만남 (디스코드, 홈페이지)
                        </p>
                      </div>
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>
                          오빌리의 시작! <br />
                          특별한 만남 (디스코드, 홈페이지)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="map-card">
                  <div className="mapcard-left">
                    <h5>
                      <span>O</span>pening <i>(첫둥지)</i>
                    </h5>
                    <p>우리가 궁금해? </p>
                    <p>우리 친구할까?</p>
                  </div>
                  <div className="mapcard-right-bg">
                    <div className="mapcard-right">
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>
                          오빌리의 시작! <br />
                          특별한 만남 (디스코드, 홈페이지)
                        </p>
                      </div>
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>
                          오빌리의 시작! <br />
                          특별한 만남 (디스코드, 홈페이지)
                        </p>
                      </div>
                      <div className="mcr-box">
                        <span className="complete">COMPLETE</span>
                        <p>
                          오빌리의 시작! <br />
                          특별한 만남 (디스코드, 홈페이지)
                        </p>
                      </div>
                      <div className="mcr-box">
                        <span>UPCOMING</span>
                        <p>
                          오빌리의 시작! <br />
                          특별한 만남 (디스코드, 홈페이지)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="home-box">
            <div className="footer-content">
              <div className="footer-top">
                <span>(주) 용평리조트 대표이사 : 신달순, 임학운</span>
                <div></div>
                <span>
                  주소 : 강원도 평창군 대관령면 올림픽로 715(구 용산리 130)
                </span>
                <div></div>
                <span>제휴문의 ovilinest@yongpyong.co.kr</span>
              </div>
              <p>Copyright 2022 YONGPYONG RESORT All right reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default JourneyMap;
